import { img, ziggle, vcshop, m24, nexa, fshowCase1, fshowCase2, bmi, fshowCase3, quize } from "./src/assets/assets";

const data = {
  name : "Vishwajeet Kumar",
  avatar : img,
  coding_skills : ['JavaScript','React.js', 'TailwindCSS', 'Node.js','Express.js', 'MongoDB', 'Git', 'Github', , 'WebRTC', 'HTML', 'CSS', 'HTTP'],
  soft_skills : ['Web-Developer', 'Problem Solver', 'Team Player'],
  resumeLink : 'https://drive.google.com/file/d/1qHDu2SfLzFJfi19nK2QtMuyLnGjEX7Rv/view?usp=sharing',
  intro : 'I Started My Web Development journey from my College 1st year, Thout that, I learned to love the process of creating from scratch, since then, This has lead to me Web Development as it Fulfills my love for Learning and building things.',
  socialMedia : [
    {name : "linkedIn", url : "https://www.linkedin.com/in/vishwajeet-kumar-052054248"},
    {name : "github", url : "https://github.com/vishwajeetvc"},
    {name : "gmail", url : "https://mail.google.com/mail/?view=cm&fs=1&to=vcnvim@gmail.com"},
    {
      name: "gmail",
      url: "https://mail.google.com/mail/?view=cm&fs=1" +
        "&to=vcnvim@gmail.com" 
    }
  ],
  completedProjects : 10,
  yearsOfExp : 1,
  projects : [
    {
      name : "Ziggle_Meet",
      img : ziggle,
      technologys : ['WebRTC', 'React.js', 'Node.js','Tailwind', 'HTTP', 'WebSocket', 'Express.js'],
      about :`A real-time video conferencing and screen sharing application built with WebRTC, React, and WebSockets. This project enables two users to connect seamlessly, share video/audio, exchange chat messages, and even share their screens — all in a minimal, modern interface.`,
      githubLink : 'https://github.com/vishwajeetvc/ziggle_meet',
      liveLink : null,
    },
    {
      name : "Vc_Shop",
      img : vcshop,
      technologys : ['HTML', 'CSS', 'JavaScript','React.js', 'PHP', 'Node.js', 'Express', 'Tailwind', 'MongoDB'],
      about : `An e-commerce web application built with the MERN stack. A modern and responsive UI, product collections, detailed product pages, cart management, and order tracking. Users can browse seamlessly, add products to their cart.`,
      githubLink : 'https://github.com/vishwajeetvc/vcshop',
      liveLink : null,
    },
    {
      name : "M24Techspace",
      img : m24,
      technologys : ['React.js','Tailwind', 'React-Router'],
      about : 'A fully responsive blogging website built with React, Tailwind CSS, and React Router. This project features a clean and modern UI, smooth navigation across pages, and a mobile-first design approach. Users can explore posts seamlessly in an intuitive, minimal interface.',
      githubLink : 'https://github.com/vishwajeetvc/techoHomePage',
      liveLink : 'https://vchomepage.netlify.app/',
    },
    {
      name : "NEXA",
      img : nexa,
      technologys : ['React.js', 'Node.js', 'Express', 'Tailwind', 'WebSocket', 'Electron.js'],
      about : 'A real-time screen sharing web application built with React, Tailwind CSS, and TypeScript. This project enables users to share their screens seamlessly in a clean, minimal interface with smooth navigation and responsive design.',
      githubLink : 'https://github.com/vishwajeetvc/nexa',
      liveLink : null,
    },
    {
      name : "BMI Calculator",
      img : bmi,
      technologys : ['React.js', 'Tailwind','Photoshop'],
      about : 'A sleek and animated BMI (Body Mass Index) calculator built with React, featuring smooth transitions and user-friendly controls. The app allows users to input their weight and height to instantly see their BMI and health category, all within an engaging, responsive interface enhanced with lightweight animations.',
      githubLink : null,
      liveLink : 'https://vcbmi.netlify.app/',
    },
    {
      name : "JavaScript Showcase",
      img : quize ,
      technologys : ['JavaScript', 'HTML', 'CSS'],
      about : 'A sleek, responsive quiz application built entirely with vanilla JavaScript, HTML, and CSS — without using any libraries or frameworks. It features a real-time timer, score tracking, previous/next navigation, and a polished UI. All interactions are handled using native DOM methods only.',
      githubLink : null,
      liveLink : 'https://github.com/vishwajeetvc/Quiz',
    },
    {
      name : "Frontend Showcase",
      img : fshowCase3 ,
      technologys : ['React.js', 'Tailwind', 'React-Router'],
      about : 'A responsive multi-page web application built with React, Tailwind CSS, and React Router. This project features a modern, utility-first UI design, clean navigation across different views, and seamless client-side routing. Crafted to deliver a polished frontend experience through component-based architecture and responsive layouts.',
      githubLink : null,
      liveLink : 'https://myteamvc.netlify.app',
    },
    {
      name : "Frontend Showcase",
      img : fshowCase1,
      technologys : ['HTML', 'CSS'],
      about : 'A static web page demonstrating PSD-to-HTML conversion using clean and semantic HTML5 and CSS3, featuring responsive design and pixel-perfect rendering. This project highlights expert grasp of layout techniques—including Flexbox or Grid—along with modern styling, typography, and cross-browser consistency to faithfully translate visual design into functional frontend markup.',
      githubLink : null,
      liveLink : 'https://vcsocialproof.netlify.app/',
    },
    {
      name : "Frontend Showcase",
      img : fshowCase2,
      technologys : ['HTML', 'CSS'],
      about : 'A static web page demonstrating PSD-to-HTML conversion using clean and semantic HTML5 and CSS3, featuring responsive design and pixel-perfect rendering. This project highlights expert grasp of layout techniques—including Flexbox or Grid—along with modern styling, typography, and cross-browser consistency to faithfully translate visual design into functional frontend markup.',
      githubLink : null,
      liveLink : 'https://vc4card.netlify.app/',
    },
    
  ] 
}

export default data;
