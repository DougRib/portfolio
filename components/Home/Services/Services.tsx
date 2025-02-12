import SectionHeading from '@/components/Helpers/SectionHeading'
import { ServicesData } from '@/Data/data'
import React from 'react'
import ServicesCard from './ServicesCard'

const Services = () => {
  return (
    <div className="pt-16 pb-16 bg-[#00f0715]">
        <SectionHeading> Services</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-[80%] mx-auto items-center mt-20">
            {ServicesData.map((services) => {
                return (
                    <div key={services.id}>
                        <ServicesCard service={services} />
                    </div>
                )
            })}
                
        </div>
    </div>
  )
}

export default Services