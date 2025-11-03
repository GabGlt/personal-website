import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />

      <section id="contact" className="py-20 px-8 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Let&apos;s work together!
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-10 leading-relaxed">
          I&apos;m always interested in new opportunities and collaborations. 
          Feel free to reach out if you&apos;d like to discuss a project or just say hello!
        </p>

        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="font-semibold text-gray-800">Email:</h3>
            <p>gabrieljonathan715@gmail.com</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Phone:</h3>
            <p>+62 852 7197 7635</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Location:</h3>
            <p>Jakarta, Indonesia</p>
          </div>
        </div>
      </section>
    </>
  );
}

