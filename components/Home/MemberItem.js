import React from 'react'
import classes from './MemberItem.module.scss'
import Image from 'next/image'
import Slide from 'react-reveal/Slide';

const MemberItem = ({el}) => {
    // style={{flexDirection: el.direction}}
    return (
        <div className={classes[`member-item`]}>
            <Slide left>
            <span className={classes[`member-item__name`]}>
                {el.title}
            </span>
            <span className={classes[`member-item__photo`]}>
                <Image src={el.src} alt={el.title} width="300px" height="300px" priority={true}/>
            </span>
            </Slide>
        </div>
    )
}

export default MemberItem
