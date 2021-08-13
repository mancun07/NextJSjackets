import React from 'react'
import classes from './PhotosList.module.scss'
import {motion} from 'framer-motion'
import PropTypes from 'prop-types';


const PhotosList = (props) => {
    return (
        <div className={classes['photos-list']}>
            {props.photos.map(el => {
                return <motion.img
                initial={{x: '-100vw'}}
                animate={{x: 0}}
                transition={{duration: 1, type: 'spring'}}
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

PhotosList.propTypes = {
    photos: PropTypes.array
  };

export default PhotosList
