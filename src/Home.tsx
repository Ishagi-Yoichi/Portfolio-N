import knightImage from './assets/Adobe Express -Knight.png'
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiSocketdotio } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { HoverBorderGradient } from './components/ui/hover-border-gradient';
import { useState, useEffect } from 'react';
export default function Home(){
    const [click,setClick] = useState(false);
   
        const handleDownload = () =>{
            const link = document.createElement('a');
            link.href = 'https://drive.google.com/file/d/1VL0Y_Wt3mkp97JZ_h3td73PszeJJT0ox/view?usp=sharing';
            link.download = 'NIKUNJ_TIWARI_RESUME_2025_new.pdf';
            link.click();
        };

        const mailEvent = () =>{
            const linkk = document.createElement('a');
            linkk.href='//mail.google.com/mail/?view=cm&fs=1&to=nikunjkr1752003@gmail.com&su=Would%20like%20to%20book%20a%20Call!';
            linkk.click();
        }

    

    return(
        <>
        <div className="bg-zinc-950 min-h-screen flex  justify-between">
            <div className='flex flex-col p-2'>
            <h1 className='text-white font-serif text-6xl p-2 mt-8 ml-16'>Nikunj Tiwari</h1>
            <p className='text-gray-100 text-xl mt-4 ml-16'>Hey, I'm a Backend Engineer who loves to learn new stuffs about Math,Core Backend.</p>
            <p className='text-gray-100 text-xl mt-1 ml-16'>Most of the time i am learning from tech blogs and docs or building some cool stuffs.</p>
             <div className='flex gap-4 p-6 ml-16 mt-4'>
             <HoverBorderGradient children="Book a meet" onClick={mailEvent}/>
             <HoverBorderGradient children="Download CV" onClick={handleDownload}/>
             </div>

             <div className='gap-4 p-6 -m-2'>
                <h1 className='text-white font-serif text-4xl ml-16'>Projects</h1>

                <div className='flex flex-col ml-16 pt-4'>
                    <div className='flex items-start gap-8'>
                        <div className='flex-1'>
                            <h1 className='text-white font-sans text-xl'>CoSync</h1>
                            <p className='text-gray-300'>A Real-time Synchronous Code sharing platform.</p>
                            <p className='text-gray-400 w-[400px]'>Enables you to create private key based room generation,share with your team and discuss code changes and improvements without any delay</p>
                            <p className='text-gray-200 mt-2 flex gap-x-2'>TechStack Used: 
                                <SiTypescript style={{color:"blue",fontSize:"30px"}}/>
                                <RiNextjsFill style={{color:"white",fontSize:"30px"}}/>
                               < RiTailwindCssFill style={{color:"blue",fontSize:"30px"}} />
                               <SiSocketdotio style={{color:"white",fontSize:"30px"}}/>
                               < FaReact style={{color:"blueviolet",fontSize:'30px'}}/>
                            </p>
                        </div>
                        <div className='flex-1 pl-8'>
                            <h1 className='text-white font-sans text-xl'>Pixeled</h1>
                            <p className='text-gray-300'>Image Processing Service</p>
                            <p className='text-gray-400 w-[400px]'>Designed and implemented a distributed image processing microservice to handle asynchronous media uploads,transformations,and retieval using pre-signed URLs for secure client access.</p>
                        </div>
                    </div>
                </div>

                <h1 className='text-white font-sans text-xl ml-16 pt-4'>Nmegle</h1>
                <p className='text-gray-300 ml-16 '>A  P2P Video Streaming Platform</p>
                <p className='text-gray-400 ml-16 w-[400px]'>Seamless & Private communication platform for randoms to meet each other.Through WebRTC protocol, wrriten from scratch</p>

             </div>
            </div>
            <div className="pr-4">
                <img 
                  src={knightImage} 
                  alt="Knight" 
                  className="max-w-[850px] max-h-[800px] object-contain"
                />
            </div>
        </div>
        </>
    )
}