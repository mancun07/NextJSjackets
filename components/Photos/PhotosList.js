import React, {Fragment, useState, useRef, useEffect} from 'react'
import classes from './PhotosList.module.scss'
import {motion} from 'framer-motion'
import PropTypes from 'prop-types';
import Image from 'next/image'


const PhotosList = (props) => {

       const [overlayOpen, setOverlayOpen] = useState(false)
       const [imageSrc, setImageSrc] = useState('')

       const showOverlay = (id) => {      
            let imageEl = props.photos.find(el => el.id === id)
            let imgSrc = imageEl.src
            setImageSrc(imgSrc)
            setOverlayOpen(true)  
       }

       const closeOverlay = () => {
            setImageSrc('')
            setOverlayOpen(false)  
       }

    return (
        <Fragment>
        <motion.div className={classes['photos-list']}    
                initial={{x: '-100vw'}}
                animate={{x: 0}}
                transition={{duration: 1, type: 'spring'}}>
            {props.photos.map(el => {
                return <div                 
                key={el.id} onClick={() => showOverlay(el.id)} >
                <motion.img
                src={el.src} 
                alt={el.title}
                whileHover={{
                    scale: 1.1,
                    rotateZ: 5,
                    boxShadow: "0px 0px 8px rgb(255,255,255)"  
                }}
                />
                </div>
            })}
        </motion.div>
        {overlayOpen && ( 
            <Fragment>
            <div className={classes.backdrop}>
                  <span className={classes.close} onClick={closeOverlay}>X</span>
            </div>
            <div className={classes.modal}>
                <Image src={imageSrc} alt={'band members'} width="200" height="200"
                    layout="responsive"
                    priority={true}
                    />
            </div>
            </Fragment> )
            }
        </Fragment>
    )
}

PhotosList.propTypes = {
    photos: PropTypes.array
  };

export default PhotosList
