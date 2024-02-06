import React from 'react'
import { useState } from 'react';
// import bgimg from '../assets/Chapter1/bg-insurance.jpg'
// import img1 from '../../../public/assets/hdfc/image/Chapter2-childplan/Academia.png';
// import img2 from '../../../public/assets/hdfc/image/Chapter2-childplan/aspiration.png'
// import img3 from '../../../public/assets/hdfc/image/Chapter2-childplan/career.png'
// import btn from '../../../public/assets/hdfc/image/Chapter2-childplan/explore.png'

const ChildPlan = ({ getChildSkip }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <div className='image-container  w-full'>
                <div className=' h-auto   py-11 bg-[#6FB3F2] '>
                    <div className='relative '>
                        <div className='flex  justify-around items-center mt-4'>
                            {/* Content-1 */}
                            <div className='hidden md:flex flex-col items-center'>
                                <div >
                                    <img src="/assets/hdfc/image/Chapter2-childplan/Academia.png" alt="" className='w-[60px] lg:w-[140px] ' />
                                </div>
                                <div className=''>
                                    <h1 className='text-[14px] lg:text-[28px] font-semibold text-[#BC1425]'>ACADEMIA</h1>
                                    <div className=' lg:w-[250px] mt-3'>
                                        <p className='text-[12px] lg:text-[16px] font-medium text-white  '>(Moneyback benefit) Payouts during last 5 policy years with first guranteed payout higher than subsequent guranteed payouts</p>
                                    </div>
                                </div>
                                <div className='mt-2' onClick={openModal} >
                                    <img src='/assets/hdfc/image/Chapter2-childplan/explore.png' alt="" className='w-[60px] lg:w-[160px] cursor-pointer animate-pulse' />
                                </div>
                            </div>

                            {/* Content-2 */}
                            <div className='hidden md:flex flex-col items-center '>
                                <div>
                                    <img src='/assets/hdfc/image/Chapter2-childplan/aspiration.png' alt="" className='w-[60px] lg:w-[140px] ' />
                                </div>
                                <div className=''>
                                    <h1 className='text-[14px] lg:text-[28px] font-semibold text-[#BC1425]'>ASPIRATION</h1>
                                    <div className='lg:w-[250px] lg:h-[100px] mt-3'>
                                        <p className='text-[12px] lg:text-[16px] font-medium text-white '>(Endownment benefit) Lump Sum payment at maturity </p>
                                    </div>
                                </div>
                                <div className='mt-10'>
                                    <img src='/assets/hdfc/image/Chapter2-childplan/explore.png' alt="" className='w-[60px] lg:w-[160px] ' />
                                </div>
                            </div>
                            {/* Content-3 */}
                            <div className='hidden md:flex flex-col items-center'>
                                <div>
                                    <img src='/assets/hdfc/image/Chapter2-childplan/career.png' alt="" className='w-[60px] lg:w-[140px] ' />
                                </div>
                                <div className=''>
                                    <h1 className='text-[14px] lg:text-[28px] font-semibold text-[#BC1425]'>CARRER</h1>
                                    <div className='lg:w-[250px] mt-2'>
                                        <p className='text-[12px] lg:text-[16px] font-medium text-white '>(Moneyback benefit) Payouts during last 5 policy years with first guranteed payout higher than subsequent guranteed payouts</p>
                                    </div>
                                </div>
                                <div className='mt-2'>
                                    <img src='/assets/hdfc/image/Chapter2-childplan/explore.png' alt="" className='w-[60px] lg:w-[160px] '
                                    />
                                </div>

                            </div>

                        </div>
                        <div className='absolute  right-1 my-2'>
                            <button
                                className='border bg-gradient-to-r from-[#6B2D52] via-[#8A203D] to-pink-800 text-white text-lg rounded-md  px-4'
                                onClick={getChildSkip}
                            >
                                Skip
                            </button>
                        </div>
                        {/* Modal */}
                        {isModalOpen && (
                            <div className="absolute  inset-0 bg-black bg-transparent flex items-center justify-center">
                                <div className="bg-white p-4 rounded-3xl">
                                    {/* Your modal content goes here */}
                                    <div className='flex justify-end'>
                                        <button className='font-extrabold text-black text-sm w-[20px] ' onClick={closeModal}>X</button>
                                    </div>
                                    <div>
                                        <div className='flex flex-col justify-center'>
                                            <p className='text-[22px] text-[#BC1425] font-semibold'>Calculate Your Premium</p>
                                            <div className='flex  justify-between mt-4'>
                                                <div className='flex items-center'>
                                                    <h1 className='text-[19px] hidden md:block font-semibold'>Principal Amount</h1>
                                                </div>
                                                <div className='md:mx-4'>
                                                    <input type="text" className='border p-3 w-80 rounded-xl' placeholder='Enter Your Principal Amount' />
                                                </div>
                                            </div>
                                            <div className='flex justify-between mt-4'>
                                                <div className='flex items-center'>
                                                    <h1 className='text-[19px] hidden md:block font-semibold'>Tenure (Years)</h1>
                                                </div>
                                                <div className='md:mx-4'>
                                                    <input type="text" className='border p-3 w-80 rounded-xl' placeholder='10%' />
                                                </div>
                                            </div>
                                            <div className='flex justify-between mt-4'>
                                                <div className='flex items-center'>
                                                    <h1 className='text-[19px] hidden md:block font-semibold'>Applied Intrest</h1>
                                                </div>
                                                <div className='md:mx-4'>
                                                    <input type="text" className='border p-3 w-80 rounded-xl' placeholder='7' />
                                                </div>
                                            </div>
                                            <div className='flex justify-center md:justify-end m-4'>
                                                <img src="/assets/hdfc/image/Chapter2-childplan/calculate.png" alt="" className='w-[100px] lg:w-[160px] ' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {/* Mobile Devices */}
                        <div className='flex justify-between    md:hidden'>
                            <div className='flex items-center'>
                                <img src='/assets/hdfc/image/Chapter2-childplan/Academia.png' alt="" className='w-[100px] lg:w-[190px] ' />
                            </div>
                            <div className='flex flex-col justify-start'>
                                <h1 className='text-[14px] font-semibold text-[#BC1425]'>ACADEMIA</h1>
                                <div className='w-[230px] mt-3 mx-2'>
                                    <p className='text-[10px] text-justify font-medium text-white  '>(Moneyback benefit) Payouts during last 5 policy years with first guranteed payout higher than subsequent guranteed payouts</p>
                                </div>
                                <div className='mt-6 mx-3'>
                                    <img src='/assets/hdfc/image/Chapter2-childplan/explore.png' alt="" className='w-[60px] lg:w-[160px] ' />
                                </div>
                            </div>

                        </div>
                        <div className='flex justify-around    md:hidden'>
                            <div className='flex items-center'>
                                <img src='/assets/hdfc/image/Chapter2-childplan/career.png' alt="" className='w-[100px] lg:w-[190px] ' />
                            </div>
                            <div className='flex flex-col justify-start'>
                                <h1 className='text-[14px] font-semibold text-[#BC1425]'>ASPIRATIONS</h1>
                                <div className='mt-3 w-[230px] mx-2'>
                                    <p className='text-[10px]  text-justify font-medium text-white  '>(Moneyback benefit) Payouts during last 5 policy years with first guranteed payout higher than subsequent guranteed payouts</p>
                                </div>
                                <div className='mt-6 mx-3'>
                                    <img src='/assets/hdfc/image/Chapter2-childplan/explore.png' alt="" className='w-[60px] lg:w-[160px] ' />
                                </div>
                            </div>

                        </div>
                        <div className='flex justify-between   md:hidden'>
                            <div className='flex items-center'>
                                <img src='/assets/hdfc/image/Chapter2-childplan/explore.png' alt="" className='w-[100px] lg:w-[190px] ' />
                            </div>
                            <div className='flex flex-col justify-start'>
                                <h1 className='text-[14px] font-semibold text-[#BC1425]'>CARRER</h1>
                                <div className='mt-3 w-[230px] mx-2'>
                                    <p className='text-[10px] text-justify font-medium text-white  '>(Moneyback benefit) Payouts during last 5 policy years with first guranteed payout higher than subsequent guranteed payouts</p>
                                </div>
                                <div className='mt-6 mx-3'>
                                    <img src='/assets/hdfc/image/Chapter2-childplan/explore.png' alt="" className='w-[60px] lg:w-[160px] ' />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ChildPlan