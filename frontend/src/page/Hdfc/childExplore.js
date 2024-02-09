import React from 'react'
import { useState } from 'react';

const ChildExplore = ({ getContinue, getExplore }) => {


    return (
        <div className='image-container'>
            <div className='p-1 border ' style={{ backgroundImage: 'url(/assets/hdfc/image/bg-insurance.jpg)' }}>
                <div className='relative '>
                    <div className='flex  justify-around items-center m-28'>
                        <div className='flex flex-col justify-center  '>
                            <h1 className='text-[16px]  lg:text-[24px] font-abc font-bold text-[#6395ae] py-5 text-center'>Would you like to continue with this plan or explore other options?</h1>
                            <div className='flex flex-col justify-center place-items-center space-y-3 lg:space-y-9 my-2 lg:my-10'>
                                <img src='/assets/hdfc/image/Chapter2-childplan/button1.png' alt=""
                                    className='w-[160px] lg:w-[300px] cursor-pointer' onClick={getContinue} />
                                <img src='/assets/hdfc/image/Chapter2-childplan/button2.png' alt=""
                                    className='w-[160px] lg:w-[300px]  cursor-pointer' onClick={getExplore} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ChildExplore