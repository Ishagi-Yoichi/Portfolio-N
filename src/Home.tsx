import knightImage from './assets/Adobe Express -Knight.png'
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiSocketdotio } from "react-icons/si";
import { FaReact } from "react-icons/fa";

export default function Home(){

    return(
        <>
        <div className="bg-zinc-950 min-h-screen flex  justify-between">
            <div className='flex flex-col p-2'>
            <h1 className='text-white font-serif text-6xl p-2 mt-8 ml-16'>Nikunj Tiwari</h1>
            <p className='text-gray-100 text-xl mt-4 ml-16'>Hey, I'm a Backend Engineer who loves to learn new stuffs about Math,Core Backend.</p>
            <p className='text-gray-100 text-xl mt-1 ml-16'>Most of the time i am learning from tech blogs and docs or building some cool stuffs.</p>
             <div className='flex gap-4 p-6 ml-16 mt-9'>
             <button className='text-white bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 rounded-lg px-6 py-3 font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-gray-600 hover:border-gray-500'>Book a Meet</button>
             <button className='text-white bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 rounded-lg px-6 py-3 font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-gray-600 hover:border-gray-500'>Download CV</button>
             </div>
             <div className='gap-4 p-6'>
                <h1 className='text-white font-serif text-4xl ml-16'>Projects</h1>

                <h1 className='text-white font-sans text-xl ml-16 pt-4'>CoSync</h1>
                <p className='text-gray-300 ml-16 '>A Real-time Synchronous Code sharing platform.</p>
                <p className='text-gray-400 ml-16 w-[400px]'>Enables you to create private key based room generation,share with your team and discuss code changes and improvements without any delay</p>
                <p className='text-gray-200 ml-16 mt-2 flex gap-x-2'>TechStack Used: 
                    <SiTypescript style={{color:"blue",fontSize:"30px"}}/>
                    <RiNextjsFill style={{color:"white",fontSize:"30px"}}/>
                   < RiTailwindCssFill style={{color:"blue",fontSize:"30px"}} />
                   <SiSocketdotio style={{color:"white",fontSize:"30px"}}/>
                   < FaReact style={{color:"blueviolet",fontSize:'30px'}}/>
                </p>

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