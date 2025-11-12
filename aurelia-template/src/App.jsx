
import Collection from './components/Collection/Collection'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Presentation from './components/presentation/Presentation'
import Experience from './components/Experience/Experience';
import './globals.css'
import Atelier from './components/Atelier/Atelier';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {


  return (
    <>
      <Navbar />
      <Hero />
      <Presentation />
      <Collection />
      <Experience />
      <Atelier />
      <Contact />
      <Footer />
    </>
  )
}

export default App
