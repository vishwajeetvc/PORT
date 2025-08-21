import { aa } from "../assets/assets.js"
import { pp } from "../assets/assets.js"
import { kk } from "../assets/assets.js"
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
      bg-[#121e28] h-[calc(100vh-200px)] lg:h-[calc(100vh-145px)]  py-4
      text-white flex flex-col lg:flex-row items-center gap-[40px] lg:gap-auto
      lg:justify-around lg:items-center 2xl:px-[200px] xl:px-[100px] lg:py-4 overflow-clip`}>

      <div className={`text-center lg:text-left flex flex-col gap-[20px] lg:w-[50%] `}>
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
          <Button label={"Project"}/>
          <Button label={"Resume"} dark/>
        </div>
      </div>
      {/*image*/}
      <div 
        className="flex justify-center items-center h-[300px] w-[300px] rounded-full lg:w-[450px] relative lg:h-[450px] bg-cover bg-center 2xl:w-[550px] ">

        {/*
        <span className={
          `absolute h-[240px] w-[240px] lg:w-[500px] lg:h-[500px] 2xl:w-[600px] 2xl:h-[600px] 
          border-[20px] lg:border-[35px] top-[60%] left-[50%] translate-[-50%] border-[#f66f5c] bg-[#121e28] rounded-full`
        }></span>
        */}

        {/*ring*/}
        <span className={
          `absolute h-[310px] w-[310px] lg:w-[495px] lg:h-[495px] 2xl:w-[635px] 2xl:h-[635px] outline-[1px] lg:outline-[2px] outline-red-200 top-[50%] left-[50%] translate-[-50%] rounded-full`
        }></span>
        {/*
        */}

        <span className={
          `absolute h-[300px] w-[300px] lg:w-[480px] lg:h-[480px] 2xl:w-[600px] 2xl:h-[600px] 
          border-[20px] lg:border-[35px] border-t-0 border-r-0 rotate-[-70deg] 
          top-[50%] z-1000 left-[50%] translate-[-50%] lg:border-r-0 border-[#f66f5c] lg:border-b-0 lg:rotate-[200deg] rounded-full`
        }></span>
        <span className={
          `absolute h-[300px] w-[300px] lg:w-[480px] lg:h-[480px] 2xl:w-[600px] 2xl:h-[600px] 
          border-[20px] lg:border-[35px] border-t-0 border-r-0 rotate-[-30deg] 
          top-[50%] z-1000 left-[50%] translate-[-50%] lg:border-r-0 border-[#f66f5c] lg:border-b-0 lg:rotate-[-130deg] rounded-full`
        }></span>
        {/*
        */}


        {/* front Rect */}
        <div className="w-[110%] absolute flex items-center h-[105%]">
          <div className="absolute w-[70px] h-[70px] top-[10px] rotate-[180deg] "> 
              <span className="inline-block  w-full h-[20px] top-[8px] border skew-y-[20deg] absolute"></span>
              <span className={`inline-block w-full h-[20px] top-[34px] border-2 bg-[#f66f5c] border-[#f66f5c] skew-y-[-20deg] absolute`}></span>
          </div>
          <div className="absolute w-[70px] h-[70px] bottom-[10px] rotate-[0deg] right-0"> 
              <span className="inline-block  w-full h-[20px] top-[8px] border skew-y-[20deg] absolute"></span>
              <span className={`inline-block w-full h-[20px] top-[34px] border-2 bg-[#f66f5c] border-[#f66f5c] skew-y-[-20deg] absolute`}></span>
          </div>
        </div>
        {/* front Rect End*/}

        {/*aura*/}
        <span 
          className={`absolute w-[50px] inline-block h-[150px] top-[30%] rounded-full shadow-[0_0_200px_20px_#f66f5c] lg:shadow-[0_0_800px_100px_#f66f5c]`}></span>
        <div 
          style={{
            backgroundImage:`url(${kk})`,
            backgroundPosition:'center center',
            backgroundRepeat:'no-repeat',
          }}
          className={`flex rounded-full  z-10 w-[220px] h-[300px] lg:w-[90%] lg:h-[420px] 2xl:w-[530px] 2xl:h-[530px] bg-cover `}>
        </div>
      </div>
    </div>
  )
}

export default Hero
