import React, { useEffect, useRef, useState } from 'react';
import calculateTimer from '../Helper/CalculateTimer';
import Controls from '../components/Controls/Controls';
import '../Main.css';


export const Breath: React.FC<{ src: string }> = ({ src }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    const audioElement = audioRef.current;

    if (audioElement) {
      audioElement.autoplay = true;
      audioElement.volume = volume;
      setIsPlaying(true);
    }

    return () => {
      console.log("123");
    };
  }, [volume]);

  const handlePlayPause = () => {
    const audioElement = audioRef.current;

    if (audioElement) {
      if (isPlaying) {
        audioElement.pause();
      } else {
        audioElement.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
  };
  const [timeInSeconds, setTimeInSeconds] = useState<number>(0);
    const [timerArray, setTimerArray] = useState<Array<number|string>>([]);

    useEffect(() => {

        let timeArray: Array<number|string> = calculateTimer(timeInSeconds);
        setTimerArray(timeArray);
    }, [timeInSeconds]);
    
  return (
    <div className='flex flex-col w-full h-screen'>
      {/* KORAK 1 */}
      <div className="items-center justify-center h-[50px] bg-white text-green mt-48 hidden">
          <audio ref={audioRef} className="w-full">
              <source src='inOut.mp3' type="audio/mpeg" />
              Your browser does not support the audio element.
          </audio>
          <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
          <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
          />
      </div>
        {/* KORAK 2 */}
        <div className='pt-48'>
        <div className='flex flex-col w-full justify-center items-center'>
            <div className='flex flex-row'>
                <section className='w-full flex justify-center items-center time-container'>
                    <p className='timer-text'>{timerArray[0]}</p>
                    <span className='text-white text-[5rem]'>:</span>
                    <p className='timer-text'>{timerArray[1]}</p>
                    <span className='text-white text-[5rem]'>:</span>
                    <p className='timer-text'>{timerArray[2]}</p>
                </section>
            </div>
            <div className='w-full'>
              <Controls setTimeInSeconds={setTimeInSeconds} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Breath;