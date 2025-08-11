import React from 'react'
import { motion } from "framer-motion"
import { div } from 'framer-motion/client'

function Skill_Slider() {
    return (
        <div className="bg-[#17232d] overflow-hidden">
            <motion.div
                className=" text-[#a0a5aa] text-xl p-4 px-[100px]"
                animate={{ x: ["100%", "-100%"] }}
                transition={{ duration: 20, ease: "linear", repeat: Infinity }}
            >
                <div className=" flex gap-[50px] sm:justify-between ">
                    <span className="border-white-400">HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>React.js</span>
                    <span>Node.js</span>
                    <span>Git</span>
                    <span>Github</span>
                </div>

            </motion.div>
            {/* <motion.div
                className="h-1 bg-blue-500 rounded-full m-auto"
                initial={{ width: "8px" }}   // Small dot
                animate={{ width: "200px" }} // Expands to a line
                transition={{ duration: 0.5, ease: "easeInOut" }}
            /> */}

        </div>

    )
}

export default Skill_Slider
