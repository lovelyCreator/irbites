'use client';

import React from 'react';

interface CaseData {
    imgurl: string;
    title: string;
    state: string;
    content: string[];
    date: string;
}

interface CaseProps {
    caseData: CaseData;
}

export default function Case({ caseData }: CaseProps) {
    return (
        <div className='flex items-center h-full gap-5 bg-[#220F18] border-3 rounded-lg md:rounded-3xl border-[#CCCCCC77] w-full overflow-hidden px-4 py-10'>
            <div className={`w-[45%] rounded-[20px] lg:rounded-[30px] overflow-hidden`}>
                <img src={caseData.imgurl} alt={caseData.title} className="w-full h-auto" />
            </div>
            <div className='flex flex-col justify-evenly h-full text-[18px] lg:text-[24px] text-white'>
                <h2 className="text-[24px] lg:text-[32px] font-medium ">{caseData.title}</h2>
                <p className='font-light'>{caseData.state} <span className="inline-block w-[12px] h-[12px] rounded-full bg-[#29C43B] ml-2"/></p>
                <p className='font-light'>{caseData.content[0]}&nbsp;<span className='font-medium'>{caseData.content[1]}</span></p>
                <p className='font-light'>{caseData.date}</p>
            </div>
        </div>
    );
}
