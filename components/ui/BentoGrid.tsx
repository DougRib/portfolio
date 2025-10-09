import { cn } from "@/lib/utils";
import Image from "next/image";
import React from 'react';

export const BentoGrid = ({
  className,
  numColumns,
  gap,
  items,
}: {
  className?: string;
  numColumns: { base: number; lg: number };
  gap: number;
  items: { src: string; alt: string; title: string; subtitle: string; aos: string; aosAnchorPlacement: string; aosDelay: number; }[];
}) => {
  const columns = `grid-cols-${numColumns.base} lg:grid-cols-${numColumns.lg}`;
  const gapClass = `gap-${gap}`;

  return (
    <div
      className={`grid ${columns} ${gapClass} ${className}`}
    >
      {items.map((item, index) => (
        <div
          key={index}
          data-aos={item.aos}
          data-aos-anchor-placement={item.aosAnchorPlacement}
          data-aos-delay={item.aosDelay}
          className="flex flex-col items-center"
        >
          <Image className="mx-auto" src={item.src} alt={item.alt} width={80} height={80} />
          <p className="mt-3 font-bold text-xl text-white text-center">{item.title}</p>
          <p className="sm:text-lg text-gray-400 text-center text-base">{item.subtitle}</p>
        </div>
      ))}
    </div>
  );
};
export const BentoGridItem = ({
  className,
  title,
  description,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-3xl group/bento relative hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
  
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
