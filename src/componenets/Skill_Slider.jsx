import React from 'react'
import { motion } from "framer-motion"

function Skill_Slider({ skills }) {
    
    return (
        <div className="bg-[#17232d] sticky top-0 overflow-hidden">
            <motion.div
                className=" text-[#a0a5aa] text-xl p-4 px-[100px]"
                animate={{ x: ["100%", "-100%", "100%"] }}
                transition={{ duration: 40, ease: "linear", repeat: Infinity }}
            >
                <div className=" flex gap-[50px] sm:justify-between ">
                    {skills.map(skill => <span key={skill}>{skill}</span>)}
                </div>

            </motion.div>


        </div>

    )
}

export default Skill_Slider
