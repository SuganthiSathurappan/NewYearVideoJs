import React from 'react'



function InsurancePolicyForm({ getSkip, getChildPlan }) {
    return (
        <div className='w-full bg-white '>
            <div className="image-container policyFormCss ">
                <div className='p-1' style={{ backgroundImage: 'url(/assets/hdfc/image/bg-insurance.jpg)' }}>
                    <div className='flex justify-between md:justify-center gap-1 mt-2'>
                        {/* 1 */}
                        <div className='flex flex-col items-center  '>
                            <img src='/assets/hdfc/image/icon-saving&investments.png' alt="" className='w-[50px] lg:w-[95px]' />
                            {/* content */}
                            <img src='/assets/hdfc/image/savings-investments.png' alt="" className='w-[80px] hidden lg:block lg:w-[180px] p-2 ' />
                            <h1 className='block lg:hidden text-[13px] text-[rgb(171,15,37)] font-semibold '>Savings & <br /> <span className='relative -top-2 '>Investment</span></h1>

                        </div>
                        {/* 2 */}
                        <div className='flex flex-col items-center ' >
                            <img src='/assets/hdfc/image/icon-health.png' alt="" className='w-[60px] lg:w-[95px]' />
                            {/* content */}
                            <img src='/assets/hdfc/image/health.png' alt="" className='w-[80px]  hidden lg:block  lg:w-[180px] p-2 ' />
                            <h1 className='block lg:hidden text-[13px] text-[rgb(171,15,37)] font-semibold'>Health</h1>
                        </div>
                    </div>
                    <div className='relative md:mx-14 my-3 md:m-0 flex justify-between md:justify-around gap-44'>
                        {/* 1 */}
                        <div className='flex flex-col items-center   relative'>
                            <img src='/assets/hdfc/image/icon-pension.png' alt="" className='w-[60px] lg:w-[95px]' />
                            {/* content */}
                            <img src='/assets/hdfc/image/pension.png' alt="" className='w-[80px] hidden lg:block lg:w-[180px] p-2 ' />
                            <h1 className='block lg:hidden text-[13px] text-[rgb(171,15,37)] font-semibold'>Pension</h1>
                        </div>

                        {/* 2 */}
                        <div className='flex '>
                            <div className='flex flex-col items-center cursor-pointer' onClick={getChildPlan}>
                                <img src='/assets/hdfc/image/icon-child.png' alt="" className='w-[60px] lg:w-[95px] animate-pulse' />
                                {/* content */}
                                <img src='/assets/hdfc/image/child.png' alt="" className='w-[80px] hidden lg:block lg:w-[180px] p-2 ' />
                                <h1 className='block lg:hidden text-[13px] text-[rgb(171,15,37)] font-semibold'>Child</h1>
                            </div>
                            <div className='-mr-20  -rotate-12'> 
                                <img src='/assets/hdfc/image/arrow.png' alt="" className='w-[30px] lg:w-[65px] mt-2 arrow animate-arrow' />
                            </div>
                        </div>
                        {/* Mobile Width */}
                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:hidden px-2 animate fadeIn two'>
                            <img src='/assets/hdfc/image/insurance-policy.png' alt="" className='w-[130px] lg:w-[250px]' />
                        </div>
                    </div>

                    <div className='md:mx-5 md:mt-9 md:pb-8 lg:pb:10 flex justify-between relative '>
                        {/* 1 */}
                        <div className='flex flex-col  items-center '>
                            <img src='/assets/hdfc/image/icon-protection.png' alt="" className='w-[60px] lg:w-[95px] ' />
                            {/* content */}
                            <img src='/assets/hdfc/image/protection.png' alt="" className='w-[80px]  hidden lg:block lg:w-[180px] p-2 ' />
                            <h1 className='block lg:hidden text-[13px] text-[rgb(171,15,37)] font-semibold '>Protections</h1>
                        </div>
                        {/* Desktop view */}
                        <div className='-mt-28 hidden md:block md:mx-3'>
                            <img src='/assets/hdfc/image/insurance-policy.png' alt="" className='w-[100px] lg:w-[170px]' />
                        </div>
                        {/* 2 */}
                        <div className='flex flex-col items-center md:-mr-2'>
                            <img src='/assets/hdfc/image/icon-women.png' alt="" className='w-[60px] lg:w-[95px] ' />
                            {/* content */}
                            <img src='/assets/hdfc/image/women.png' alt="" className='w-[80px]  hidden lg:block lg:w-[180px] p-2 ' />
                            <h1 className='block lg:hidden text-[13px] text-[rgb(171,15,37)] font-semibold'>Women</h1>
                        </div>
                    </div>

                </div>
                <div className='mt-1 relative animate fadeIn five' >
                    <div className='absolute -bottom-1 right-2'>
                        <button
                            className='border bg-gradient-to-r from-[#6B2D52] via-[#8A203D] to-pink-800 text-white text-lg rounded-md  px-4'
                            onClick={getSkip}
                        >
                            Skip
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InsurancePolicyForm