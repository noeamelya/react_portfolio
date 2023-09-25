import React from "react";
import {AiFillGithub} from "react-icons/ai";
import {FaLinkedin, FaInstagram} from "react-icons/fa";
import {FiTwitter} from "react-icons/fi"
import img from "../Assets/images/pp3.jpg"



const Banner = () => {
    return (
        <div className="lg:px-56 px-10 lg:py-0 py-20" >
            <div>
                <h1 className="text-[55px] font-semibold mb-8 leading-normal">Welcome to <span className="text-fuchsia-500">My Portfolio</span></h1>
                <p>I'm passionate about my work, always eager to learn new things and explore new opportunities and experiences also have had the opportunity to work on a variety of exciting projects throughout my career.</p>
                <div className="flex mt-8 gap-2">
                    <div className="flex items-center justify-center">
                        <div className="flex space-x-2">
                            <a href="https://github.com/noeamelya" className="text-white">
                                <AiFillGithub className="text-[30px]"/>
                            </a>
                            <a href="https://www.linkedin.com/in/noeamelya/" className="text-white">
                                <FaLinkedin className="text-[30px]"/>
                            </a>
                            <a href="" className="text-white">
                                <FiTwitter className="text-[30px]"/>
                            </a>
                            <a href="" className="text-white">
                                <FaInstagram className="text-[30px]"/>
                            </a>

                        </div>
                        <img src={img} width={300} height={300}  alt="" />

                    </div>

                </div>
            

             </div>
         </div>
            
       
    );
  }
  
  export default Banner;