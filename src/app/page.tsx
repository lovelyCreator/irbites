/* eslint-disable @next/next/no-img-element */
'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import BottomBar from "./components/bottomBar";
import styles from './components/CustomText.module.css';

export default function Home() {
  const [pictureState, setPictureState] = useState<string>('/img/Rectangle 9627.svg');

  return (
    <main className="flex min-h-screen flex-col items-center justify-start w-full bg-[#2C2428]">
      <div className="flex flex-col items-center justify-center w-[88%] mt-2">
        <div className="text-white text-[30px] font-bold w-full py-8">
          Case Title
        </div>
        <div className="w-full mb-5 rounded-[60px] overflow-hidden h-[43vw]">          
          <img src={pictureState} alt="img" className='w-full'/>
        </div>
        <div className="flex flex-wrap gap-5 justify-between w-full">
          <div className={`w-[22%] rounded-[30px] overflow-hidden ${pictureState == "/img/Rectangle 9627.svg" ? 'border-4 border-[#65419D]': ''}`}>
            <img src='/img/Rectangle 9627.svg' alt="img 1" className="w-full"
              onClick={() => {setPictureState("/img/Rectangle 9627.svg")}}
            />
          </div>
          <div className={`w-[22%] rounded-[30px] overflow-hidden ${pictureState == "/img/Rectangle 9628.svg" ? 'border-4 border-[#65419D]': ''}`}>
            <img src='/img/Rectangle 9628.svg' alt="img 1" className="w-full"
              onClick={() => {setPictureState("/img/Rectangle 9628.svg")}}
            />
          </div>
          <div className={`w-[22%] rounded-[30px] overflow-hidden ${pictureState == "/img/Rectangle 9629.svg" ? 'border-4 border-[#65419D]': ''}`}>
            <img src='/img/Rectangle 9629.svg' alt="img 1" className="w-full"
              onClick={() => {setPictureState("/img/Rectangle 96269.svg")}}
            />
          </div>
          <div className={`w-[22%] rounded-[30px] overflow-hidden ${pictureState == "/img/Rectangle 9630.svg" ? 'border-4 border-[#65419D]': ''}`}>
            <img src='/img/Rectangle 9630.svg' alt="img 1" className="w-full"
              onClick={() => {setPictureState("/img/Rectangle 9630.svg")}}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
