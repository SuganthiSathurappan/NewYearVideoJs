import React from 'react'

// import bgimg from '../../../public/assets/hdfc/image/bg-insurance.jpg'
// import img1 from 'src/public/assets/hdfc/image/icon-saving&investments.png'
// import sc1 from '../../../public/assets/hdfc/image/savings-investments.png'
// import img2 from '../../../public/assets/hdfc/image/icon-health.png'
// import sc2 from '../../../public/assets/hdfc/image/health.png'
// import img3 from '../../../public/assets/hdfc/image/icon-pension.png'
// import sc3 from '../../../public/assets/hdfc/image/pension.png'
// import img4 from '../../../public/assets/hdfc/image/icon-child.png'
// import sc4 from '../../../public/assets/hdfc/image/child.png'
// import img5 from '../../../public/assets/hdfc/image/icon-protection.png'
// import sc5 from '../../../public/assets/hdfc/image/protection.png'
// import img6 from '../../../public/assets/hdfc/image/icon-women.png'
// import sc6 from '../../../public/assets/hdfc/image/women.png'
// import Image from '../../../public/assets/hdfc/image/insurance-policy.png'

function InsurancePolicyForm({ getSkip, getChildPlan }) {
    return (
        <div className='w-full bg-white '>
            <div className="image-container policyFormCss">
                <div className='p-1' style={{ backgroundImage: 'url(/assets/hdfc/image/bg-insurance.jpg)' }}>
                    <div className='flex justify-between md:justify-center gap-1 mt-2'>
                        {/* 1 */}   
                        <div className='flex flex-col items-center  animate fadeIn three'>
                            <img src='/assets/hdfc/image/icon-saving&investments.png' alt="" className='w-[50px] lg:w-[80px]' />
                            {/* content */}
                            <img src='/assets/hdfc/image/savings-investments.png' alt="" className='w-[80px] hidden lg:block lg:w-[180px] p-2 ' />
                            <h1 className='block lg:hidden text-[13px] text-[rgb(171,15,37)] font-semibold '>Savings & <br /> <span className='relative -top-2 '>Investment</span></h1>
        
                        </div>
                        {/* 2 */}
                        <div className='flex flex-col items-center animate fadeIn four' >
                            <img src='/assets/hdfc/image/icon-health.png' alt="" className='w-[60px] lg:w-[80px]' />
                            {/* content */}
                            <img src='/assets/hdfc/image/health.png' alt="" className='w-[80px]  hidden lg:block  lg:w-[180px] p-2 ' />
                            <h1 className='block lg:hidden text-[13px] text-[rgb(171,15,37)] font-semibold'>Health</h1>
                        </div>
                    </div>
                    <div className='relative md:mx-14 my-3 md:m-0 flex justify-between md:justify-around gap-44'>
                        {/* 1 */}
                        <div className='flex flex-col items-center  animate fadeIn two  relative'>
                            <img src='/assets/hdfc/image/icon-pension.png' alt="" className='w-[60px] lg:w-[80px]' />
                            {/* content */}
                            <img src='/assets/hdfc/image/pension.png' alt="" className='w-[80px] hidden lg:block lg:w-[180px] p-2 ' />
                            <h1 className='block lg:hidden text-[13px] text-[rgb(171,15,37)] font-semibold'>Pension</h1>
                        </div>

                        {/* 2 */}
                        <div className='flex flex-col items-center cursor-pointer animate fadeIn five' onClick={getChildPlan}>
                            <img src='/assets/hdfc/image/icon-child.png' alt="" className='w-[60px] lg:w-[80px] animate-pulse' />
                            {/* content */}
                            <img src='/assets/hdfc/image/child.png' alt="" className='w-[80px] hidden lg:block lg:w-[180px] p-2 ' />
                            <h1 className='block lg:hidden text-[13px] text-[rgb(171,15,37)] font-semibold'>Child</h1>
                        </div>
                        {/* Mobile Width */}
                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:hidden px-2'>
                            <img src='/assets/hdfc/image/insurance-policy.png' alt="" className='w-[130px] lg:w-[250px]' />
                        </div>
                    </div>

                    <div className='md:mx-14 md:mt-7  flex justify-between relative '>
                        {/* 1 */}
                        <div className='flex flex-col  items-center cursor-pointer animate fadeIn one'>
                            <img src='/assets/hdfc/image/icon-protection.png' alt="" className='w-[60px] lg:w-[80px] ' />
                            {/* content */}
                            <img src='/assets/hdfc/image/protection.png' alt="" className='w-[80px]  hidden lg:block lg:w-[180px] p-2 ' />
                            <h1 className='block lg:hidden text-[13px] text-[rgb(171,15,37)] font-semibold '>Protections</h1>
                        </div>
                        {/* Desktop view */}
                        <div className='-mt-24 hidden md:block md:mx-3'>
                            <img src='/assets/hdfc/image/insurance-policy.png' alt="" className='w-[100px] lg:w-[226px]' />
                        </div>
                        {/* 2 */}
                        <div className='flex flex-col items-center animate fadeIn six'>
                            <img src='/assets/hdfc/image/icon-women.png' alt="" className='w-[60px] lg:w-[80px]' />
                            {/* content */}
                            <img src='/assets/hdfc/image/women.png' alt="" className='w-[80px]  hidden lg:block lg:w-[180px] p-2 ' />
                            <h1 className='block lg:hidden text-[13px] text-[rgb(171,15,37)] font-semibold'>Women</h1>
                        </div>
                    </div>

                </div>
                <div className='mt-1 relative animate fadeIn insuranceSkip' >
                    <div className='absolute bottom-3 right-2'>
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