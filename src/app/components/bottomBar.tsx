'use client';

import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import styles from './CustomText.module.css';

const NavLink = ({to, children}: {to: string, children: React.ReactNode}) => {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

export default function BottomBar() {
    
    return (
        <div className="w-full bg-[#220F18]">
            <div className="w-full py-[50px] px-[20px] bg-[#220F18] border-b border-grey-300">
                <div className="block md:flex justify-around items-start ">
                    <div className="w-full md:w-1/4 flex items-start pt-[20px] pl-[10px]">
                        <a className="text-3xl font-semibold text-pink-500 text-left" href="/">
                            <Image src='/img/main_Logo.svg' alt="Logo" width={200} height={50}/>
                        </a>
                    </div>
                    <div className="w-full md:w-[10%] flex items-center mt-5 md:mt-0 flex-col pl-[10px] text-white md:ml-[20%]">
                        <p className={`${styles.manropeFont} text-[16px] font-bold w-full text-left  mt-[20px]`}>Explore</p>
                        <p className={`${styles.rubikFont} text-[16px] w-full mt-[20px] text-left`}>Cases</p>
                        <p className={`${styles.rubikFont} text-[16px] w-full mt-[20px] text-left`}>About</p>
                        <p className={`${styles.rubikFont} text-[16px] w-full mt-[20px] text-left`}>Testimonial</p>
                    </div>
                    <div className={`${styles.manropeFont} mt-5 md:mt-0 w-full md:w-1/4 flex items-start flex-col text-white`}>
                        <p className="text-[16px] font-bold w-full text-left mt-[20px] pl-4 mb-[10px]">Social Media</p>
                        <a className="text-[16px] font-light pl-4 text-center pt-2" href="/">Contact Us</a>
                        <a className="text-[16px] flex gap-7 font-light pl-4 text-center pt-5" href="/">
                            <Image src='/img/LinkedIn.svg' alt="Logo" width={20} height={20}/>
                            <Image src='/img/instagram.svg' alt="Logo" width={20} height={20}/>
                            <Image src='/img/YouTube.svg' alt="Logo" width={20} height={20}/>
                            <Image src='/img/X.svg' alt="Logo" width={20} height={20}/>
                            <Image src='/img/facebook.svg' alt="Logo" width={20} height={20}/>
                        </a>
                        <p>&nbsp;</p>
                    </div>
                </div>
            </div>
            <div className='w-[88%] border-[#F6F5F1] py-[20px]'>
                <p className={`${styles.rubikFont} text-center text-wrap text-white`}>
                    © 2025 YOUR WEB
                </p>
            </div>
        </div>
    )
}
