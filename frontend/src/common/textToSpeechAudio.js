import React, { useEffect } from 'react';
import axios from 'axios';

const TextToSpeechAudio = (SpeechText) => {
    useEffect(() => {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
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
                    `https://api.elevenlabs.io/v1/text-to-speech/fczKPxiN0r7mINJ9tt1n`, 
                    postData,
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
                    console.log('Request successful', response.data);
                    playAudio(response.data, audioContext);
                } else {
                    console.log('Request failed with status:', response.status);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        handlePostRequest();

        return () => {
            // Clean up by closing the audio context
            audioContext.close().then(() => console.log('Audio context closed.'));
        };
    }, [SpeechText]);

    const playAudio = (audioData, audioContext) => {
        if (audioContext.state === 'closed') {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }

        audioContext.decodeAudioData(audioData, (buffer) => {
            const audioSource = audioContext.createBufferSource();
            audioSource.buffer = buffer;

            audioSource.connect(audioContext.destination);
            audioSource.start(0);
        });
    };
};
