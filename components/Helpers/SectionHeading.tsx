import React, { ReactNode } from 'react'

type SectionHeadingProps = {
    children: ReactNode
}

const SectionHeading = ({children}: SectionHeadingProps) => {
  return (
    <div className="bg-blue-500 w-fit text-center px-4 py-3 mx-auto text-white text-2xl sm:text-3xl md:text-4xl uppercase -rotate-6">
        {children}
    </div>
  )
}

export default SectionHeading