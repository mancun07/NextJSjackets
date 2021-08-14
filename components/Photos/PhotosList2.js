import * as React from "react";
import { useState, useRef } from "react";
import { motion, useDomEvent } from "framer-motion";
import classes from './PhotosList2.module.scss'

const transition = {
  type: "spring",
  damping: 25,
  stiffness: 120
};

export const PhotosList2 = (props) => {
  const [isOpen, setOpen] = useState(false);

  useDomEvent(useRef(window), "scroll", () => isOpen && setOpen(false));

  return (
      <>
    <div className={`${classes['image-container']} ${isOpen ? "open" : ""}`}>
     {props.photos.map(el => {
      <motion.div
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={transition}
        className="shade"
        onClick={() => setOpen(false)}
      />
      <motion.img
        src={el.src}
        alt={"Bimhuis in Amsterdam"}
        onClick={() => setOpen(!isOpen)}
        layout
        transition={transition}
      />
     })}
    </div>
    </>
  );
};

PhotosList2.propTypes = {
    photos: PropTypes.array
  };

export default PhotosList2
