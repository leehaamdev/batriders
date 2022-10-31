import Nav from "./components/Nav/Nav"
import HeroSection from "./components/HeroSection/HeroSection"
import Services from "./components/Services/Services"
import Projects from "./components/Projects/Projects"
import Features from "./components/Features/Features"
import Team from "./components/Team/Team"
import Customers from "./components/Customers/Customers"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"


function App() {
  return (
    <div className="font-skia text-white bg-back">
      <Nav />
      <HeroSection />
      <Services />
      <Projects />
      <Features />
      <Team />
      <Customers />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
