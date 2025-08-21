import Hero from "./componenets/Hero"
import Navbar from "./componenets/Navbar"
import About from "./componenets/About"
import Skill_Slider from "./componenets/Skill_Slider"
import Footer from "./componenets/footet"

import data from "../portfolio"
import PersonlaProject from "./componenets/PersonalProject"

function App() {

  return (
    <div>
      <Navbar name={data.name}/>
      <Hero name={data.name} avatar={data.avatar}/>
      <Skill_Slider skills={data.coding_skills} />
      <About 
        intro={data.intro}
        cp={data.completedProjects}
        exp={data.yearsOfExp}
        />
      <PersonlaProject projects={data.projects}/>
      <Footer 
        socialMedia= {data.socialMedia}
        name={data.name}
        />
    </div>
  )
}

export default App
