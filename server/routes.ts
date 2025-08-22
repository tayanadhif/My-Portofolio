import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import nodemailer from "nodemailer";

const contactSchema = z.object({
  name: z.string().min(1).min(2),
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(1).min(10),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactSchema.parse(req.body);
      
      // Check if email credentials are properly configured
      const emailUser = process.env.EMAIL_USER;
      const emailPass = process.env.EMAIL_PASS || process.env.EMAIL_PASSWORD;
      
      if (!emailUser || !emailPass || emailPass === 'your-app-password') {
        console.log("Email not configured - contact form submitted:", {
          name: validatedData.name,
          email: validatedData.email,
          subject: validatedData.subject,
          message: validatedData.message
        });
        
        res.json({
          success: true,
          message: "Message received! (Email service not configured in development)"
        });
        return;
      }
      
      // Configure nodemailer transporter
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: emailUser,
          pass: emailPass
        }
      });

      // Email content
      const mailOptions = {
        from: emailUser,
        to: emailUser, // Send to yourself
        subject: `Portfolio Contact: ${validatedData.subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Subject:</strong> ${validatedData.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
          <hr>
          <p><em>This message was sent from your portfolio website contact form.</em></p>
        `,
        replyTo: validatedData.email
      };

      // Send email
      await transporter.sendMail(mailOptions);
      
      res.json({ 
        success: true, 
        message: "Message sent successfully!" 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data",
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to send message. Please try again later." 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
