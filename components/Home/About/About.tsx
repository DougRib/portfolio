import SectionHeading from '@/components/Helpers/SectionHeading'
import { AboutInfo } from '@/Data/data'
import Image from 'next/image'
import React from 'react'
import { FaCheck } from 'react-icons/fa'

const About = () => {
  return (
    <div className="pt-16 pb-16 bg-[#202224]">
      <SectionHeading>About Me</SectionHeading>
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-1 gap-8 items-center mt-20">
        <div >
          <h1 className="text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200">
            {AboutInfo.title}
          </h1>
          <p className="mt-6 text-base text-gray-500">
            {AboutInfo.description}
          </p>
          <div className="mt-8">
            <div className="flex items-center space-x-2 mb:6">
              <div className="w-7 h-7 bg-blue-500 flex flex-col items-center justify-center">
                <FaCheck className="text-yellow-400" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                Fronend Development
              </p>
            </div>
          </div>
          <div className="mt-8">
            <div className="flex items-center space-x-2 mb:6">
              <div className="w-7 h-7 bg-orange-500 flex flex-col items-center justify-center">
                <FaCheck className="text-yellow-400" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                Backend Development
              </p>
            </div>
          </div>
          <div className="mt-8">
            <div className="flex items-center space-x-2 mb:6">
              <div className="w-7 h-7 bg-red-700 flex flex-col items-center justify-center">
                <FaCheck className="text-yellow-400" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                Full Stack Development
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-16 items-center lg:mx-auto">
          <div>
            <Image className="mx-auto"
              src="/about.jpg"
              alt="About Me"
              width={400}
              height={400}
            />
            <p className="mt-3 font-bold text-xl text-white text-center">
              {AboutInfo.client}
            </p>
            <p className="sm:text-lg text-gray-400 text-center text-base">
              satisfied customers
            </p>
          </div>
          <div>
            <Image className="mx-auto"
              src="/about.jpg"
              alt="About Me"
              width={400}
              height={400}
            />
            <p className="mt-3 font-bold text-xl text-white text-center">
              {AboutInfo.experience}
            </p>
            <p className="sm:text-lg text-gray-400 text-center text-base">
              years experience
            </p>
          </div>
          <div>
            <Image className="mx-auto"
              src="/about.jpg"
              alt="About Me"
              width={400}
              height={400}
            />
            <p className="mt-3 font-bold text-xl text-white text-center">
              {AboutInfo.project}
            </p>
            <p className="sm:text-lg text-gray-400 text-center text-base">
              project
            </p>
          </div>
          <div>
            <Image className="mx-auto"
              src="/about.jpg"
              alt="About Me"
              width={400}
              height={400}
            />
            <p className="mt-3 font-bold text-xl text-white text-center">
              {AboutInfo.skill}
            </p>
            <p className="sm:text-lg text-gray-400 text-center text-base">
              website launch
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About