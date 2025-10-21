import React from 'react'
import { TiSocialLinkedin } from "react-icons/ti";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import profilePic from '../assets/IMG_7165.JPG';


export default function AboutCard() {
  return (
    <>
      <div className="flex flex-col md:flex-row  m-10 h-auto md:h-[90vh] w-[80%] md:w-[50%] mx-auto rounded-2xl shadow-lg overflow-hidden">
        
        {/* first container */}
     <div
  className="md:w-1/2 w-full 
  relative text-white p-6 rounded-2xl 
  flex flex-col justify-evenly items-center
  bg-gradient-to-br from-[var(--txt-color)] via-[var(--btn-color)] to-[var(--txt-color)]
  shadow-[0_10px_25px_rgba(0,0,0,0.8)]
  transform transition-all duration-500
  hover:-translate-y-2 hover:scale-[1.02]
  hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]
  "
>
  <div className="w-44 h-44 rounded-full overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.4)] hover:scale-105 transition-transform duration-500">
    <img
       src={profilePic}
      alt="Profile"
      className="object-cover w-full h-full object-top"
    />
  </div>

  <h1 className="text-3xl md:text-4xl font-bold text-center mt-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.7)]">
    Hi, I'm Tameer
  </h1>

  <p className="text-lg text-center opacity-90">A Front-End Developer</p>

  <ul className="flex justify-center gap-5 text-3xl mt-4">
  <a
    href="#"
    className="relative group"
  >
    <TiSocialLinkedin className="transition-transform duration-300 transform group-hover:scale-125 group-hover:rotate-6 text-[#0077B5]" />
  </a>

  <a
    href="#"
    className="relative group"
  >
    <FaWhatsappSquare className="transition-transform duration-300 transform group-hover:scale-125 group-hover:rotate-6 text-[#25D366]" />
  </a>

  <a
    href="#"
    className="relative group"
  >
    <FaXTwitter className="transition-transform duration-300 transform group-hover:scale-125 group-hover:rotate-6 text-[#1DA1F2]" />
  </a>

  <a
    href="#"  
    className="relative group"
  >
    <FaInstagram className="transition-transform duration-300 transform group-hover:scale-125 group-hover:rotate-6 text-[#C13584]" />
  </a>
</ul>

</div>



        {/* second container */}
        <div className="md:w-1/2 w-full text-xl p-6 flex flex-col justify-evenly bg-white text-black rounded-2xl">
          <h1 className="text-2xl font-semibold mb-4">Hi There!</h1>
          <p className="text-justify mb-6">
            I'm a passionate Front-End Developer who loves turning ideas into
            interactive and visually appealing web experiences. I specialize in building responsive
            websites using React, Tailwind CSS, and modern JavaScript — focusing on clean design and
            smooth user experience.
          </p>
          <button className="border cursor-pointer border-sky-700 p-2 w-[50%] mx-auto hover:bg-sky-700 hover:text-white transition">
            SAY hi!
          </button>
        </div>

      </div>
    </>
  );
}
