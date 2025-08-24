import { motion } from "framer-motion";
function PersonlaProject({projects}){
    return(
        <div  
          id="projects"
          className="bg-[#121e28] px-5 2xl:px-[200px] py-[20px] pb-[80px] xl:px-[100px] text-white">
            <div className="text-center text-3xl font-bold">My Best Projects</div>
            <div className="relative h-[50px] w-[3px] bg-red-300 m-auto mt-[20px]">
                 <span className="bottom-[-15px] left-[-3px] inline-block rounded-full bg-[#f66f5c] w-2 h-2 absolute"></span>
            </div>
            <div className="mt-10 flex flex-wrap gap-10">
               {projects.map((project, i)=> <Project key={project.name + i} project={project} imgPos={i%2 == 0?'left':""}/>)}
            </div>
        </div>
    )
}

function Project({project, imgPos}){
    // const image = data.image
    return(<>
        <div className={`outline-white/20 items-center shadow-lg lg:shadow-none lg:py-6 shadow-gray-400/20 flex lg:my-3 overflow-clip rounded-xl flex-col-reverse lg:gap-15 ${imgPos == 'left'? "lg:flex-row ":"lg:flex-row-reverse"} justify-between`}>
          <ProjectDes project={project} />
          <motion.div className="overflow-clip lg:w-[50%] lg:px-8 outline-white/20">
              <img className="hover:rounded-xl" src={project.img} alt={'image of ' + imgPos} />
          </motion.div>
        </div>
    </>)
}

function ProjectDes({project, className}){
    return <motion.div 
    className={`lg:w-[50%] lg:pr-10 px-5 pb-5 ${className}`}>
        <h2 className="text-4xl lg:text-4xl font-bold my-6 ">{project.name}</h2>
        <div className="flex flex-wrap gap-3 lg:py-2">
            {project.technologys.map(item => <span key={item} className="py-1 px-3 text-sm font-bold rounded-full bg-gray-400/30 inline-block">{item}</span>)}
        </div>
        <p className=" pt-4 lg:pt-5 text-justify leading-[28px] text-white/70">{project.about}</p>
        <div className="pt-5 flex gap-5 items-center">
            <a className="bg-orange-400/60 px-4 py-2" href={project.githubLink}>Github</a>
             <a className="px-4 py-1" href={project.liveLink}>Live Demo <span className="text-xl text-white/80 inline-block rotate-[-40deg]">➔</span></a>
        </div>
    </motion.div>
}

export default PersonlaProject;
