"use client"

import { navLinks } from '@/constants/constant'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {HiBars3BottomRight} from "react-icons/hi2"

type NavProps = {
    openNav: () =>void;
}

const Nav = ({openNav}: NavProps) => {
    const [navBg, setNavBg] = useState(false);

    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) {
                setNavBg(true);
            }
            if (window.scrollY < 90) {
                setNavBg(false);
            }
        };
        window.addEventListener('scroll', handler);

        return () => {
            window.removeEventListener('scroll', handler);
        };

    }, []);

  return (
    <div className={`fixed ${
        navBg ? "bg-[#240b39]" : "fixed" 
        } h-[12vh] z-[10] w-full transition-all duration-200`}>
        <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
            {/*LOGO*/}
            <Image 
                src="/logo.png"  
                alt="logo" 
                width={170} 
                height={170}
                className="ml-[-1.5rem] sm:ml-0" 
            />
            {/*NAV LINKS*/}
            <div className="flex items-center space-x-10">
                <div className="hidden lg:flex items-center space-x-8">
                    {navLinks.map((navLinks) => {
                        return  (
                            <Link key={navLinks.id} href={navLinks.url}>
                                    <p className='nav__link'>{navLinks.label}</p>
                                </Link>
                        )
                    })};
                </div>
                {/*BUTTON*/}
                <div className="flex items-center space-x-4">
                    <button className="md:px-10 md:py-3 px-8 text-black font-semibold sm:text-base text-sm bg-[#c9a227] hover:bg-yellow-600 transition-all duration-200 rounded-lg">
                        Me Contratar
                    </button>
                    {/*MENU BURGER*/}
                    <HiBars3BottomRight 
                        onClick={openNav}
                        className="w-8 h-8 cursor-pointer text-white lg:hidden" 
                    />
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Nav