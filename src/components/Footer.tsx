
import React from 'react';
import { Github, Twitter, Linkedin, Mail, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 pt-16 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <div className="col-span-1">
            <div className="mb-5 font-display text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              GenAI Labs
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
              Practical, hands-on learning experiences for AI, cloud computing, and no-code solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Github size={18} />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary text-sm transition-colors">All Courses</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary text-sm transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary text-sm transition-colors">For Teams</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary text-sm transition-colors">For Enterprises</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary text-sm transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary text-sm transition-colors">Learning Paths</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary text-sm transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary text-sm transition-colors">Community</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary text-sm transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary text-sm transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary text-sm transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} GenAI Practical Labs. All rights reserved.
          </p>
          <div className="flex items-center mt-4 md:mt-0">
            <a href="mailto:hello@genai-practicallabs.com" className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary text-sm mr-6 transition-colors">
              <Mail size={14} className="mr-2" />
              Contact Us
            </a>
            <a href="https://www.genai-practicallabs.com" className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary text-sm transition-colors">
              <Globe size={14} className="mr-2" />
              www.genai-practicallabs.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
