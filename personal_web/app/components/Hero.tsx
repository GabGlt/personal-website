'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Hero() {
  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative py-32 bg-gradient-to-b from-white via-gray-50 to-gray-100"
    >
      {/* Container sejajar dengan navbar */}
      <div className="max-w-7xl mx-auto px-8 flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
        {/* Left Text Section */}
        <div className="text-center lg:text-left space-y-6 lg:w-1/2">
          <p className="text-gray-600 text-lg">Hi, I am</p>
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Gabriel <span className="text-blue-600">Jonathan</span>
          </h1>
          <p className="text-gray-700 text-lg max-w-xl mx-auto lg:mx-0">
            Passionate about AI, Machine Learning, and Web Development.
          </p>

          {/* Social icons */}
          <div className="flex justify-center lg:justify-start gap-5 mt-6">
            <a
              href="https://www.linkedin.com/in/gabrieljonathan/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 hover:bg-blue-100 shadow-sm transition"
            >
              <FaLinkedin size={24} color="#0077B5" />
            </a>
            <a
              href="https://github.com/GabGlt"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 shadow-sm transition"
            >
              <FaGithub size={24} color="#000000" />
            </a>
            <a
              href="mailto:gabrieljonathan715@gmail.com"
              className="p-3 rounded-full bg-gray-100 hover:bg-red-100 shadow-sm transition"
            >
              <FaEnvelope size={24} color="#D14836" />
            </a>
          </div>

          <div className="mt-8">
            <a
              href="#projects"
              className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition font-medium shadow-md"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* Right Image Section */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="relative w-72 h-96 lg:w-[380px] lg:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-white/80 backdrop-blur-sm flex items-center justify-center"
        >
          <Image
            src="/profile.jpg"
            alt="Gabriel Jonathan"
            fill
            className="object-contain object-top scale-105"
            priority
          />
        </motion.div>
      </div>
    </motion.section>
  )
}
