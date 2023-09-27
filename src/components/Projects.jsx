import React from "react";
import img1 from "../Assets/images/TeamProf.png";
import img2 from "../Assets/images/outcome.png";
import img3 from "../Assets/images/readme.png";




function Projects() {
  return (
    <div className="p-20 flex flex-col items-center justify-center">
        <h1 className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500">Projects</h1>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 justify-between gap-020">
            <img className="flex items-center justify-center font-semibold text-fuchsia-500 rounded-3xl h-36 w-40 border-2 border-fuchsia-500" src={img1} alt="" />
            <a className="neno-button shadow-x1 hover:shadow-fuchsia-800 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-500 rounded-lg py-2 px-4 uppercase relative overflow-hidden" href="https://github.com/noeamelya/team_profile_gen">Team Profesional Generator</a>

            <img className="flex items-center justify-center font-semibold text-fuchsia-500  rounded-3xl h-36 w-40 border-2 border-fuchsia-500" src={img2} alt="" />
            <a className="neno-button shadow-x1 hover:shadow-fuchsia-800 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-500 rounded-lg py-2 px-4 uppercase relative overflow-hidden" href="https://github.com/noeamelya/Bootstrap-Portfolio/">Boostrap Portfolio</a>

            <img className="flex items-center justify-center font-semibold text-fuchsia-500  rounded-3xl h-36 w-40 border-2 border-fuchsia-500" src={img3} alt="" />
            <a className="neno-button shadow-x1 hover:shadow-fuchsia-800 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-500 rounded-lg py-2 px-4 uppercase relative overflow-hidden" href="https://github.com/noeamelya/prof-readme-gen/">Team Profesional Generator</a>


        </div>
        
    </div>
  );
}

// function Projects() {
//     return (
   
//         <div className="p-20 flex flex-col items-center justify-center">
//           <div className="flex flex-col w-full mb-20">
//             <h1 className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500">
//               Apps I've Built
//             </h1>
//           </div>
//           <div className="flex flex-wrap -m-4">
//             {projects.map((project) => (
//               <a
//                 href={project.link}
//                 key={project.image}
//                 className="sm:w-1/2 w-100 p-4">
//                 <div className="flex relative">
//                   <img
//                     alt="gallery"
//                     className="absolute inset-0 w-full h-full object-cover object-center"
//                     src={project.image}
//                   />
//                   <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
//                     <h1 className="title-font text-lg font-medium text-white mb-3">
//                       {project.title}
//                     </h1>
//                     <p className="leading-relaxed">{project.description}</p>
//                   </div>
//                 </div>
//               </a>
//             ))}
//           </div>
//         </div>
     
//     );
//   }
  

export default Projects;