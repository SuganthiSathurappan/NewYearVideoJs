import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Buffer } from 'buffer';
import { useNavigate } from 'react-router-dom'; // Import useHistory hook


const YourComponent = () => {
  const [audioBuffer, setAudioBuffer] = useState(null);
  // const [audioContext, setAudioContext] = useState(null);
  const [audioContext, setAudioContext] = useState(new (window.AudioContext || window.webkitAudioContext)());
  const [source, setSource] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the page is being refreshed
    const navigationEntries = window.performance.getEntriesByType("navigation");
    if (navigationEntries.length > 0 && navigationEntries[0].type === 'reload') {
      // Page is being refreshed, navigate to MainFormPage.js
      navigate('/');
    }
  }, [navigate]);

  const postData = {
    text: "Hi suganthi,  welcome to you",
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
      )

      if (response.status === 200) {
        console.log('Request successful');
        playAudio(response.data);
        // const audioBuffer = Buffer.from(response.data, 'binary')
        // const base64Audio = audioBuffer.toString('base64')
        // const audioDataURI = `data:audio/mpeg;base64,${base64Audio}`
        // console.log(audioDataURI)
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

  const stopAudio = () => {
    if (source) {
      source.stop();
    }
  };

  return (
    <div>
      <button onClick={handlePostRequest}>Speak</button>
      <button onClick={stopAudio}>Stop</button>
    </div>
  );
};

export default YourComponent;
