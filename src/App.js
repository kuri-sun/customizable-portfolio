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
    <div className="flex flex-col gap-24 px-6 lg:px-20 xl:px-36 bg-gray-500">
      <Navbar />
      <Hiro />
      <Skills />
      <Certs />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
