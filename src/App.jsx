import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedOn from './components/FeaturedOn';
import Books from './components/Books';
import Courses from './components/Courses';
import ContentSections from './components/ContentSections';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import './index.css';

function App() {
  return (
    <div className="relative w-full min-h-screen">
      <Navbar />
      
      {/* Remove absolute wrapper */}
      <div className="">
        <Hero />
        <About />
        <FeaturedOn />
        <Books />
        <Courses />
        <ContentSections />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}

export default App