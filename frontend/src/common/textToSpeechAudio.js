import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TextToSpeechAudio = ({ SpeechText }) => {
    const [audioContext, setAudioContext] = useState(new (window.AudioContext || window.webkitAudioContext)());
    const [source, setSource] = useState(null);

    useEffect(() => {
        handlePostRequest();
    }, [SpeechText]);

    const postData = {
        text: SpeechText,
        model_id: "eleven_multilingual_v2",
        voice_settings: {
            similarity_boost: 0.5,
            stability: 0.5,
        },
    };

    const handlePostRequest = async () => {
        try {
            const response = await axios.post(
                `https://api.elevenlabs.io/v1/text-to-speech/fczKPxiN0r7mINJ9tt1n`, postData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        accept: 'audio/mpeg',
                        'xi-api-key': '243bb131d08227653730c74239fd8adf',
                    },
                    responseType: 'arraybuffer',
                }
            );

            if (response.status === 200) {
                console.log('Request successful');
                playAudio(response.data);
            } else {
                console.log('Request failed with status:', response.status);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const playAudio = (audioData) => {
        if (audioContext.state === 'closed') {
            setAudioContext(new (window.AudioContext || window.webkitAudioContext)());
        }

        audioContext.decodeAudioData(audioData, (buffer) => {
            const audioSource = audioContext.createBufferSource();
            audioSource.buffer = buffer;

            audioSource.connect(audioContext.destination);
            audioSource.start(0);

            setSource(audioSource);
        });
    };

    return null; // or you can return some JSX if needed
};

export default TextToSpeechAudio;
