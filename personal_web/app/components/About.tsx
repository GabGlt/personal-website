'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-20 px-8 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex justify-center mb-16">
          <div className="border-2 border-black px-8 py-4">
            <h2 className="text-2xl font-bold text-black tracking-wider">
              ABOUT ME
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left text */}
          <div className="lg:col-span-2 text-gray-700 space-y-6">
            <p className="text-lg leading-relaxed border-l-4 border-black/10 pl-4">
              I’m Gabriel, a Computer Science undergraduate at BINUS University
              (5th semester). My focus areas include Machine Learning, NLP, and
              Computer Vision with strong interests in AI systems and
              cybersecurity.
            </p>
            <p className="text-lg leading-relaxed border-l-4 border-black/10 pl-4">
              I’ve contributed to academic projects, mentoring programs, and team
              leadership initiatives. I love solving technical challenges and
              building impactful AI and web applications.
            </p>
            <p className="text-lg leading-relaxed border-l-4 border-black/10 pl-4">
              My portfolio includes educational platforms, health apps, and
              industrial anomaly detection systems. Feel free to connect or
              collaborate!
            </p>

            <a
              href="/Gabriel%20Jonathan%20-%20Resume.pdf"
              download="Gabriel Jonathan - Resume.pdf"
              className="inline-block mt-8 px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition font-medium"
            >
              Download Resume
            </a>
          </div>

          {/* Right info */}
          <div className="space-y-8 bg-white p-8 rounded-lg h-fit shadow-sm">
            <div>
              <h3 className="font-bold text-black text-sm mb-2">EDUCATION</h3>
              <p className="text-gray-600 text-sm">
                BSc in Computer Science, BINUS University (GPA 3.63 / 4.00)
              </p>
            </div>
            <div>
              <h3 className="font-bold text-black text-sm mb-2">EXPERTISE</h3>
              <p className="text-gray-600 text-sm">
                Machine Learning, NLP, Computer Vision, Web Development
              </p>
            </div>
            <div>
              <h3 className="font-bold text-black text-sm mb-2">SKILLS</h3>
              <p className="text-gray-600 text-sm">
                C, Java, JavaScript, Python, PHP, MySQL, React Native, Laravel,
                TensorFlow, scikit-learn
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
