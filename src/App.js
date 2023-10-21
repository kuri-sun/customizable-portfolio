import "./App.css";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hiro from "./components/Hiro";
import Skills from "./components/Skills";
import Certs from "./components/Certs";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    document.title = "Haruki Kuriwada";
    AOS.init();
  }, []);
  return (
    <div className="flex flex-col gap-32">
      <div className="flex flex-col gap-24 px-6 md:px-12 lg:px-20 xl:px-36">
        <Navbar />
        <Hiro />
        <Skills />
        <Projects />
        <Certs />
      </div>
      <Footer />
    </div>
  );
}

export default App;
