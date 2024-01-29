import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { encrypt } from '../common/cryptoUtils';
import { useParams } from 'react-router-dom';
import { useClientsQuery } from '../features/hdfc/client/clientCampaignApiSlice';


const FormPage = () => {
    const { id } = useParams();
    console.log(id)

    let customerName = ''
    const { data: users, error, isLoading } = useClientsQuery(id)

    console.log(users?.[0]?.cusClientName); // 'Praveen'
    customerName = users?.[0]?.cusClientName || '';

    const encryptName = (name) => encrypt(name);

    return (
        <div className='flex justify-center mt-10 font-poppins'>

            <div class="w-[500px] ">

                <div class="w-full ">
                    <div class="flex justify-center mb-2">
                        <Link to={`/hdfc-player/${encryptName(customerName)}`}>
                            <img
                                className="w-[400px] lg:w-50 md:w-50 sm:w-50 hover:w-[420px]"
                                src="/assets/dice-button.png"  // Replace with the actual path to your image
                                alt="Interactive Video Link"
                            />
                        </Link>
                        {/* <a href="#" class="text-[30px] text-opacity-100 float-left hover:text-red-600 underline">Intractive Video Link</a> */}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default FormPage;
