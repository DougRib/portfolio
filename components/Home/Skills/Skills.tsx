import SectionHeading from '@/components/Helpers/SectionHeading'
import { SkillsData } from '@/Data/data'
import React from 'react'
import SkillsCard from './SkillsCard'

const Skills = () => {
  return (
    <div className="pt-16 pb-16">
        <SectionHeading>My Skills</SectionHeading>
        <div className="mt-20 w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center">
            {SkillsData.map((skills, i) => {
                return (
                    <div 
                        data-aos="flip-left" 
                        data-aos-anchor-placement="top-center"
                        data-aos-delay={`${i * 150}`}
                        key={skills.id}
                    >
                        <SkillsCard skill={skills} />
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Skills