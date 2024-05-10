import React from "react";
import styles from "./style";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  return (
    <div className="bg-[#2e3440] w-full overflow-hidden">
      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.boxWidth}`}>
        <Home />
        <About />
      </div>
    </div>
  );
};

export default App;
