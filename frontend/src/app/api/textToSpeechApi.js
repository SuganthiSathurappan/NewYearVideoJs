import axios from 'axios';

export const handlePostRequest = async (spanContent, playAudio) => {
    try {
        const postData = {
            text: spanContent,
            model_id: "eleven_multilingual_v2",
            voice_settings: {
                stability: 1.0, // Stability: 100%
                similarity_boost: 0.65, // Clarity + Similarity Enhancement: 65%
                style_exaggeration: 0.55 // Style Exaggeration: 55%
            },
        };

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
            console.log('Request successful');
            if (playAudio) {
                playAudio(response.data);
            }
        } else {
            console.log('Request failed with status:', response.status);
        }
    } catch (error) {
        console.error('Error:', error);
    }
};

export const playAudio = (audioData, audioContext, setAudioContext, setSource) => {
    console.log(audioContext.state)
    if (audioContext.state === 'closed') {
        setAudioContext(new (window.AudioContext || window.webkitAudioContext)());
    }

    audioContext.decodeAudioData(audioData, (buffer) => {
        const audioSource = audioContext.createBufferSource();
        audioSource.buffer = buffer;
        if (audioContext.state === 'suspended'  || audioSource.state === 'started') {          
            audioSource.disconnect(); 
        } else {
            audioSource.connect(audioContext.destination);
            audioSource.start(0);
        }
        setSource(audioSource);
    });


};
