import React from 'react';
import classes from './Backdrop.module.scss'

const Backdrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onClick}>
        {props.children}
    </div>
  ) 
}

export default Backdrop;
