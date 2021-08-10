import React from 'react'
import VideoItem from './VideoItem'
import classes from './VideoList.module.scss'

const VideoList = (props) => {
    return (
        <div className={classes['video-list']}>
            <p>Видео с концертов</p>
            <hr />
            <ul>
                {props.videos.map(el => {
                    return <VideoItem key={el.id} el={el}/>
                })}
            </ul>
        </div>
    )
}

export default VideoList
