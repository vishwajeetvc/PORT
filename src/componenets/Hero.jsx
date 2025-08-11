function Button({label, dark}){
  return <>
    <button className={`${!dark ? "bg-[#f66f5c]" : "border-2 border-[#f66f5c]"} font-bold px-4 py-3 rounded `}>
      {label}
    </button>
  </>

}

function Hero() {
  return (
    <div className={ `bg-[#121e28]  h-[100vh] text-white` }>

      <div className={
        `text-center px-5  pt-[40px] flex flex-col gap-[20px]`
      }>
        <h2 className="font-bold text-4xl">Hello<span className="text-[#f66f5c] text-4xl">.</span></h2>
        <p className="text-3xl relative flex flex-col items-center gap-2 z-0">
          <span>I'm Vishwajeet</span>
          <span className="w-[150px] h-[3px] bg-[#f66f5c]"></span>
        </p>
        <h1 className="font-bold text-4xl">Web Developer</h1>

        <div className=" flex justify-center gap-5">
          <Button label={"Get a Project"}/>
          <Button label={"My Resume"} dark/>
        </div>
      </div>

      {/*image*/}
      <div>
      </div>
    </div>
  )
}

export default Hero
