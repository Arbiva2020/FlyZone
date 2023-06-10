import React, {useRef, useState} from 'react'
import './DemoPage.css'
import Header from '../../components/Header/Header'
import Media1 from '../../assets/Media1.mp4'

const DemoPage = () => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [progress, setProgress] = useState ()
    const videoRef = useRef(null)

    const handleTogglePlay = ()=> {
        if(isPlaying) {
            videoRef.current.pause();
        }else{
            videoRef.current.play()
        }
        setIsPlaying(!isPlaying)
    };

    const handleProgress = ()=>{
        const duration = videoRef.current.duration;
        const currentTime = videoRef.current.currentTime;
        const progress = (currentTime/duration) * 100;
        setProgress(progress)
    }

  return (
    <div className='demo_main'>
        <Header />
        <div className='demo_headline'>
            DemoPage
        </div>
        <div className='demo_show'>
            <video 
                className='demo_video'
                ref={videoRef}
                onTimeUpdate={handleProgress}
            >
            <source src={Media1} type="video/mp4"/>
            </video>
            <div>
                <button onClick={handleTogglePlay}>
                    {isPlaying ? "Pause" : "Play"}
                </button>
                <progress value={progress} max="100" />
            </div>
        </div>
    </div>
  )
}

export default DemoPage