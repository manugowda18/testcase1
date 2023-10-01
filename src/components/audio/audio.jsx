import { useState, useEffect, useRef } from 'react';
import "./audio.css";
"@import url('https://fonts.googleapis.com/css2?family=Handjet:wght@600&family=Roboto:wght@400;500&family=Tektur&display=swap');"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons';
import { faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons';

import { audioloop , audioloop1, MusicImage } from "../../assets";

const AudioLoop = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    const audioRef = useRef(null);

    useEffect(() => {
        const audioElement = audioRef.current;

        const playAudio = () => {
            if (isPlaying) {
                audioElement.play().catch(error => {
                    // Autoplay was prevented. Handle the error here if needed.
                });
            }
        };

        const handleVisibilityChange = () => {
            if (document.hidden) {
                audioElement.pause();
            } else {
                playAudio();
            }
        };

        document.addEventListener('mousedown', playAudio);
        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            document.removeEventListener('mousedown', playAudio);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, [isPlaying]);

    const toggleAudio = () => {
        const newIsPlaying = !isPlaying;
        setIsPlaying(newIsPlaying);

        if (!newIsPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(error => {
                // Autoplay was prevented. Handle the error here if needed.
            });
        }
    };


    const iconStyle = {
        fontSize: '30px',
        color:"black",
    };

    return (
        <div className='audio-file'>
            <img src={MusicImage} alt="" />
            <audio ref={audioRef} loop>
                <source src={audioloop1} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            <div className='audiobutton'>
                <button className="button-audio" onClick={toggleAudio}>
                    {isPlaying ? (
                        <FontAwesomeIcon icon={faPauseCircle} style={iconStyle} />
                    ) : (
                        <FontAwesomeIcon icon={faPlayCircle} style={iconStyle} />
                    )}

                </button>
                <h1>.....</h1>
            </div>
            
            {/* <span style={textStyle}>Click!!</span> */}
        </div>
    );
};

export default AudioLoop;



