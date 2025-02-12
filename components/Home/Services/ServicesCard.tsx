"use client"

import Image from 'next/image'
import React from 'react'
import Tilt from "react-parallax-tilt"

type ServiesCardProps = {
    service: {
        id: number,
        title: string,
        description: string,
        icon: string,
    }
}

const ServicesCard = ({service}: ServiesCardProps) => {
  return (
    <div>
        <Tilt className="shadow-2xl p-6 rounded-lg bg-purple-600">
            <Image
                src={`${service.icon}`}
                alt={service.title}
                width={50}
                height={50}
            />
            <h1 className="mt-4 text-lg font-bold text-gray-300">
                {service.title}
            </h1>
            <p className="mt-3 text-sm text-gray-400 text-opacity-50">
                {service.description}
            </p>
        </Tilt>
    </div>
  )
}

export default ServicesCard