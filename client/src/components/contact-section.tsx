import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').min(2, 'Name must be at least 2 characters'),
  email: z.string().min(1, 'Email is required').email('Please enter a valid email'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(1, 'Message is required').min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await apiRequest('POST', '/api/contact', data);
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you within 24 hours.",
      });
      reset();
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: "YouTube",
      url: "https://www.youtube.com/@tayanadhif",
      icon: "fab fa-youtube",
      bgColor: "bg-red-50 hover:bg-red-100",
      iconColor: "text-red-600",
      description: "10K+ subscribers"
    },
    {
      name: "GitHub", 
      url: "https://github.com/tayanadhif",
      icon: "fab fa-github",
      bgColor: "bg-slate-50 hover:bg-slate-100", 
      iconColor: "text-slate-700",
      description: "Code repositories"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/the_spectacular_nadhif_17/",
      icon: "fab fa-instagram",
      bgColor: "bg-pink-50 hover:bg-pink-100",
      iconColor: "text-pink-600", 
      description: "Personal updates"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/nadhif-aydin-adinandra-2202a137b/",
      icon: "fab fa-linkedin",
      bgColor: "bg-blue-50 hover:bg-blue-100",
      iconColor: "text-blue-600",
      description: "Professional network"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" data-testid="contact-title">Get In Touch</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto" data-testid="contact-subtitle">
            Ready to collaborate or have a project in mind? I'd love to hear from you!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8" data-testid="contact-form-container">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
              <div>
                <Label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Full Name
                </Label>
                <Input
                  {...register('name')}
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  className="w-full"
                  data-testid="input-name"
                />
                {errors.name && (
                  <p className="text-red-600 text-sm mt-1" data-testid="error-name">
                    {errors.name.message}
                  </p>
                )}
              </div>
              
              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address
                </Label>
                <Input
                  {...register('email')}
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full"
                  data-testid="input-email"
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1" data-testid="error-email">
                    {errors.email.message}
                  </p>
                )}
              </div>
              
              <div>
                <Label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                  Subject
                </Label>
                <Input
                  {...register('subject')}
                  id="subject"
                  type="text"
                  placeholder="Project collaboration, question, etc."
                  className="w-full"
                  data-testid="input-subject"
                />
                {errors.subject && (
                  <p className="text-red-600 text-sm mt-1" data-testid="error-subject">
                    {errors.subject.message}
                  </p>
                )}
              </div>
              
              <div>
                <Label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </Label>
                <Textarea
                  {...register('message')}
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project or question..."
                  className="w-full"
                  data-testid="input-message"
                />
                {errors.message && (
                  <p className="text-red-600 text-sm mt-1" data-testid="error-message">
                    {errors.message.message}
                  </p>
                )}
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 transform hover:scale-105"
                data-testid="button-submit"
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane mr-2"></i>
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8" data-testid="contact-info-container">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center" data-testid="contact-email">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <i className="fas fa-envelope text-primary-600"></i>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">Email</p>
                    <a 
                      href="mailto:tayanadhif@gmail.com" 
                      className="text-slate-900 font-medium hover:text-primary-600 transition-colors duration-200"
                      data-testid="link-email"
                    >
                      tayanadhif@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center" data-testid="contact-location">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <i className="fas fa-map-marker-alt text-primary-600"></i>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">Location</p>
                    <p className="text-slate-900 font-medium">Depok, West Java, Indonesia</p>
                  </div>
                </div>
                
                <div className="flex items-center" data-testid="contact-response-time">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <i className="fas fa-clock text-primary-600"></i>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">Response Time</p>
                    <p className="text-slate-900 font-medium">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="bg-white rounded-2xl shadow-lg p-8" data-testid="social-media-container">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Follow Me</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener" 
                    className={`flex items-center p-4 ${social.bgColor} rounded-lg transition-colors duration-200 group`}
                    data-testid={`link-social-${social.name.toLowerCase()}`}
                  >
                    <i className={`${social.icon} ${social.iconColor} text-xl mr-3 group-hover:scale-110 transition-transform duration-200`}></i>
                    <div>
                      <p className="font-medium text-slate-900">{social.name}</p>
                      <p className="text-xs text-slate-600">{social.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
