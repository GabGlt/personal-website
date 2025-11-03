'use client'

import Image from 'next/image'
import { useRef } from 'react'

export default function FeaturedProjects() {
  const carouselRef = useRef<HTMLDivElement>(null)

  const projects = [
    {
      title: 'JeniusAcademy',
      description:
        'An educational web platform developed using HTML, CSS, and JavaScript, applying HCI principles for a clean and user-friendly interface.',
      tech: ['HTML', 'CSS', 'JavaScript', 'HCI'],
      img: '/JeniusAcademy.jpg',
      demo: 'https://jeniusacademy.vercel.app/',
      code: '',
    },
    {
      title: 'Beefix',
      description:
        'A handyman hiring web platform built with Laravel (PHP + Blade) to help companies manage technicians, schedules, and job requests — developed and sold for a client’s personal business use.',
      tech: ['Laravel', 'PHP', 'Blade', 'MySQL'],
      img: '/Beefix.jpg',
      demo: '',
      code: '',
    },
    {
      title: 'Screw Anomaly Detection',
      description:
        'A Streamlit-based web app using the MUSE model from scikit-learn to detect screw defects and prevent potential mechanical failures.',
      tech: ['Streamlit', 'Python', 'scikit-learn', 'MUSE Model'],
      img: '/ScrewAnomaly.jpg',
      demo: 'https://screw-anomaly-classification.streamlit.app/',
      code: '',
    },
    {
      title: 'NutriFit',
      description:
        'A health tracking app developed with React Native for the frontend and Express.js with MySQL for the backend.',
      tech: ['React Native', 'Express.js', 'MySQL', 'Node.js'],
      img: '/NutriFit.jpg',
      demo: '',
      code: 'https://github.com/ortensutanto/nutrifit',
    },
    {
      title: '2Deuce',
      description:
        'A Laravel-based movie ticket booking app using Blade templates and Bootstrap for a smooth and consistent user experience.',
      tech: ['Laravel', 'Bootstrap', 'Blade', 'PHP'],
      img: '/2Deuce.jpg',
      demo: '',
      code: 'https://github.com/StevieAdrian/2Deuce',
    },
  ]

  const scroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return

    const container = carouselRef.current
    const cardWidth = container.children[0].clientWidth
    const gap = 32
    const scrollAmount = cardWidth + gap

    if (direction === 'right') {
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 5) {
        container.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
      }
    } else {
      if (container.scrollLeft <= 0) {
        container.scrollTo({ left: container.scrollWidth, behavior: 'smooth' })
      } else {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
      }
    }
  }

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 relative">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Featured Projects</h2>

        {/* Tombol kiri */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-100"
        >
          &#8249;
        </button>

        {/* Tombol kanan */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-100"
        >
          &#8250;
        </button>

        {/* Cards */}
        <div ref={carouselRef} className="flex gap-8 overflow-hidden scroll-smooth">
          {projects.map((p, idx) => (
            <div
              key={idx}
              className="relative flex-shrink-0 w-[26rem] h-[24rem] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Background Image tanpa abu-abu */}
              <Image
                src={p.img}
                alt={p.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />

              {/* Gradient lembut dari bawah */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              {/* Overlay Content */}
              <div className="absolute bottom-0 p-6 text-white z-10">
                <h3 className="font-semibold text-2xl mb-2">{p.title}</h3>
                <p className="text-sm text-gray-200 mb-3">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((t, i) => (
                    <span
                      key={i}
                      className="bg-white/20 text-xs px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Tombol */}
                {p.demo ? (
                  <a
                    href={p.demo}
                    target="_blank"
                    className="border border-white px-4 py-1 rounded text-sm hover:bg-white hover:text-black transition-colors"
                  >
                    View Demo
                  </a>
                ) : p.code ? (
                  <a
                    href={p.code}
                    target="_blank"
                    className="border border-white px-4 py-1 rounded text-sm hover:bg-white hover:text-black transition-colors"
                  >
                    View Code
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
