
import { useState } from "react";
import "./App.css";
import HeroSection from "./Pages/HeroSection";
import FollowMe from "./Components/FollowMe/FollowMe";

function App() {
  const [loading, setloading] = useState(true)
  setTimeout(() => {
    setloading(false)
  }, 500);
  return (
    <div>
      {/* <FollowMe/> */}
     {!loading&&<HeroSection/>}
    </div>
  );
}

export default App;
