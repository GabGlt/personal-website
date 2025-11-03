'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200'
          : 'bg-white/50 backdrop-blur-sm border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        <a
          href="#home"
          className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
        >
          Gabriel
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 text-gray-700 text-sm font-medium">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-blue-600 transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded hover:bg-gray-100 transition"
          aria-label="Toggle Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-gray-200 shadow-sm flex flex-col items-center gap-4 py-6"
        >
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  )
}
