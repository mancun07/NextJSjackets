import React from 'react'
import AudioPlayer from '../../components/Audio/AudioPlayer'

const DummyAudios = [
    {
        id: '1', src: '/Annie.jpg', mp3:'./Annie.mp3', title: 'Annie (Leather Jackets)'
    },
    {
        id: '2', src: '/It_was_you.jpg', mp3:'./It_was_you.mp3', title: 'It was you (Leather Jackets)'
    },
    {
        id: '3', src: '/Slave.jpg', mp3:'./Slave.mp3', title: 'Slave (Leather Jackets)'
    },

]

const AudioPage = () => {
    return (
        <div className="container">
            <AudioPlayer audios={DummyAudios}/>
        </div>
    )
}

export default AudioPage
