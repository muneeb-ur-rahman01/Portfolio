import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Stats from './Components/Stats'
import Skills from './Components/Skills'
import Experience from './Components/Experience'
import Projects from './Components/Projects'
import Education from './Components/Education'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Navbar />

      <main className="px-4 md:px-12 py-6 space-y-10">
        <Hero />
        <Stats />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <Footer/>
      </main>
    </div>
  );
}