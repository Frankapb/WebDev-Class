import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function RadioPlayer({radioUrl}) {
    return (
        <div>
            <AudioPlayer
                autoPlay
                src={radioUrl}
                onPlay={e => console.log("onPlay")}
            // other props here
            />
        </div>
    )
}

export default RadioPlayer