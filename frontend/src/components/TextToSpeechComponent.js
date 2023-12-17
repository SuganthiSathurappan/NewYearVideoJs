import React, { useEffect, useRef } from 'react';

const TextToSpeechComponent = () => {
  const spokenRef = useRef(false);

  useEffect(() => {
    const textToAudio = () => {
      let spanContent = document.getElementById('text-to-speech-span').innerText;

      let speech = new SpeechSynthesisUtterance();
      speech.lang = 'en-ZA';

      speech.text = spanContent;
      speech.volume = 1;
      speech.rate = 1;
      speech.pitch = 1;

      // Check if speech synthesis is already speaking, and cancel it if necessary
      if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
      }

      window.speechSynthesis.speak(speech);

      // Set the spoken flag to true
      spokenRef.current = true;
    };

    // Speak the initial content of the span when the component mounts
    if (!spokenRef.current) {
      textToAudio();
    }
  }, []);

  return (
    <div>
      <h2>JavaScript Text to Speech</h2>
      <div>
        {/* Replace this with your actual content */}
        <span id="text-to-speech-span">Hi John</span>
      </div>
      <br />
      <div>
        <small>
          <b>NOTE:</b> Text-to-speech will be triggered when the component mounts.
        </small>
      </div>
    </div>
  );
};

export default TextToSpeechComponent;
