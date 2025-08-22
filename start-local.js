#!/usr/bin/env node

// Starter script for VS Code development
// This script sets up environment variables and starts the application

import { spawn } from 'child_process';
import { existsSync } from 'fs';
import path from 'path';

console.log('🚀 Starting Portfolio Website for Local Development...\n');

// Check if .env file exists
if (!existsSync('.env')) {
  console.log('⚠️  No .env file found. Creating from example...');
  
  // Set basic environment variables for development
  process.env.NODE_ENV = 'development';
  process.env.PORT = '5000';
  
  console.log('✅ Environment configured for development');
  console.log('📝 Create a .env file for email and database features\n');
} else {
  console.log('✅ Found .env file\n');
}

// Check for common issues
const emailConfigured = process.env.EMAIL_USER && process.env.EMAIL_PASS && 
                        process.env.EMAIL_PASS !== 'your-app-password' && 
                        process.env.EMAIL_PASS !== 'your-gmail-app-password';

const databaseConfigured = process.env.DATABASE_URL && 
                          !process.env.DATABASE_URL.includes('localhost') ||
                          process.env.DATABASE_URL.includes('neon.db') ||
                          process.env.DATABASE_URL.includes('railway') ||
                          process.env.DATABASE_URL.includes('supabase');

console.log('📋 Configuration Status:');
console.log(`   ${emailConfigured ? '✅' : '⚠️'} Email (contact form): ${emailConfigured ? 'Configured' : 'Not configured - will log to console'}`);
console.log(`   ${databaseConfigured ? '✅' : '⚠️'} Database: ${databaseConfigured ? 'Configured' : 'Not configured - app will still work'}`);
console.log();

// Start the application
console.log('🔥 Starting development server...\n');

const child = spawn('npm', ['run', 'dev'], {
  stdio: 'inherit',
  shell: true
});

child.on('close', (code) => {
  console.log(`\n👋 Development server stopped with code ${code}`);
});

// Handle process termination
process.on('SIGINT', () => {
  console.log('\n🛑 Stopping development server...');
  child.kill('SIGINT');
});