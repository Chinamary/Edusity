import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Program from "./components/Program/Program";
import Text from "./components/Text/Text";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contacts/Contact";
import Footer from "./components/Footer/Footer";



function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Text subTitle = "Our Programs" title = "What we offer"/>
        <Program />
        <About />
        <Text subTitle = "Gallery" title = "Campus Photos"/>
        <Campus />
        <Text subTitle = "Testimonials" title = "What Student Says"/>
        <Testimonials />
        <Text  subTitle = "contact us" title = "Get in touch"/>
        <Contact />
      </div>
        <Footer />
    </>
  );
}

export default App;
