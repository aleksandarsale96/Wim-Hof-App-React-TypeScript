import React from 'react';
import { useState } from 'react';
import './Controls.css';

type Props = {
    setTimeInSeconds: Function
}

function Controls(props:Props) {
    const { setTimeInSeconds } = props;
    const [intervalId, setIntervalId] = useState<number>(0);

    const handlePlayButton = (e: object) => {
        const interval:any = setInterval(() => {
            setTimeInSeconds((previousState:number) => previousState + 1);
        }, 1000);

        setIntervalId(interval);
    }

    

    return(
        <div className='stopwatch-controls-container1'>
             <button onClick={handlePlayButton} type="button">Play</button>
        </div>
    );
}

export default Controls