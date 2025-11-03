'use client'

import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold text-gray-800">Gabriel</h2>
          <p className="text-sm text-gray-500">
            Building elegant and functional web experiences.
          </p>
        </div>

        <div className="flex gap-4 justify-center">
          <a
            href="https://github.com/GabGlt"
            target="_blank"
            className="p-2 rounded-full bg-white shadow hover:shadow-md hover:-translate-y-0.5 transition-all"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/gabrieljonathan/"
            target="_blank"
            className="p-2 rounded-full bg-white shadow hover:shadow-md hover:-translate-y-0.5 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:gabrieljonathan715@gmail.com"
            className="p-2 rounded-full bg-white shadow hover:shadow-md hover:-translate-y-0.5 transition-all"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>

      <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} <span className="font-semibold text-gray-700">Gabriel</span>. All rights reserved.
      </div>
    </footer>
  )
}
