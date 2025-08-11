import Project from "./Project";
function About() {
  return (
    <div className="bg-[#121e28] px-5 2xl:px-[200px] py-[20px] pb-[80px] xl:px-[100px] text-center">
      <h2 className="text-2xl text-white font-bold lg:text-3xl">About Me</h2>
      <p className="sm:w-xl m-auto text-white/80 pt-[28px] leading-[28px]">
        I started my Web Development journey from my College 1st year,Thout
        that, I learned to love the process of creating from scratch,since
        then,this has lead to me Web Development as it fulfills my love for
        learning and building things.
      </p>

      <Project />
    </div>
  );
}

export default About;
