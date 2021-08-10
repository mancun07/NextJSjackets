import React from 'react'
import classes from './VideoItem.module.scss'

const VideoItem = ({el}) => {
    return (
        <li className={classes['video-item']}>
            <p>{el.title}</p>
            <p>{el.date}</p>
            <p>{el.venue}</p>
            <iframe 
            src={el.url} 
            frameborder="0"
            width="789"
            height="444"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            >    
            </iframe>
        </li>
    )
}

export default VideoItem

// id: v4(),
// url:
//   "https://cors-anywhere.herokuapp.com/https://www.youtube.com/embed/HC3o7_FMA0Y?enablejsapi=1&origin=http://localhost:3000",
// title: "Better way",
// date: "04/02/2018",
// venue: "Emergenza, Санкт-Петербург, 2-й этап в Opera Concert Hall",
// },

