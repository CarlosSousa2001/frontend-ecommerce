import React from 'react'

import Image from "next/image";
import { StaticImageData } from 'next/image';

type RoudendIconProps = {
  text: string;
  img: StaticImageData;
  color: string;
}
// https://loading.io/icon/fo7o86
export function RoundedIcon({ text, img, color }: RoudendIconProps) {
  return (
    <div className='flex items-center flex-col gap-2 cursor-pointer'>
      <div className={`border-4 rounded-full p-2 border-${color}-300 bg-white `}>
        <Image src={img} width={70} height={70} alt={text} className='rounded-full' />
      </div>
      <span className='text-foreground text-xs font-medium uppercase max-w-[110px] text-center'>{text}</span>
    </div>
  )
}
