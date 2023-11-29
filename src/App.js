import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hiro from "./components/Hiro";
import Skills from "./components/Skills";
import Certs from "./components/Certs";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Detect the night OR light time. (6AM - 6PM is light time(my definition))
    const hours = new Date().getHours();
    const isDayTime = hours > 6 && hours < 20;
    setIsDarkMode(!isDayTime);
    // Change web browser title.
    document.title = "Haruki Kuriwada";
    AOS.init();
  }, []);

  return (
    <div className={`flex flex-col ${isDarkMode ? "bg-dark-200" : "bg-white"}`}>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <div className={`flex flex-col gap-24 px-6 md:px-12 lg:px-20 xl:px-36`}>
        <Hiro isDarkMode={isDarkMode} />
        <Skills isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode} />
        <Certs isDarkMode={isDarkMode} />
      </div>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
