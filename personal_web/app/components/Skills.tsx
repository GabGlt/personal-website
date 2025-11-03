'use client'

import { motion } from 'framer-motion'
import {
  FaReact,
  FaPython,
  FaLaravel,
  FaGitAlt,
  FaDatabase,
} from 'react-icons/fa'
import {
  SiJavascript,
  SiExpress,
  SiMysql,
  SiNumpy,
  SiScikitlearn,
  SiTensorflow,
  SiHtml5,
  SiCss3,
  SiStrapi, // Ganti SiRestapi → SiStrapi
  SiGit,
  SiStreamlit,
  SiPostgresql,
  SiSqlite,
} from 'react-icons/si'
import { BsGearWideConnected } from 'react-icons/bs'
import type { IconType } from 'react-icons'

export default function Skills() {
  const skills = [
    {
      title: 'Programming & Technical Skills',
      items: [
        'JavaScript',
        'Python',
        'SQL',
        'React Native',
        'Laravel',
        'Express.js',
        'NumPy',
        'scikit-learn',
        'TensorFlow',
        'CV2',
        'NLTK',
      ],
    },
    {
      title: 'Web & Database',
      items: ['HTML', 'CSS', 'RESTful APIs', 'MySQL', 'SSMS'],
    },
    {
      title: 'Tools & Other Skills',
      items: ['Git', 'GitHub', 'Streamlit'],
    },
  ]

  // Peta skill ke ikon
  const iconMap: Record<string, IconType> = {
    JavaScript: SiJavascript,
    Python: FaPython,
    'React Native': FaReact,
    Laravel: FaLaravel,
    'Express.js': SiExpress,
    NumPy: SiNumpy,
    'scikit-learn': SiScikitlearn,
    TensorFlow: SiTensorflow,
    HTML: SiHtml5,
    CSS: SiCss3,
    'RESTful APIs': SiStrapi, // pakai Strapi sebagai pengganti simbol API
    MySQL: SiMysql,
    SSMS: FaDatabase,
    SQL: FaDatabase,
    Git: SiGit,
    GitHub: FaGitAlt,
    Streamlit: SiStreamlit,
    SQLite: SiSqlite,
    PostgreSQL: SiPostgresql,
  }

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-20 px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex justify-center mb-16">
          <div className="border-2 border-black px-8 py-4">
            <h2 className="text-2xl font-bold text-black tracking-wider">SKILLS</h2>
          </div>
        </div>

        {/* Grid */}
        <div className="space-y-12">
          {skills.map((skill) => (
            <div key={skill.title}>
              <h3 className="font-bold text-black text-lg mb-6">{skill.title}:</h3>
              <div className="flex flex-wrap justify-center gap-6">
                {skill.items.map((item) => {
                  const Icon = iconMap[item] || BsGearWideConnected
                  return (
                    <motion.div
                      key={item}
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center space-y-3 bg-gray-100 rounded-lg p-4 w-28 h-28 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                        <Icon size={32} color="#374151" />
                      </div>
                      <span className="text-xs font-semibold text-gray-700 text-center">
                        {item}
                      </span>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
