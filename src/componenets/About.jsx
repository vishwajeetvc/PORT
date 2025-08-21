import { dev, ps, team } from "../assets/assets.js";
import AboutCard from "./AboutCard";
import Exp from "./Exp.jsx";

function About({intro, cp, exp}) {
  return (
    <div className="bg-[#121e28] px-5 2xl:px-[200px] py-[100px] xl:px-[100px] text-center flex flex-col lg:flex-row justify-around ">
      <div className="py-8 hidden lg:block ">
        <AboutCard label={"Web Development"} image={dev} dot />
        <AboutCard label={"Problem Solver"} image={ps} dot />
        <AboutCard label={"Team Player"} image={team} />
      </div>

      <div className="sm:w-[50%]">
        <h2 className="text-2xl text-white mt-8 font-bold lg:text-3xl lg:text-left">About Me</h2>
        <div className="py-8 lg:hidden">
          <AboutCard label={"Web Development"} image={dev} dot />
          <AboutCard label={"Problem Solver"} image={ps} dot />
          <AboutCard label={"Team Player"} image={team} />
        </div>
        <p className=" m-auto text-justify mt-4 text-white/80 pt-[28px] leading-[28px]  lg:text-left">
          {intro}
        </p>
        <Exp cp={cp} exp={exp} />
      </div>
    </div>
  );
}

export default About;
