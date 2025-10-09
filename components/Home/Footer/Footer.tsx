import Image from 'next/image'
import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="pt-5 pb-5 justify-between grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  bg-[#0f0715]">
        <div>
            <Image 
                src="/images/logo.png"
                alt="logo"
                width={140}
                height={140}
                className="mx-auto"
            />
        </div>
        <div className="flex items-center flex-col justify-center space-x-10 space-y-4">
            <p>
                &copy; 2025 All rights reserved
                <p className="hover:text-yellow-600 transition-all duration-200">
                    Douglas Ribeiro | Powered by Next.js and Tailwind CSS
                </p>
            </p>
        </div>
        <div className="flex items-center justify-center space-x-10 ">
            <a href="#">
                <FaLinkedin className="w-6 h-6 md:w-10 md:10 hover:text-blue-500 transition-all duration-200"/>
            </a>
            <a href="#">
                <FaGithub className="w-6 h-6 md:w-10 md:10 hover:text-gray-500 transition-all duration-200"/>
            </a>
            <a href="#">
                <FaInstagram className="w-6 h-6 md:w-10 md:10 hover:text-pink-500 transition-all duration-200"/>
            </a>
        </div>
    </div>
  )
}

export default Footer