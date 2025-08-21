import Hero from "./componenets/Hero"
import Navbar from "./componenets/Navbar"
import About from "./componenets/About"
import Skill_Slider from "./componenets/Skill_Slider"

import Footer from "./componenets/footet"

function App() {

  const data = {
    name : "Kanhaiya Kumar",
    skills : ['HTML', 'CSS'],
  }



  return (
    <div>
      <Navbar name={data.name}/>
      <Hero/>
      <Skill_Slider/>
      <About/>
      <Footer />
    </div>
  )
}

export default App
