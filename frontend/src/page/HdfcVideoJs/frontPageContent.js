
// export default InsurancePolicy;
import React, { useEffect, useState ,useRef} from "react";
import { decrypt } from "../../common/cryptoUtils";
import { handlePostRequest, playAudio } from "../../app/api/textToSpeechApi";

function InsurancePolicy(name) {
    const [audioContext, setAudioContext] = useState(new (window.AudioContext || window.webkitAudioContext)());
    const [source, setSource] = useState(null);
    const spokenRef = useRef(false);

    console.log(name)
    // Decrypt the name
    const decryptedName = "Ram"
    console.log(decryptedName)


    useEffect(() => {
        if (!spokenRef.current) {
            // Check if the element with ID 'text-to-speech-span1' exists
            const spanElement = document.getElementById('text-to-speech-span1');
            if (spanElement) {
                const spanContent = spanElement.innerText;
                console.log(spanContent);
                // Now you can perform your operations with spanContent
                handlePostRequest(`${spanContent + decryptedName} `, (audioData) => {
                    playAudio(audioData, audioContext, setAudioContext, setSource);
                });
            }
        }
    }, [spokenRef]);
    return (
        <>
            <div>
                <div
                    className="absolute inset-0 overflow-auto md:overflow-hidden"
                    style={{ backgroundImage: 'url(/assets/hdfc/image/bg-insurance.jpg)' }}
                >
                    <div className="">
                        <div className="p-1 my-52 bg-cover bg-center ">
                            <div>
                                <span className="spanCss1 text-black" id="text-to-speech-span1">Hello</span>
                                <span className="spanCss1 text-black" id="text-to-speech-span2"> {decryptedName} </span><br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default InsurancePolicy;
