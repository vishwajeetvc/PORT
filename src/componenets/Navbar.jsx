import { useState } from "react"

function Navbar() {
  const [visible, setVisible] = useState(false);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setVisible(!visible);
  }

  const stopPropagation = e => e.stopPropagation();

  return (
    <div className=" text-white px-5 py-5 relative flex items-center justify-between bg-[#121e28] 2xl:px-[200px] xl:px-[100px] ">
      <div className="font-bold ">
        Vishwajeet Kumar
      </div>

      {/* Visible in mobile phones only*/}
      <div 
        onClick={toggleMenu}
        className={`px-2 py-2 lg:hidden hover:cursor-pointer`}>☲
      </div>
      <div 
        onClick={toggleMenu}
        className={`absolute ${visible ? 'block' : 'hidden'} z-[1000] top-0 right-0 bg-black/85 text-[white] h-[100vh] w-[100%] lg:hidden`}>
        <div onClick={stopPropagation}
          className=" h-full bg-[#121e28] w-[250px] absolute right-0">
          <p
            onClick={toggleMenu}
            className=" font-bold px-4 py-5 hover:cursor-pointer">❰ Back</p>
          <p className=" font-bold px-4 py-2">Home</p>
          <p className=" font-bold px-4 py-2">About</p>
          <p className=" font-bold px-4 py-2">Contact</p>
          <p className=" font-bold px-4 py-2">Projects</p>
        </div>
      </div>
      {/* Visible in mobile phones*****************End*/}

      <div className={
        `hidden lg:flex`
      }>
        <p className=" font-bold px-4 py-2">Home</p>
        <p className=" font-bold px-4 py-2">About</p>
        <p className=" font-bold px-4 py-2">Contact</p>
        <p className=" font-bold px-4 py-2">Projects</p>
      </div>

    </div>
  )
}

export default Navbar
