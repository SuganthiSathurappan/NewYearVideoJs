import React, { useState, useRef } from "react";
import { useAddUserMutation } from '../features/hdfc/client/clientApiSlice';
import { useAddUserCampaignLinkMutation } from "../features/hdfc/client/clientCampaignApiSlice";

export default function TimelineEditor() {
    const [userName, setName] = useState("");
    const [userEmail, setEmail] = useState("");
    const [userMobile, setPhoneNumber] = useState("");
    const [emailValid, setEmailValid] = useState(true);
    const [phoneValid, setPhoneValid] = useState(true);
    const [linkGenerated, setLinkGenerated] = useState(false);
    const [generatedLink, setGeneratedLink] = useState("");
    const linkRef = useRef(null);

    const [addUser] = useAddUserMutation();
    const [addUserCampaignLink] = useAddUserCampaignLinkMutation();

    const customerId = 1
    const voiceId = 1
    let userId = null
    const campaignId = 1
    const userCampaignLink = 'https://media.skie.ai/hdfc/'
    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        // Email validation
        setEmailValid(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value));
    };

    const handlePhoneChange = (e) => {
        const value = e.target.value;
        setPhoneNumber(value);
        // Phone number validation
        setPhoneValid(/^\d{10}$/.test(value));
    };

    const generateLink = (generatedLink) => {
        // Generate a unique link, for example, combining name, email, and phone number
        // const generatedLink = `https://example.com/${userName}/${userEmail}/${userMobile}`;
        setGeneratedLink(generatedLink);
        setLinkGenerated(true);
    };

    const copyLinkToClipboard = () => {
        // Select the link text
        linkRef.current.select();
        // Copy the selected text
        document.execCommand("copy");
        // Deselect the text
        window.getSelection().removeAllRanges();
        // Alert the user
        alert("Link copied to clipboard!");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            userName,
            userEmail,
            userMobile,
            customerId
        }
        console.log(formData)
        const { data: users, error, isLoading } = await addUser(formData)
        console.log(users.cus_client_id);
        userId = users.cus_client_id

        if (users) {
            setName('')
            setEmail('')
            setPhoneNumber('')
            const campaignData = {
                userCampaignLink,
                userId,
                campaignId,
                voiceId
            }
            const { data: users, error, isLoading } = await addUserCampaignLink(campaignData)
            console.log(users.cus_client_link)
            // Generate the link
            generateLink(users.cus_client_link);
        } else {
            console.error("Error:", error);
            // Handle error as needed
        }
    };
    return (

        <>
            <div class="flex  items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
                <div class="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
                    <div class="md:p-4 md:py-6 text-white w-96 md:w-80 md:flex-shrink-0 md:flex md:flex-col lg:items-center lg:justify-evenly">
                        <div className="md:w-96">
                            <img src={"/assets/hdfc/image/signInImage.jpg"} alt="signup" className="hidden md:block" />
                        </div>
                    </div>
                    <div class="p-5 bg-white md:flex-1">
                        <h3 class="my-1 text-2xl font-semibold text-gray-700">
                            HDFC Life Campaign
                        </h3>
                        <h5 class="my-1 text-lg font-semibold text-gray-700">
                            User Details
                        </h5>
                        <form
                            action="#"
                            onSubmit={handleSubmit}
                            class="flex flex-col space-y-5"
                        >
                            <div class="flex flex-col space-y-1">
                                <label for="name" class="text-sm font-semibold text-gray-500">
                                    Name<span className="text-red-500 text-[12px]">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={userName}
                                    onChange={(e) => setName(e.target.value)}
                                    autoFocus
                                    required
                                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                />
                            </div>
                            <div class="flex flex-col space-y-1">
                                <label for="email" class="text-sm font-semibold text-gray-500">
                                    Email address
                                    <span className="text-red-500 text-[12px]">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={userEmail}
                                    onChange={handleEmailChange}
                                    required
                                    autoFocus
                                    className={`px-4 py-2 transition duration-300 border ${emailValid ? "border-gray-300" : "border-red-500"
                                        } rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200`}
                                />
                                {!emailValid && (
                                    <p className="text-red-500">
                                        Please enter a valid email address.
                                    </p>
                                )}
                            </div>
                            <div class="flex flex-col space-y-1">
                                <label for="number" class="text-sm font-semibold text-gray-500">
                                    Phone Number
                                </label>
                                <input
                                    type="text"
                                    id="number"
                                    value={userMobile}
                                    onChange={handlePhoneChange}
                                    autoFocus
                                    className={`px-4 py-2 transition duration-300 border ${phoneValid ? "border-gray-300" : "border-red-500"
                                        } rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200`}
                                />
                                {!phoneValid && (
                                    <p className="text-red-500">
                                        Please enter a 10-digit phone number.
                                    </p>
                                )}
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                                >
                                    Generate Link
                                </button>
                            </div>
                        </form>
                        {linkGenerated && (
                            <div className="mt-4 space-x-3">
                                <input
                                    ref={linkRef}
                                    type="text"
                                    readOnly
                                    value={generatedLink}
                                    className="px-4 py-2 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                />
                                <button
                                    onClick={copyLinkToClipboard}
                                    className="mt-2 px-4 py-2 text-sm font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                                >
                                    Copy Link
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}