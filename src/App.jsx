import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import About from './About.jsx';
import Skills from './Skills.jsx';
// import Expi from './Experiance.jsx';
import Project from './Projects.jsx';
import Certifi from './Certification.jsx';
import Education from './Education.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';
function App(){
  return(
    <>
    <Navbar />
    <Hero />
    <About />
    <Skills />
    {/* <Expi /> */}
    <Project />
    <Certifi />
    <Education />
    <Contact />
    <Footer />
    </>
  );
}
export default App