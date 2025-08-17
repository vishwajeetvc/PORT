import { aa } from "../assets/assets.js"
import { img } from "../assets/assets.js"

function Button({label, dark}){
  return <>
    <button className={`${!dark ? "bg-[#f66f5c]" : "border-2 border-[#f66f5c]"} font-bold px-4 py-3 rounded `}>
      {label}
    </button>
  </>
}
function Hero() {
  return (
    <div className={ `
      bg-[#121e28] h-[calc(100vh-200px)] lg:h-[calc(100vh-145px)] px-5 
      text-white flex flex-col lg:flex-row items-center justify-end gap-[20px] lg:gap-auto
      lg:justify-around lg:items-center 2xl:px-[200px] xl:px-[100px] `}>

      <div className={`text-center lg:text-left pt-[40px] lg:pt-[0px] flex flex-col gap-[20px] lg:w-[50%] `}>
        <h2 className="font-bold text-4xl lg:text-6xl">
          <span>Hello</span>
          <span className="bg-[#f66f5c] rounded-full mx-1 w-[10px] inline-block h-[10px] relative"></span>
        </h2>
        <p className="text-3xl lg:text-5xl relative flex flex-col items-center lg:items-start lg:left-[100px] gap-2 z-0">
          <span className="font-[Playwrite_CA] font-thin lg:py-5">I'm Vishwajeet</span>
          <span className="w-[150px] h-[3px] bg-[#f66f5c]"></span>
        </p>
        <h1 className="font-bold text-4xl lg:text-6xl">Web Developer</h1>
        <div className=" flex justify-center lg:justify-start gap-5 lg:my-8">
          <Button label={"Get a Project"}/>
          <Button label={"My Resume"} dark/>
        </div>
      </div>
      {/*image*/}
      <div 
        className="flex justify-center w-[100%] rounded-full lg:w-[50%] relative h-[300px] lg:min-h-[400px] lg:h-[100%] bg-cover bg-center ">

        <span className={
          `absolute h-[240px] w-[240px] lg:w-[500px] lg:h-[500px] 2xl:w-[600px] 2xl:h-[600px] 
          border-[20px] lg:border-[35px] top-[60%] left-[50%] translate-[-50%] border-[#f66f5c] bg-[#121e28] rounded-full`
        }></span>
        <span 
          className={`absolute w-[150px] inline-block h-[150px] top-[40%] rounded-full shadow-[0_0_200px_10px_#f66f5c] lg:shadow-[0_0_800px_100px_#f66f5c]`}></span>
        <div 
          style={{
            backgroundImage:`url(${img})`,
            backgroundPosition:'center',
            backgroundRepeat:'no-repeat',
          }}
          className="flex justify-center absolute  z-10 w-[100%] top-0 h-[300px] lg:min-h-[400px] lg:h-[100%] bg-cover bg-center ">
        </div>
      </div>
    </div>
  )
}

export default Hero
