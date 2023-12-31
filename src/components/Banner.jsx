
import {AiFillGithub} from "react-icons/ai";
import {AiFillInstagram, AiFillTwitterSquare, AiFillLinkedin} from "react-icons/ai";
import img from "../Assets/images/pp3.jpg";




const Banner = () => {
    return (
        <div className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center " >
            <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white ">
                <h1 className="text-[55px] font-semibold mb-8 leading-normal uppercase">Welcome to <span className="text-fuchsia-500">My Portfolio</span></h1>
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
            <img src={img} width={250} height={250}  className="rounded-full border-2 border-fuchsia-500 p-1 " alt="profile picture" />
         </div>
            
       
    );
  }
  
  export default Banner;