import React, { useState, useRef } from 'react';
// import bgimg from '../assets/Chapter1/bg-insurance.jpg'
// import img1 from '../../../public/assets/hdfc/image/Chapter2-childplan/Academia.png';
// import img2 from '../../../public/assets/hdfc/image/Chapter2-childplan/aspiration.png'
// import img3 from '../../../public/assets/hdfc/image/Chapter2-childplan/career.png'
// import btn from '../../../public/assets/hdfc/image/Chapter2-childplan/explore.png'

const ChildPlan = ({ getChildSkip, getHandleOk }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isOpens, setIsOpens] = useState(false);
    const [formData, setFormData] = useState({
        principalAmount: '',
        tenure: '',
        appliedInterest: '',
    });

    const handleChange = (e) => {
        //update form state with new input value
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    console.log(formData);
    // const PA = parseFloat(formData.principalAmount);
    // const T = parseFloat(formData.tenure);
    // const I = parseFloat(formData.appliedInterest);
    // let totalOutstandingAmount = (PA * T * I) / 100;
    // totalOutstandingAmount = Math.round(totalOutstandingAmount * 100) / 100; // rounding off to two decimal places
    // console.log('totalOutstandingAmount', totalOutstandingAmount);
    const P = parseFloat(formData.principalAmount);
    const t = parseFloat(formData.tenure);
    const n = 1; //number of time compound yearly
    const I = parseFloat(formData.appliedInterest);
    const r = I / 100;
    // const totalOutstandingAmount = Math.round(P + ((P*T*I)/100));
    // console.log('totalOutstandingAmount',totalOutstandingAmount);
    // const totalOutstandingAmount = ((P*t) * Math.pow(1 + r / n, n * t)).toFixed(2);
    let totalOutstandingAmount = 0;
    for (let i = 1; i <= t; i++) {
        totalOutstandingAmount += P * Math.pow(1 + r, i).toFixed(2);
    }
    console.log("Future value of the SIP investment:", totalOutstandingAmount);


    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setIsOpens(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Form submitted with data:', formData);
        setIsOpens(true);
        setIsModalOpen(false);
    };

    return (
        <div className=' w-full '>
            <div className='image-container  bg-[#6FB3F2]'>
                <div className='lg:mt-16 '>
                    <div className='relative '>
                        <div className='flex  justify-around items-center mt-4 animate fadeIn three'>
                            {/* Content-1 */}
                            <div className='hidden md:flex flex-col items-center'>
                                <div >
                                    <img src="/assets/hdfc/image/Chapter2-childplan/Academia.png" alt="" className='w-[60px] lg:w-[140px] ' />
                                </div>
                                <div className='text-center'>
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
                                <div className='text-center'>
                                    <h1 className='text-[14px] lg:text-[28px] font-semibold text-[#BC1425]'>ASPIRATION</h1>
                                    <div className='lg:w-[250px] lg:h-[100px] mt-3 mb-3'>
                                        <p className='text-[12px] lg:text-[16px] font-medium text-white '>(Endownment benefit) Lump Sum payment at maturity </p>
                                    </div>
                                </div>
                                <div className=''>
                                    <img src='/assets/hdfc/image/Chapter2-childplan/explore.png' alt="" className='w-[60px] lg:w-[160px] ' />
                                </div>
                            </div>
                            {/* Content-3 */}
                            <div className='hidden md:flex flex-col items-center'>
                                <div>
                                    <img src='/assets/hdfc/image/Chapter2-childplan/career.png' alt="" className='w-[60px] lg:w-[140px] ' />
                                </div>
                                <div className='text-center'>
                                    <h1 className='text-[14px] lg:text-[28px] font-semibold text-[#BC1425]'>CAREER</h1>
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
                        <div className='absolute  right-1 my-8 animate fadeIn three'>
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
                                    <form action="#" onSubmit={handleSubmit} >
                                        <div>
                                            <div className='flex flex-col justify-center'>
                                                <p className='text-[22px] text-[#BC1425] font-semibold'>Calculate Your Premium</p>
                                                <div className='flex  justify-between mt-4'>
                                                    <div className='flex items-center'>
                                                        <h1 className='text-[19px] hidden md:block font-semibold'>Principal Amount</h1>
                                                    </div>
                                                    <div className='md:mx-4'>
                                                        <input type="text" name='principalAmount' className='border p-3 w-80 rounded-xl' required
                                                            placeholder='Enter Your Principal Amount' onChange={handleChange} />
                                                    </div>
                                                </div>
                                                <div className='flex justify-between mt-4'>
                                                    <div className='flex items-center'>
                                                        <h1 className='text-[19px] hidden md:block font-semibold'>Tenure (Years)</h1>
                                                    </div>
                                                    <div className='md:mx-4'>
                                                        <input type="text" name='tenure' className='border p-3 w-80 rounded-xl' required
                                                             onChange={handleChange} />
                                                    </div>
                                                </div>
                                                <div className='flex justify-between mt-4'>
                                                    <div className='flex items-center'>
                                                        <h1 className='text-[19px] hidden md:block font-semibold'>Applied Interest</h1>
                                                    </div>
                                                    <div className='md:mx-4'>
                                                        <input type="text" name='appliedInterest' className='border p-3 w-80 rounded-xl' required
                                                            placeholder='%' onChange={handleChange} />
                                                    </div>
                                                </div>
                                                <button type='submit' className='flex justify-center md:justify-end m-4'>
                                                    <img src="/assets/hdfc/image/Chapter2-childplan/calculate.png" alt="" className='w-[100px] lg:w-[160px] ' />
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}
                        {isOpens && (
                            <div className="absolute   inset-0 z-1 flex items-center justify-center " >
                                <div className="bg-white p-4 rounded-3xl ">
                                    {/* Your modal content goes here */}

                                    <div>
                                        <div className='flex flex-col justify-center '>
                                            <p className='text-[22px] text-[#BC1425] font-semibold text-center'>Your Earning </p>
                                            <div className='flex  justify-between mt-1'>
                                                <div className='flex items-center'>
                                                    <h1 className='text-[19px] hidden md:block font-semibold'>Total Outstanding Amount</h1>
                                                </div>
                                                <div className='md:mx-4'>

                                                    <div className='border flex justify-center p-2 rounded-xl w-32'>
                                                        <h1 className='text-xl '>{totalOutstandingAmount}</h1>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className='border-b my-3 text-start'>
                                                <h1 className='text-[26px] font-bold'>Summary</h1>
                                            </div>
                                            <div className='mx-auto mt-2 items-start'>
                                                <div className='text-[18px] font-semibold'>
                                                    <p className="flex justify-between">
                                                        <span>Premium Amount :</span>
                                                        <span className='px-10 font-normal'>{formData.principalAmount}</span>
                                                    </p>
                                                    <p className="flex justify-between">
                                                        <span>Tenure Year :</span>
                                                        <span className='px-10 font-normal'>{formData.tenure} Years</span>
                                                    </p>
                                                    <p className="flex justify-between">
                                                        <span>Payment Annual :</span>
                                                        <span className='px-10 font-normal'>5 Years</span>
                                                    </p>
                                                    <p className="flex justify-between">
                                                        <span>Applied Interest :</span>
                                                        <span className='px-10 font-normal'>{formData.appliedInterest}%</span>
                                                    </p>
                                                </div>
                                            </div>

                                            <div className='flex justify-end'>
                                                <button className='font-extrabold text-white bg-[#BC1425] border p-2  text-lg rounded-xl '
                                                    onClick={getHandleOk}>Submit</button>
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
                                <h1 className='text-[14px] font-semibold text-[#BC1425]'>CAREER</h1>
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
        </div>
    )
}

export default ChildPlan