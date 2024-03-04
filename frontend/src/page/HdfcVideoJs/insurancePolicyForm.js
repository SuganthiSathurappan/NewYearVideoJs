
// export default InsurancePolicy;
import React from "react";

function InsurancePolicy({getChildPlan}) {
  return (
    <>
      <div>
        <div
          className="absolute inset-0 overflow-auto md:overflow-hidden"
          style={{ backgroundImage: 'url(/assets/hdfc/image/bg-insurance.jpg)' }}
        >
          <div className="">
            <div className="p-1  bg-cover bg-center ">
              <div className="flex justify-center md:justify-center gap-5 ">
                {/* 1 */}
                <div className="flex flex-col items-center  ">
                  <img src='/assets/hdfc/image/icon-saving&investments.png' alt="" className="w-[45px] mt-2 lg:w-[120px] " />
                  {/* content */}
                  <img
                    src={'/assets/hdfc/image/savings-investments.png'}
                    alt=""
                    className="w-[80px] hidden md:block lg:block  lg:w-[170px] p-2 "
                  />
                  <h1 className="block md:hidden lg:hidden text-[13px] text-[rgb(171,15,37)] font-semibold ">
                    Savings & <br />{" "}
                    <span className="relative -top-2 ">Investment</span>
                  </h1>
                </div>
                {/* 2 */}
                <div className="flex flex-col items-center ">
                  <img src={'/assets/hdfc/image/icon-health.png'} alt="" className="w-[45px] lg:w-[120px] mt-2" />
                  {/* content */}
                  <img
                    src={'/assets/hdfc/image/health.png'}
                    alt=""
                    className="w-[80px]  hidden md:block lg:block  lg:w-[170px] p-2 "
                  />
                  <h1 className="block md:hidden lg:hidden text-[13px] text-[rgb(171,15,37)] font-semibold">
                    Health
                  </h1>
                </div>
              </div>
              <div className="relative -mt-5  md:mx-32 md:mt-0 lg:mx-14  flex justify-around md:justify-around gap-32 md:gap-40 lg:gap-64">
                {/* 1 */}
                <div className="flex flex-col items-center ml-4   relative">
                  <img src={'/assets/hdfc/image/icon-pension.png'} alt="" className="w-[45px] lg:w-[120px]" />
                  {/* content */}
                  <img
                    src={'/assets/hdfc/image/pension.png'}
                    alt=""
                    className="w-[80px] hidden md:block lg:block lg:w-[170px] p-2 "
                  />
                  <h1 className="block md:hidden lg:hidden text-[13px] text-[rgb(171,15,37)] font-semibold">
                    Pension
                  </h1>
                </div>

                {/* 2 */}
                <div className="flex ">
                  <div className="flex flex-col items-center cursor-pointer" onClick={getChildPlan}>
                    <img
                      src={'/assets/hdfc/image/icon-child.png'}
                      alt=""
                      className="w-[45px] lg:w-[120px] animate-pulse"
                    />
                    {/* content */}
                    <img
                      src={'/assets/hdfc/image/child.png'}
                      alt=""
                      className="w-[80px] hidden md:block lg:block lg:w-[170px] p-2 "
                    />
                    <h1 className="block md:hidden lg:hidden text-[13px] text-[rgb(171,15,37)] font-semibold">
                      Child
                    </h1>
                  </div>
                  <div className="-mr-16  -rotate-12 hidden lg:block">
                    <img
                      src={'/assets/hdfc/image/arrow.png'}
                      alt=""
                      className="w-[30px] lg:w-[65px]  mt-2 arrow animate-arrow"
                    />
                  </div>
                </div>
                {/* Mobile Width */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  my-12  md:my-0 md:hidden px-2 animate fadeIn two">
                  <img src={'/assets/hdfc/image/insurance-policy.png'} alt="" className="w-[90px] lg:w-[250px]" />
                </div>
              </div>
              <div className="md:mx-24 lg:mx-5 md:m-3 lg:mt-3 md:pb-8 lg:pb:5 flex justify-between relative ">
                {/* 1 */}
                <div className="flex flex-col  items-center ">
                  <img src={'/assets/hdfc/image/icon-protection.png'} alt="" className="w-[45px] lg:w-[110px] " />
                  {/* content */}
                  <img
                    src={'/assets/hdfc/image/protection.png'}
                    alt=""
                    className="w-[80px]  hidden md:block lg:block lg:w-[170px] p-2 "
                  />
                  <h1 className="block md:hidden lg:hidden text-[13px] text-[rgb(171,15,37)] font-semibold ">
                    Protections
                  </h1>
                </div>
                {/* Desktop view */}
                <div className="md:-mt-24 lg:-mt-36  hidden md:block md:mx-3">
                  <img
                    src={'/assets/hdfc/image/insurance-policy.png'}
                    alt=""
                    className="w-[100px] lg:w-[200px] mt-3"
                  />
                </div>
                {/* 2 */}
                <div className="flex flex-col items-center md:-mr-2">
                  <img src={'/assets/hdfc/image/icon-women.png'} alt="" className="w-[45px] lg:w-[110px] " />
                  {/* content */}
                  <img
                    src={'/assets/hdfc/image/women.png'}
                    alt=""
                    className="w-[80px]  hidden md:block lg:block lg:w-[170px] p-2 "
                  />
                  <h1 className="block md:hidden lg:hidden text-[13px] text-[rgb(171,15,37)] font-semibold">
                    Women
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InsurancePolicy;
