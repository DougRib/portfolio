import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0f0715]">
        <div>
            <Image 
                src="/images/logo.png"
                alt="logo"
                width={100}
                height={100}
                className="mx-auto"
            />
        </div>
        <div className="flex items-center flex-wrap justify-center space-x-10 space-y-4 text-white font-bold">
            <a href="#" className="hover:text-yellow-600 transition-all duration-200">Home</a>
            <a href="#" className="hover:text-yellow-600 transition-all duration-200">About</a>
            <a href="#" className="hover:text-yellow-600 transition-all duration-200">Services</a>
            <a href="#" className="hover:text-yellow-600 transition-all duration-200">Contact</a>
            <p>
                &copy; 2025 All rights reserved.
                <a href="#" className="hover:text-yellow-600 transition-all duration-200">
                    Douglas Ribeiro
                </a>
                | Powered by Next.js and Tailwind CSS.
            </p>
        </div>
    </div>
  )
}

export default Footer