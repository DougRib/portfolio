import Image from 'next/image'
import React from 'react'

type SkillsCardProps = {
    skill: {
        id: number,
        title: string,
        percent: string,
        image: string,
    }
  
}

const SkillsCard = ({skill}: SkillsCardProps) => {
    const {image, percent, title} = skill

  return (
    <div className="p-6 hover:bg-blue-500 duration-300 transition-all cursor-pointer text-center rounded-lg bg-gray-900">
        <Image
            className="object-cover mx-auto"
            src={image}
            alt={title}
            width={50}
            height={50}
        />
        <h1 className="text-[18px] mt-4 text-white font-[600]">
            {title}
        </h1>
        <div className="bg-black mt-4 rounded-lg p-2 text-white opacity-40">
            {percent}
        </div>
    </div>
  )
}

export default SkillsCard