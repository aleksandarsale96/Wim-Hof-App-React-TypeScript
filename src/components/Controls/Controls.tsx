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

    const handleStopButton = (e:any) => {
        e.preventDefault();
        console.log("clicked");
        clearInterval(intervalId);
    }

    const handleReset = (e:any) => {
        e.preventDefault();
        console.log("clicked");
        clearInterval(intervalId);
        setTimeInSeconds(0);
    }

    return(
        <div className='w-full h-screen absolute z-10'>
            <div className='stopwatch-controls-container1'>
                <button onClick={handlePlayButton} type="button"></button>
            </div>
            {/* <div className="stopwatch-controls-container">
                <button onClick={handleStopButton} type="button">Finish</button>
                <button className='hidden' onClick={handleReset} type="button">Reset</button>
            </div> */}
        </div>
    );
}

export default Controls