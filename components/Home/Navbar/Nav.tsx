"use client"

import MagicButton from '@/components/ui/MagicButton'
import { ModeToggle } from '@/components/ui/ModeToggle'
import { navLinks } from '@/constants/constant'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaHandshake } from 'react-icons/fa'
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
                src="/images/logo.png"  
                alt="logo" 
                width={140} 
                height={140}
                className="ml-[-1.5rem] sm:ml-0" 
            />
            
            {/*NAV LINKS*/}
            <div className="flex items-center space-x-10">
                <div className="hidden lg:flex items-center space-x-8">
                <ModeToggle />
                    {navLinks.map((navLinks) => {
                        return  (
                            <Link key={navLinks.id} href={navLinks.url}>
                                <p className='nav__link'>{navLinks.label}</p>
                            </Link>
                        )
                    })};
                </div>
                {/*BUTTON*/}
                <div className="flex items-center justify-center space-x-4">
                    <a href="#">
                        <MagicButton
                            className=" md:px-8 md:py-3 hover:bg-gray-900 text-black font-semibold sm:text-base text-sm transition-all duration-200 rounded-lg"                       
                            title="Me Contratar"
                            icon={<FaHandshake />}
                            position="right"
                        />
                    </a>
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

export default Nav;