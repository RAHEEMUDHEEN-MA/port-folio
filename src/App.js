
import { useState } from "react";
import "./App.css";
import HeroSection from "./Pages/HeroSection";

function App() {
  const [loading, setloading] = useState(true)
  setTimeout(() => {
    setloading(false)
  }, 500);
  return (
    <div>
     {!loading&&<HeroSection/>}
    </div>
  );
}

export default App;
