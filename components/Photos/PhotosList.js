import React from 'react'
import classes from './PhotosList.module.scss'
import {motion} from 'framer-motion'
// import Image from 'next/image'

const PhotosList = (props) => {
    return (
        <div className={classes['photos-list']}>
            {props.photos.map(el => {
                return <motion.img
                initial={{y: '-100vw'}}
                animate={{y: 0}}
                transition={{duration: 0.5, type: 'spring'}}
                whileHover={{
                    scale: 1.1,
                    rotateZ: 5,
                    boxShadow: "0px 0px 8px rgb(255,255,255)"  
                }}
               
                key={el.id} 
                src={el.src} 
                alt={el.title}
                />
            })}
        </div>
    )
}

export default PhotosList
