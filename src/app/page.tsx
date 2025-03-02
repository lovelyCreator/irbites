/* eslint-disable @next/next/no-img-element */
'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import BottomBar from "./components/bottomBar";
import styles from './components/CustomText.module.css';
import Case from "./components/case";

export default function Home() {
  const [pictureState, setPictureState] = useState<string>('/img/Rectangle 9627.svg');
  const caseDatas = [
    {
      imgurl: "/img/Rectangle 9629.svg",
      title: "Case Title",
      state: "Diagnosis Certain",
      content: ["Case uploader:", "SK"],
      date: "2/27/2025"
    },
    {
      imgurl: "/img/Rectangle 9629.svg",
      title: "Case Title",
      state: "Diagnosis Certain",
      content: ["Case uploader:", "SK"],
      date: "2/27/2025"
    },
    {
      imgurl: "/img/Rectangle 9629.svg",
      title: "Case Title",
      state: "Diagnosis Certain",
      content: ["Case uploader:", "SK"],
      date: "2/27/2025"
    },
    {
      imgurl: "/img/Rectangle 9629.svg",
      title: "Case Title",
      state: "Diagnosis Certain",
      content: ["Case uploader:", "SK"],
      date: "2/27/2025"
    },
    {
      imgurl: "/img/Rectangle 9629.svg",
      title: "Case Title",
      state: "Diagnosis Certain",
      content: ["Case uploader:", "SK"],
      date: "2/27/2025"
    },
    {
      imgurl: "/img/Rectangle 9629.svg",
      title: "Case Title",
      state: "Diagnosis Certain",
      content: ["Case uploader:", "SK"],
      date: "2/27/2025"
    },
  ]
  return (
    <main className="flex min-h-screen flex-col items-center justify-start w-full bg-[#2C2428]">
      <div className="flex flex-col items-center justify-center w-[88%] mt-8">
        <div className="text-white text-[40px] font-bold w-full py-8">
          Case Title
        </div>
        <div id="show-images" className="w-full">
          <div className="w-full mb-5 rounded-[20px] md:rounded-[40px] lg:rounded-[60px] overflow-hidden h-[43vw]">          
            <img src={pictureState} alt="img" className='w-full'/>
          </div>
          <div className="flex flex-wrap gap-5 justify-between w-full">
            <div className={`w-[45%] md:w-[22%] rounded-[10px] md:rounded-[20px] lg:rounded-[30px] overflow-hidden ${pictureState == "/img/Rectangle 9627.svg" ? 'border-2 lg:border-4 border-[#65419D]': ''}`}>
              <img src='/img/Rectangle 9627.svg' alt="img 1" className="w-full"
                onClick={() => {setPictureState("/img/Rectangle 9627.svg")}}
              />
            </div>
            <div className={`w-[45%] md:w-[22%] rounded-[10px] md:rounded-[20px] lg:rounded-[30px] overflow-hidden ${pictureState == "/img/Rectangle 9628.svg" ? 'border-2 lg:border-4 border-[#65419D]': ''}`}>
              <img src='/img/Rectangle 9628.svg' alt="img 1" className="w-full"
                onClick={() => {setPictureState("/img/Rectangle 9628.svg")}}
              />
            </div>
            <div className={`w-[45%] md:w-[22%] rounded-[10px] md:rounded-[20px] lg:rounded-[30px] overflow-hidden ${pictureState == "/img/Rectangle 9629.svg" ? 'border-2 lg:border-4 border-[#65419D]': ''}`}>
              <img src='/img/Rectangle 9629.svg' alt="img 1" className="w-full"
                onClick={() => {setPictureState("/img/Rectangle 9629.svg")}}
              />
            </div>
            <div className={`w-[45%] md:w-[22%] rounded-[10px] md:rounded-[20px] lg:rounded-[30px] overflow-hidden ${pictureState == "/img/Rectangle 9630.svg" ? 'border-2 lg:border-4 border-[#65419D]': ''}`}>
              <img src='/img/Rectangle 9630.svg' alt="img 1" className="w-full"
                onClick={() => {setPictureState("/img/Rectangle 9630.svg")}}
              />
            </div>
          </div>
        </div>
        <div className="text-white text-[24px] font-bold w-full py-8">
          Diagnosis <span className="text-[#29C43B]">Certain</span>
          <span className="inline-block w-[12px] h-[12px] rounded-full bg-[#29C43B] ml-2"/>
          <div className="text-wrap text-[20px] font-normal text-[#E8E8E8] mt-2">
            Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book. It has survived not  only five centuries, but also the leap into electronic typesetting,  remaining essentially unchanged. It was popularised in the 1960s with  the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker  including versions of Lorem Ipsum.
          </div>
        </div>
        <div className="text-white text-[40px] font-bold w-full py-8">
          More Cases
        </div>
        <div className="flex flex-wrap w-full gap-[4%] mb-20">
          {caseDatas.map((item, index) => 
            <div key={index} className="w-full md:w-[48%] mb-5">
              <Case caseData={item}/>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
