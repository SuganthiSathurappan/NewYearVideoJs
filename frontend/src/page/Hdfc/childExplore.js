import React from 'react'


const ChildExplore = ({ getContinue, getExplore }) => {


    return (
        <div className='w-full'>
            <div className='image-container policyFormCss bg-[#6FB3F2]'>
                <div className='lg:mt-16'>                    
                        <div className='relative '>
                            <div className='flex  justify-around items-center animate fadeIn two'>
                                <div className='flex flex-col justify-center  '>
                                    <h1 className='text-[24px]  lg:text-[36px] font-abc font-bold text-[#bd1326] py-5 text-center'>Would you like to continue with this plan<br /> or explore other options?</h1>
                                    <div className='flex flex-col justify-center place-items-center space-y-3 lg:space-y-9 my-2 lg:my-10'>
                                        <img src='/assets/hdfc/image/Chapter2-childplan/yes.png' alt=""
                                            className='w-[160px] lg:w-[300px] cursor-pointer' onClick={getContinue} />
                                        <img src='/assets/hdfc/image/Chapter2-childplan/explore-option.png' alt=""
                                            className='w-[160px] lg:w-[300px]  cursor-pointer' onClick={getExplore} />
                                    </div>
                                </div>
                            </div>
                        </div>

                </div>
            </div>
        </div>
    )
}

export default ChildExplore