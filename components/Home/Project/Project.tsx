import SectionHeading from '@/components/Helpers/SectionHeading'
import { ProjectsData } from '@/Data/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Project = () => {
  return (
    <div className="pt-16 pb-16 bg-[#050709]">
        <SectionHeading>My Projects</SectionHeading>
        <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
            {ProjectsData.map((project) => {
                return (
                    <div 
                        className="bg-blue-900 p-6 rounded-lg hover:scale-105 transition-all duration-300"
                        key={project.id}
                    >
                        <Link href={project.url} target='_blank'>
                            <Image
                                className="w-full"
                                src={project.image}
                                alt={project.title}
                                width={300}
                                height={300}
                            />                        
                        </Link>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Project