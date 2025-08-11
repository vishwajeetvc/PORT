import { image } from "../assets/assets.js"

function Button({label, dark}){
  return <>
    <button className={`${!dark ? "bg-[#f66f5c]" : "border-2 border-[#f66f5c]"} font-bold px-4 py-3 rounded `}>
      {label}
    </button>
  </>

}
function Hero() {
  return (
    <div className={ `bg-[#121e28] h-[100vh] lg:h-[70vh] text-white lg:flex lg:justify-around lg:items-center 2xl:px-[200px] xl:px-[100px] `}>
      <div className={`text-center lg:text-left px-5 pt-[40px] lg:pt-[0px] flex flex-col gap-[20px] lg:w-[60%]`}>
        <h2 className="font-bold text-4xl lg:text-6xl">
          <span>Hello</span>
          <span className="bg-[#f66f5c] rounded-full mx-1 w-[10px] inline-block h-[10px] relative"></span>
        </h2>
        <p className="text-3xl lg:text-5xl relative flex flex-col items-center gap-2 z-0">
          <span className="font-[Playwrite_CA] font-thin lg:py-5">I'm Vishwajeet</span>
          <span className="w-[150px] h-[3px] bg-[#f66f5c]"></span>
        </p>
        <h1 className="font-bold text-4xl lg:text-6xl">Web Developer</h1>
        <div className=" flex justify-center lg:justify-start gap-5">
          <Button label={"Get a Project"}/>
          <Button label={"My Resume"} dark/>
        </div>
      </div>
      {/*image*/}
      <div 
        style={{
        }}
        className="py-10 flex justify-center lg:w-[40%]">
        <img src={image} alt=""/>
      </div>
    </div>
  )
}

export default Hero
