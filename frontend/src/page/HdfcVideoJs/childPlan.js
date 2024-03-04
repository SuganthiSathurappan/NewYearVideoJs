import React, { useState, useRef } from "react";

function ChildPlan({ getChildSkip, getHandleOk }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpens, setIsOpens] = useState(false);
  const [formData, setFormData] = useState({
    principalAmount: "",
    tenure: "",
    appliedInterest: "",
  });

  const handleChange = (e) => {
    //update form state with new input value
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  console.log(formData);
  const P = parseFloat(formData.principalAmount);
  const t = parseFloat(formData.tenure);
  const n = 1; //number of time compound yearly
  const I = parseFloat(formData.appliedInterest);
  const r = I / 100;

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
  const getHandleBack = () => {
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
    <>
      <div>
        <div className="absolute   inset-0 overflow-auto  md:overflow-hidden bg-[#6FB3F2]">
          <div className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center md:space-x-4 lg:space-x-14">
            <div className="flex flex-col items-center">
              <div>
                <img
                  src={"/assets/hdfc/image/Chapter2-childplan/Academia.png"}
                  alt=""
                  className="w-[50px] md:w-[100px]  lg:w-[120px] "
                />
              </div>
              <div className=" md:text-center">
                <h1 className="text-[14px] md:text-[24px] lg:text-[28px] font-semibold text-[#BC1425]">
                  ACADEMIA
                </h1>
                <div className=" md:w-[190px] lg:w-[250px] mt-1 md:mt-3">
                  <p className="text-[7px] md:text-[13px] lg:text-[16px] font-bold md:font-medium text-white  ">
                    (Moneyback benefit) Payouts during last 5 policy years with
                    first guranteed payout higher than subsequent guranteed
                    payouts
                  </p>
                </div>
              </div>
              <div className="mt-4" onClick={openModal}>
                <img
                  src={"/assets/hdfc/image/Chapter2-childplan/explore.png"}
                  alt=""
                  className="w-[60px] md:w-[120px] lg:w-[160px] cursor-pointer animate-pulse"
                />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div>
                <img
                  src={"/assets/hdfc/image/Chapter2-childplan/aspiration.png"}
                  alt=""
                  className="w-[50px] md:w-[100px]  lg:w-[120px] "
                />
              </div>
              <div className="text-center ">
                <h1 className="text-[14px] md:text-[24px] lg:text-[28px]] font-semibold text-[#BC1425] mt-1 md:mt-0">
                  ASPIRATION
                </h1>
                <div className="md:w-[160px] lg:w-[250px] md:h-[90px]  lg:h-[90px] mt-1 mb-1.5  md:mt-3 md:mb-3">
                  <p className="text-[7px]  md:text-[13px] lg:text-[16px] font-bold md:font-medium text-white ">
                    (Endownment benefit) Lump Sum payment at maturity{" "}
                  </p>
                </div>
              </div>
              <div className="mt-3 lg:mt-4" onClick={openModal}>
                <img
                  src={"/assets/hdfc/image/Chapter2-childplan/explore.png"}
                  alt=""
                  className="w-[60px] md:w-[120px] lg:w-[160px] cursor-pointer animate-pulse"
                />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div>
                <img
                  src={"/assets/hdfc/image/Chapter2-childplan/career.png"}
                  alt=""
                  className="w-[50px] md:w-[100px]  lg:w-[120px] "
                />
              </div>
              <div className="text-center">
                <h1 className="text-[14px] md:text-[24px] lg:text-[28px] font-semibold text-[#BC1425]">
                  CAREER
                </h1>
                <div className=" md:w-[190px] lg:w-[250px]  mt-1 md:mt-3">
                  <p className="text-[7px] md:text-[13px] lg:text-[16px] font-bold md:font-medium text-white ">
                    (Moneyback benefit) Payouts during last 5 policy years with
                    first guranteed payout higher than subsequent guranteed
                    payouts
                  </p>
                </div>
              </div>
              <div className="mt-4" onClick={openModal}>
                <img
                  src={"/assets/hdfc/image/Chapter2-childplan/explore.png"}
                  alt=""
                  className="w-[60px] md:w-[120px] lg:w-[160px] cursor-pointer animate-pulse"
                />
              </div>
            </div>
          </div>
          <div className=" animate fadeIn three absolute md:bottom-4 bottom-2 right-3 my-0 md:my-2 md:right-5">
            <button 
            className="border bg-gradient-to-r from-[#6B2D52] via-[#8A203D] to-pink-800 text-white text-[9px] md:text-lg rounded-md  px-4"
            onClick={getChildSkip}
            >
              Skip
            </button>
          </div>
          {/* Modal */}
          {isModalOpen && (
            <div className="absolute backdrop-blur-sm inset-0 bg-black bg-transparent ">
              <div className="flex items-center justify-center  my-5 md:my-12">
                <div className="bg-white p-2  md:p-4 rounded-3xl border-2 border-[#8A203D]">
                  <div className="flex justify-end">
                    <button
                      className="font-extrabold text-black text-sm w-[20px] "
                      onClick={closeModal}
                    >
                      X
                    </button>
                  </div>
                  <form action="#" onSubmit={handleSubmit}>
                    <div>
                      <div className="flex flex-col justify-center">
                        <p className=" text-[16px] md:text-[22px] text-[#BC1425] font-semibold">
                          Calculate Your Premium
                        </p>
                        <div className="flex flex-wrap justify-center md:justify-between  mt-4">
                          <div className="flex items-center">
                            <h1 className="text-[19px]  md:block font-semibold">
                              Principal Amount
                            </h1>
                          </div>
                          <div className=" md:mx-4">
                            <input
                              type="text"
                              name="principalAmount"
                              className="border p-2 md:p-3 w-80 rounded-xl"
                              required
                              placeholder="Enter Your Principal Amount"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="flex flex-wrap justify-center md:justify-between  mt-4">
                          <div className="flex items-center">
                            <h1 className="text-[19px]  md:block font-semibold">
                              Tenure (Years)
                            </h1>
                          </div>
                          <div className="md:mx-4">
                            <input
                              type="text"
                              name="tenure"
                              className="border  p-2 md:p-3 w-80 rounded-xl"
                              required
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="flex flex-wrap justify-center md:justify-between  mt-4">
                          <div className="flex items-center">
                            <h1 className="text-[19px]  md:block font-semibold">
                              Applied Interest
                            </h1>
                          </div>
                          <div className="md:mx-4">
                            <input
                              type="text"
                              name="appliedInterest"
                              className="border p-2 md:p-3  w-80 rounded-xl"
                              required
                              placeholder="%"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="flex justify-center md:justify-end m-2 md:m-4"
                        >
                          <img
                            src={"/assets/hdfc/image/Chapter2-childplan/calculate.png"}
                            alt=""
                            className="w-[120px] lg:w-[160px] "
                          />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
          {isOpens && (
            <div className="absolute backdrop-blur-sm  inset-0 z-1 ">
              <div className="flex  justify-center  my-5 md:my-12">
                <div className="bg-white p-2  md:p-4 rounded-3xl border-2 border-[#8A203D] ">
                  <div>
                    <div className="flex flex-col justify-center ">
                      <p className="text-[22px] text-[#BC1425] font-semibold text-center">
                        Your Earning{" "}
                      </p>
                      <div className="flex  justify-between mt-1">
                        <div className="flex items-center">
                          <h1 className="text-[15px] md:text-[19px] block font-semibold">
                            Total Outstanding Amount
                          </h1>
                        </div>
                        <div className="mx-2 md:mx-4">
                          <div className="border flex justify-center p-2 rounded-xl w-28 md:w-32">
                            <h1 className="text-xl ">
                              {totalOutstandingAmount}
                            </h1>
                          </div>
                        </div>
                      </div>
                      <div className="border-b my-3 text-start">
                        <h1 className="text-[18px] md:text-[26px] font-bold">
                          Summary
                        </h1>
                      </div>
                      <div className="mx-auto mt-2 items-start">
                        <div className="text-[16px] md:text-[18px] font-semibold">
                          <p className="flex justify-between">
                            <span>Premium Amount :</span>
                            <span className="px-10 font-normal">
                              {formData.principalAmount}
                            </span>
                          </p>
                          <p className="flex justify-between">
                            <span>Tenure Year :</span>
                            <span className="px-10 font-normal">
                              {formData.tenure} Years
                            </span>
                          </p>
                          <p className="flex justify-between">
                            <span>Payment Annual :</span>
                            <span className="px-10 font-normal">5 Years</span>
                          </p>
                          <p className="flex justify-between">
                            <span>Applied Interest :</span>
                            <span className="px-10 font-normal">
                              {formData.appliedInterest}%
                            </span>
                          </p>
                        </div>
                      </div>

                      <div className='flex justify-between mt-2 md:my-4'>
                        <div className='flex'>
                          <button
                            className='border bg-gradient-to-r from-[#6B2D52] via-[#8A203D] to-pink-800 text-white text-sm md:text-lg rounded-md py-1 px-2 md:px-4'
                            onClick={getHandleBack} >Back</button>
                        </div>
                        <div className='flex justify-end'>
                          <button
                            className='border bg-gradient-to-r from-[#6B2D52] via-[#8A203D] to-pink-800 text-white text-sm md:text-lg rounded-md  px-2 md:px-4'
                            onClick={getHandleOk}>Submit</button>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ChildPlan;
