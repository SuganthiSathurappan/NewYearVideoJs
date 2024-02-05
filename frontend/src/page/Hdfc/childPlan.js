import React from 'react'
import { useState } from 'react';
// import bgimg from '../assets/Chapter1/bg-insurance.jpg'
// import img1 from '../../../public/assets/hdfc/image/Chapter2-childplan/Academia.png';
// import img2 from '../../../public/assets/hdfc/image/Chapter2-childplan/aspiration.png'
// import img3 from '../../../public/assets/hdfc/image/Chapter2-childplan/career.png'
// import btn from '../../../public/assets/hdfc/image/Chapter2-childplan/explore.png'

const ChildPlan = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <div className='image-container  '>
                <div className=' h-auto  p-1 bg-[#6FB3F2] '>
                    <div className='relative '>
                        <div className='flex  justify-around items-center'>
                            {/* Content-1 */}
                            <div className='hidden md:flex flex-col items-center  '>
                                <div >
                                    <img src="/assets/hdfc/image/Chapter2-childplan/Academia.png" alt="" className='w-[60px] lg:w-[190px] ' />
                                </div>
                                <div className=''>
                                    <h1 className='text-[14px] lg:text-[30px] font-semibold text-[#BC1425]'>ACADEMIA</h1>
                                    <div className=' lg:w-[290px] mt-3'>
                                        <p className='text-[12px] lg:text-[18px] font-medium text-white  '>(Moneyback benefit) Payouts during last 5 policy years with first guranteed payout higher than subsequent guranteed payouts</p>
                                    </div>
                                </div>
                                <div className='mt-6' onClick={openModal} >
                                    <img src='/assets/hdfc/image/Chapter2-childplan/explore.png' alt="" className='w-[60px] lg:w-[160px] ' />
                                </div>
                            </div>

                            {/* Content-2 */}
                            <div className='hidden md:flex flex-col items-center'>
                                <div>
                                    <img src='/assets/hdfc/image/Chapter2-childplan/aspiration.png' alt="" className='w-[60px] lg:w-[190px] ' />
                                </div>
                                <div className=''>
                                    <h1 className='text-[14px] lg:text-[30px] font-semibold text-[#BC1425]'>ASPIRATION</h1>
                                    <div className='lg:w-[290px] lg:h-[100px] mt-3'>
                                        <p className='text-[12px] lg:text-[18px] font-medium text-white '>(Endownment benefit) Lump Sum payment at maturity </p>
                                    </div>
                                </div>
                                <div className='mt-6'>
                                    <img src='/assets/hdfc/image/Chapter2-childplan/explore.png' alt="" className='w-[60px] lg:w-[160px] ' />
                                </div>
                            </div>
                            {/* Content-3 */}
                            <div className='hidden md:flex flex-col items-center'>
                                <div>
                                    <img src='/assets/hdfc/image/Chapter2-childplan/career.png' alt="" className='w-[60px] lg:w-[190px] ' />
                                </div>
                                <div className=''>
                                    <h1 className='text-[14px] lg:text-[30px] font-semibold text-[#BC1425]'>CARRER</h1>
                                    <div className='lg:w-[290px] mt-3'>
                                        <p className='text-[12px] lg:text-[18px] font-medium text-white '>(Moneyback benefit) Payouts during last 5 policy years with first guranteed payout higher than subsequent guranteed payouts</p>
                                    </div>
                                </div>
                                <div className='mt-6'>
                                    <img src='/assets/hdfc/image/Chapter2-childplan/explore.png' alt="" className='w-[60px] lg:w-[160px] ' />
                                </div>
                            </div>
                        </div>
                        {/* Modal */}
                        {isModalOpen && (
                            <div className="absolute  inset-0 bg-black bg-transparent flex items-center justify-center">
                                <div className="bg-white p-8">
                                    {/* Your modal content goes here */}
                                    <p>This is your modal content</p>
                                    <div className='flex justify-end'>
                                        <button className='rounded-full bg-[]' onClick={closeModal}>X</button>
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