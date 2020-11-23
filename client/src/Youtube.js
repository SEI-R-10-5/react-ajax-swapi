

import React from 'react';
import YouTube from 'react-youtube';

export default function Youtube() {
    return (

    <YouTube
        videoId={"https://www.youtube.com/watch?v=Aja1pCUZPso"}                  // defaults -> null
        id={string}                       // defaults -> null
        className={string}                // defaults -> null
        containerClassName={string}       // defaults -> ''
        opts={obj}                        // defaults -> {}
        onReady={func}                    // defaults -> noop
        onPlay={func}                     // defaults -> noop
        onPause={func}                    // defaults -> noop
        onEnd={func}                      // defaults -> noop
        onError={func}                    // defaults -> noop
        onStateChange={func}              // defaults -> noop
        onPlaybackRateChange={func}       // defaults -> noop
        onPlaybackQualityChange={func}    // defaults -> noop
/>

    )
}
