import Background from './Components/Background'
import ScrollProgress from './Components/ScrollProgress'
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
    <div className="relative min-h-screen font-display text-white">
      <Background />
      <ScrollProgress />
      <Navbar />

      <main className="mx-auto max-w-6xl px-5 md:px-8">
        <Hero />
        <Stats />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
