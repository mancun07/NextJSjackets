import React from 'react'
import classes from './MemberItem.module.scss'

const MemberItem = ({el}) => {
    return (
        <div style={{flexDirection: el.direction}} className={classes[`member-item`]}>
            <span className={classes[`member-item__name`]}>
                {el.title}
            </span>
            <span className={classes[`member-item__photo`]}>
                <img src={el.src} alt={el.title} />
            </span>
        </div>
    )
}

export default MemberItem
