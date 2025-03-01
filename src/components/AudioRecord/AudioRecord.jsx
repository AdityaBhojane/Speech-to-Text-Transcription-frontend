import { useState, useRef } from "react";

const AudioRecord = () => {
  const [recording, setRecording] = useState(false);
  const [audioURL, setAudioURL] = useState("");
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const startRecording = async () => {
    try {
      if (audioURL) {
        setAudioURL("");
      }
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/wav",
        });
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioURL(audioUrl);
        audioChunksRef.current = [];
      };

      mediaRecorder.start();
      mediaRecorderRef.current = mediaRecorder;
      setRecording(true);
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setRecording(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center  bg-gray-900 text-white p-4">
      <div className="space-x-4 flex items-center ">
      <h2 className="text-2xl font-semibold mb-4">Audio Recorder</h2>
        {!recording ? (
          <button
            onClick={startRecording}
            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white"
          >
            🎤 Start Recording
          </button>
        ) : (
          <button
            onClick={stopRecording}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white"
          >
            ⏹ Stop Recording
          </button>
        )}
      </div>

      <div className="w-full items-center justify-center">
      {audioURL && (
          <div className="mt-6">
            <h3 className="text-lg mb-2">Recorded Audio:</h3>
            <audio controls className="inline">
              <source src={audioURL} type="audio/wav" />
              Your browser does not support the audio element.
            </audio>
            <br />

          </div>
        )}
      </div>
    </div>
  );
};

export default AudioRecord;
