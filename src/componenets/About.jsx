import { dev, ps, team } from "../assets/assets.js";
import AboutCard from "./AboutCard";
import Project from "./Project";

function About() {
  return (
    <div className="bg-[#121e28] px-5 2xl:px-[200px] py-[20px] pb-[80px] xl:px-[100px] text-center flex flex-col lg:flex-row items-center justify-between ">
      <div className="py-8 hidden lg:block">
        <AboutCard label={"Web Development"} image={dev} dot />
        <AboutCard label={"Problem Solver"} image={ps} dot />
        <AboutCard label={"Team Player"} image={team} />
      </div>

      <div className="sm:w-[60%]">
        <h2 className="text-2xl text-white font-bold lg:text-3xl">About Me</h2>
        <div className="py-8 lg:hidden">
          <AboutCard label={"Web Development"} image={dev} dot />
          <AboutCard label={"Problem Solver"} image={ps} dot />
          <AboutCard label={"Team Player"} image={team} />
        </div>
        <p className=" m-auto text-white/80 pt-[28px] leading-[28px]  lg:text-left">
          I started my Web Development journey from my College 1st year,Thout
          that, I learned to love the process of creating from scratch,since
          then,this has lead to me Web Development as it fulfills my love for
          learning and building things.
        </p>
        <Project />
      </div>
    </div>
  );
}

export default About;
