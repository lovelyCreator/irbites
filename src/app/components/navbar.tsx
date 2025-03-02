'use client';

import React from 'react';
import { useState } from 'react';
import Image from "next/image";
import styles from './CustomText.module.css';
import Link from 'next/link';

const NavLink = ({to, children}: {to: string, children: React.ReactNode}) => {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

function MobileNav({open, setOpen}: {open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>>}) {
    const [best, setBest] = useState(false);
    const [review, setReview] = useState(false);
    // const hei = windows.screen.height/100;
    
    // // const wei = screen.width/100;
    return (
        <div className={`absolute inset-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            {/* <div className="flex items-center justify-center filter drop-shadow-md bg-[#220F18] px-4 py-4 h-15 ">
                <a className=" ml-1 text-left items-start w-full flex" href="/">
                    <Image src='/img/main_Logo.svg' 
                        alt="Logo" 
                        width={50} 
                        height={20}
                        className="w-[100px]"
                    />
                </a>
            </div>
            <div className={`${styles.rubikFont} flex flex-col ml-4 overflow-y-auto `}>
                <div className="w-[100%] sm:w-[50%]">
                    <a className="text-xl font-medium my-4" href="/bestMattress" onClick={() => {setTimeout(() => setOpen(!open), 100);}}
                        // onMouseEnter={()=>setBest(true)}
                    >
                        Cases
                    </a>
                </div>
                <div>
                    <a className="text-xl font-normal my-4" href="/reviews" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}
                            // onMouseEnter={()=>setReview(true)}
                    >
                        About
                    </a>
                </div>
                <div>
                    <a className="text-xl font-normal my-4" href="/reviews" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}
                            // onMouseEnter={()=>setReview(true)}
                    >
                        Testimonial
                    </a>
                </div>
            </div>   */}
        </div>
    )
}

export default function Navbar() {
    
    const [open, setOpen] = useState(false);
    return (
        <nav className={`flex filter bg-[#220F18] px-4 py-4 h-15 items-center  justify-between ${open? 'relative': ''}`}>
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="flex items-center text-[#69747F]">
                <a className="text-3xl font-semibold text-pink-500 ml-1 lg:ml-[5vw] text-center" href="/">
                    <img src='/img/main_Logo.svg' alt="Logo" className='w-[100px] lg:w-[100px]'/>
                </a>
            </div>
            <div className="flex items-center text-[#69747F]">

                <div className={`z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden`} onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-[#FF3E9B] rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-[#FF3E9B] rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-[#FF3E9B] rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className={`${styles.rubikFont} hidden md:flex gap-[20%]`}>
                    {/* <NavLink to="/bestMattress"> */}
                        <span className="text-[#FF3E9B]" >Cases</span>
                    {/* </NavLink> */}
                    {/* <NavLink to="/bestCheapMattress"> */}
                        <span className="text-white">About</span>
                    {/* </NavLink> */}
                    {/* <NavLink to ="/reviews"> */}
                        <span className="text-white" >Testimonial</span>
                    {/* </NavLink> */}
                </div>
            </div>
            <div className={`${styles.rubikFont} md:flex rounded-[50px] bg-[#FF3E9B] mr-1 lg:mr-[5%] py-2 px-4 text-white text-[12px] md:text-[16px] hidden md:flex-row`}>
                {/* <NavLink to="/bestMattress"> */}
                    Sign up
                {/* </NavLink> */}
            </div>
        </nav>
    )
}


