import React from 'react';
import {AiFillGithub} from "react-icons/ai";
import {AiFillInstagram, AiFillTwitterSquare, AiFillLinkedin} from "react-icons/ai";
import img from "../Assets/images/pp3.jpg"

function About() {
  return (
        <div className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center " >
            <img src={img} width={250} height={250}  className="border-2 p-1 border-fuchsia-500 " alt="profile picture" />
            <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white ">
                <h1 className="text-[55px] font-semibold mb-8 leading-normal uppercase"><span className="text-fuchsia-500">About me</span></h1>
                <p> I'm N Amelya, a Junior Front-End Web Developer. With a diverse background, I've tackled all layers of dynamic hard worker, from the website design, digital platform, database to UI, and embraced every step of the product life cycle - from concept and design to seamless deployment and ongoing support.</p>
                <p>I'm passionate about my work, always eager to learn new things and explore new opportunities and experiences also have had the opportunity to work on a variety of exciting projects throughout my career.</p>
                <div className="flex mt-8 gap-2">
                    <div className="flex items-center justify-center">
                        <div className="flex space-x-2">
                            <a href="https://github.com/noeamelya" className="text-white">
                                <AiFillGithub className="text-[30px]"/>
                            </a>
                            <a href="https://www.linkedin.com/in/noeamelya/" className="text-white">
                                <AiFillLinkedin className="text-[30px]"/>
                            </a>
                            <a href="https://twitter.com/noeamelya" className="text-white">
                                <AiFillTwitterSquare className="text-[30px]"/>
                            </a>
                            <a href="https://www.instagram.com/noe_amelya/" className="text-white">
                                <AiFillInstagram className="text-[30px]"/>
                            </a>
                        </div>
                    </div>
                </div> 
             </div>
        </div>
  );
}

export default About;