import React from 'react'

type MagicButtonProps = {
    title: string,
    icon: React.ReactNode,
    position: string,
    handleClick?: () => void,
    className?: string,
}

const MagicButton = ({title, icon, position, handleClick, className}: MagicButtonProps) => {
  return (
    <button className="relative flex h-12 overflow-hidden w-full rounded-lg p-[1px] focus:outline-none">
    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
    <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2  ${className}`}>
        {position === "right" && icon}
        {title}
        {position === "left" && icon}
        {handleClick && <span onClick={handleClick} className="absolute right-2 top-2 text-white text-xs">
            
        </span>}
      </span>
    </button>
  )
}

export default MagicButton