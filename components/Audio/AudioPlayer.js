import React, {useRef, useState} from 'react'
import classes from './AudioPlayer.module.scss'
import Image from 'next/image'

const AudioPlayer = (props) => {
    const [songIndex, setSongIndex] = useState(0)
    const [playState, setPlayState] = useState(false)
    const audioRef = useRef(null)
    // const [divIsShown, setDivIsShown] = useState(false)
    // const showDivRef = useRef(null)


    let songImage = props.audios[songIndex].src;
    let songRecord = props.audios[songIndex].mp3;

    const playHandler = () => {
        audioRef.current.play();
        setPlayState(true)
    } 

    const pauseHandler = () => {
        audioRef.current.pause();
        setPlayState(false)
    }

    const handleNextSong = () => {
        setPlayState(true)
        if (songIndex < (props.audios.length - 1)) {
        setSongIndex((prevState) => {
            return prevState + 1
        });
        } else {
        setSongIndex(0);
        }
        setTimeout(() => {
            audioRef.current.play();   
        }, 100);
    }

    const handlePrevSong = () => {
        setPlayState(true)
        if (songIndex === 0) {
            setSongIndex(props.audios.length - 1)
        } else {
            setSongIndex((prevState) => {
                return prevState - 1
            })
        }
        setTimeout(() => {
            audioRef.current.play();   
        }, 100);
    }


    return (
        <div className={classes.playerWrapper}>
            <div className={classes.navigation}>
                <div className={classes.navigation__left}></div>
                <div className={classes.navigation__right}>
                    <span onClick={handlePrevSong}>Prev</span>
                    {!playState && <span onClick={playHandler}>Play</span>}
                    {playState && <span onClick={pauseHandler}>Pause</span>}
                    <span onClick={handleNextSong}>Next</span>
                </div>

                <audio ref={audioRef} src={songRecord}></audio>

                <div className={`${classes.disk} ${playState ? classes.diskIsActive : ''}`}>
                    <Image 
                        src={songImage} 
                        alt="song poster" 
                        width="75" 
                        height="75"
                        layout="responsive"
                        priority={true}
                        />
                </div>

                {/* <div ref={showDivRef} className={`${classes.show} ${divIsShown && classes.isActive}`}></div> */}
            </div>
        </div>
    )
}

export default AudioPlayer
