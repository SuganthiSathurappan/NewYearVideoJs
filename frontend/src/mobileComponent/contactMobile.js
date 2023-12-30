import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const ContactForm = ({ handleTryOff }) => {
    const [displayContact, setDisplayContact] = useState(true);
    const [displayForm, setDisplayForm] = useState(false);
    const navigate = useNavigate()

    const handleContactUs = () => {
        setDisplayForm(true)

        setDisplayContact(false)
    }
    const handleSubmit = () => {
        navigate('/')
    }
    return (
        <div >
            <div className="animate-pulse">
                <span className="text-md md:text-[3cqw] text-[#ffdf60] ">
                    Feel free to contact
                </span>

                <div className="flex flex-col  justify-center text-center mt-3 ">
                    <span className="text-md md:text-[4.5cqw]  lg:py-0 md:py-2 sm:py-1">
                        +65 9206 6938  </span>
                    <span className="text-md md:text-[3.5cqw] ">
                        sales@techtist.com
                    </span>
                </div>
            </div>
        </div>



    )

}
export default ContactForm;