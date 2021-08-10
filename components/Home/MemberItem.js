import React from 'react'
import classes from './MemberItem.module.scss'
import Image from 'next/image'

const MemberItem = ({el}) => {
    return (
        <div style={{flexDirection: el.direction}} className={classes[`member-item`]}>
            <span className={classes[`member-item__name`]}>
                {el.title}
            </span>
            <span className={classes[`member-item__photo`]}>
                <Image src={el.src} alt={el.title} width="300px" height="300px"/>
            </span>
        </div>
    )
}

export default MemberItem
