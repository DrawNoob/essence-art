import React, { useState, useRef } from 'react';
import './../Styles/audio.css';

export default function Audio() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const togglePlayPause = () => {
        if (audioRef.current.paused) {
            audioRef.current.muted = false;
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
        setIsPlaying(!isPlaying);
    };
    

    const handleAudioEnded = () => {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
        setIsPlaying(true);
    };

    
    return (
        <>
            <div className="music-player">
                <button
                    id="play-pause-button"
                    className={isPlaying ? 'pause' : 'play'}
                    onClick={togglePlayPause}
                    style={{
                        backgroundImage: `url(${isPlaying ? 'Assets/pause.gif' : 'Assets/pause.gif'})`,
                        opacity: isPlaying ? 0.3 : 0.8,
                    }}
                    title={isPlaying ? 'Sound Off' : 'Sound On'}>
                </button>
                <audio
                    id="audio"
                    src="Assets/Adda.mp3"
                    autoPlay={true}
                    ref={audioRef}
                    onEnded={handleAudioEnded}
                ></audio>
            </div>
        </>
    );
}
