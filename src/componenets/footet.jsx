function Footer(){
    return(
        <>
            <div className="bg-[#18242e] text-white py-8 px-4 text-center 2xl:px-[200px] xl:px-[100px] ">
                <h1 className="text-2xl md:text-4xl font-bold mb-2">Kanhaiya Kumar</h1>
                <p className="text-sm md:text-base text-[#7d878f] mb-6">Designed with love, all right reserved for kanhaiya kumar</p>
                <div className="flex justify-center gap-6">
                    <a href="kanhaiyamr33@gmail.com" className="hover:scale-110 transition-transform">
                        <img src="/src/assets/email.png" alt="email" className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full" />
                    </a>
                    <a href="https://github.com/kanhaGithub55" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform ">
                        <img src="/src/assets/github (2).png" alt="github" className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full" />
                    </a>
                    <a href="https://www.linkedin.com/in/kanhaiya-kumar-230a68246/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                        <img src="/src/assets/linkedin (3).png" alt="linkedin" className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full" />
                    </a>
                </div>
            </div>
        </>
    )
}

export default Footer