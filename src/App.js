
import { useState } from "react";
import "./App.css";
import HeroSection from "./Pages/HeroSection";
import About from "./Pages/About";
// import FollowMe from "./Components/FollowMe/FollowMe";

function App() {
  const [loading, setloading] = useState(true)
  setTimeout(() => {
    setloading(false)
  }, 0);
  return (
    <div>
      
    
      {/* <FollowMe/> */}
      {!loading&&<HeroSection/>}
      
     <About/>
     <About/>


    </div>
  );
}

export default App;
