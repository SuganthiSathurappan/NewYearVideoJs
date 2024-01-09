import React, { useState } from 'react';
import './demoCss.css'; // Import your CSS file

const YourComponent = () => {
    const [textNameValue, setTextNameValue] = useState('');
    const [textMobileValue, setTextMobileValue] = useState('');
    const [textEmailValue, setTextEmailValue] = useState('');
    const [textAddressValue, setTextAddressValue] = useState('');
    const [textBtnValue, setTextBtnValue] = useState('');
    const [inputFormVisible, setInputFormVisible] = useState(false);
    const [inputNameVisible, setInputNameVisible] = useState(false);
    const [inputMobileVisible, setInputMobileVisible] = useState(false);
    const [inputEmailVisible, setInputEmailVisible] = useState(false);
    const [inputAddressVisible, setInputAddressVisible] = useState(false);
    const [inputBtnVisible, setInputBtnVisible] = useState(false);



    const handleInputNameChange = (e) => {
        setInputFormVisible(true)
        setInputNameVisible(true)
        const value = e.target.value;
        setTextNameValue(value);
    };

    const handleInputMobileChange = (e) => {
        setInputFormVisible(true)
        setInputMobileVisible(true)
        const value = e.target.value;
        setTextMobileValue(value);
    };
    const handleInputEmailChange = (e) => {
        setInputFormVisible(true)
        setInputEmailVisible(true)
        const value = e.target.value;
        setTextEmailValue(value);
    };
    const handleInputAddressChange = (e) => {
        setInputFormVisible(true)
        setInputAddressVisible(true)
        const value = e.target.value;
        setTextAddressValue(value);
    };
    const handleInputBtnChange = (e) => {
        setInputFormVisible(true)
        setInputBtnVisible(true)
        const value = e.target.value;
        setTextBtnValue(value);
    };

    return (
        <div className="container">
            <div className="left-side">
                <form>
                    <div className=" transition-all duration-1000 ease-in-out -ml-6 gift1Formeventcss ">

                        <div className="border-[#669ef3] px-4 py-4 bg-gray-500 border-4 rounded-lg  gift1VoucherFormcss">
                            <form className='h-full'>
                                {/* Email input */}
                                <div className=" mb-2 " data-te-input-wrapper-init>
                                    Name  <input
                                        className={`w-full px-2 py-2 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 
                                            text-sm focus:outline-none focus:border-2 focus:outline bg-gray-100 text-gray-600 focus:border-white`}
                                        type="text"

                                        name='name' value={textNameValue} onChange={handleInputNameChange}
                                    />
                                </div>

                                {/* Password input */}
                                <div className="relative mb-2" data-te-input-wrapper-init>
                                    Mobile   <input
                                        className={`w-full px-2 py-2 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 
                                        text-sm focus:outline-none focus:border-2 focus:outline bg-gray-100 text-gray-600 focus:border-white`}
                                        type="text"
                                        value={textMobileValue}
                                        name='mobile'
                                        onChange={handleInputMobileChange}
                                    />
                                </div>
                                {/* Password input */}
                                <div className="relative mb-2" data-te-input-wrapper-init>
                                    Email <input
                                        className="w-full px-2 py-2 rounded-lg font-medium border-2 border-transparent
                                               placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline"
                                        type="text"
                                        value={textEmailValue}
                                        name='email'
                                        onChange={handleInputEmailChange}
                                    />
                                </div>
                                {/* Password input */}
                                <div className="relative mb-2" data-te-input-wrapper-init>
                                    Address   <textarea
                                        className="w-full px-2 h-16 rounded-lg font-medium border-2 border-transparent
                                                  placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline"
                                        type="text"
                                        value={textAddressValue}
                                        name='address'
                                        onChange={handleInputAddressChange}
                                    />
                                </div>
                                <div className="relative mb-2" data-te-input-wrapper-init>
                                    Button Name :    <input
                                        className="w-full px-2 py-2 rounded-lg font-medium border-2 border-transparent
                                               placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline"
                                        type="text"
                                        value={textBtnValue}
                                        name='btnSubmit'
                                        onChange={handleInputBtnChange}
                                    />
                                </div>

                                <div className="relative  text-center" >

                                    <button
                                        className=" px-3 py-1  border-3 border-[#669ef3] text-[20px] text-white rounded-lg bg-[#2f49af] text-center 
                                   cursor-pointer no-underline focus:shadow-outline focus:outline-none"
                                    >
                                        Apply
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>


                </form>
            </div>
            <div className="right-side">

                <form>
                    {inputFormVisible &&
                        <div className=" transition-all duration-1000 ease-in-out -ml-6 gift1Formeventcss ">
                            <div className="border-[#669ef3] px-4 py-4 bg-gray-500 border-4 rounded-lg  gift1VoucherFormcss">
                                <form className='h-full'>
                                    {/* Email input */}
                                    {inputNameVisible &&
                                        <div className=" mb-2 " data-te-input-wrapper-init>
                                            <input className={`w-full px-2 py-2 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 
                                         text-sm focus:outline-none focus:border-2 focus:outline bg-gray-100 text-gray-600 focus:border-white`}
                                                type="text"
                                                placeholder={textNameValue}
                                            />
                                        </div>
                                    }

                                    {inputMobileVisible &&
                                        <div className="relative mb-2" data-te-input-wrapper-init>
                                            <input
                                                className="w-full px-2 py-2 rounded-lg font-medium border-2 border-transparent
                                      placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline"

                                                type="tel"
                                                placeholder={textMobileValue}
                                            />
                                        </div>
                                    }
                                    {inputEmailVisible &&
                                        <div className="relative mb-2" data-te-input-wrapper-init>
                                            <input
                                                className="w-full px-2 py-2 rounded-lg font-medium border-2 border-transparent
                                            placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline"
                                                type="tel"
                                                placeholder={textEmailValue}
                                            />
                                        </div>
                                    }
                                    {inputAddressVisible &&
                                        <div className="relative mb-3" data-te-input-wrapper-init>
                                            <textarea
                                                className="w-full px-2 h-16 rounded-lg font-medium border-2 border-transparent
                                               placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline"
                                                type="email"
                                                placeholder={textAddressValue}
                                            />
                                        </div>
                                    }
                                    {inputBtnVisible &&
                                        <div className="relative  text-center " >
                                            <button
                                                className=" px-3 py-1  border-2 border-[#669ef3] text-[20px] text-white rounded-lg bg-[#2f49af] text-center 
                                cursor-pointer no-underline focus:shadow-outline focus:outline-none"
                                            >
                                                {textBtnValue}
                                            </button>
                                        </div>
                                    }
                                </form>
                            </div>
                        </div>
                    }

                </form>
            </div>
        </div>
    );
};

export default YourComponent;
