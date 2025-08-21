export default function Project({cp,exp}) {
  return (
    <div className=" flex align-center justify-center lg:justify-start gap-[20px] lg:gap-[80px] mt-[30px]">
      <div>
        <h1 className="text-white font-bold text-2xl">
          {cp}<span className="text-3xl text-red-400">&#43;</span>
        </h1>
        <p className="text-white">
          Completed <br></br>Projects
          
        </p>
      </div>
      <div>
        <h1 className="text-white font-bold text-2xl">
          {" "}
         0{exp}<span className="text-3xl text-red-400">&#43;</span>
        </h1>
        <p className="text-white">
          Year of <br></br>Experience
        </p>
      </div>
      <div>
        <h1 className="text-white font-bold text-2xl">
          {" "}
          0{exp}<span className="text-3xl text-red-400">&#43;</span>
        </h1>
        <p className="text-white">
          Year of <br></br>Experience
        </p>
      </div>
    </div>
  );
}
