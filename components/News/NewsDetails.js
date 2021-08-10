import React from 'react'
import Link from 'next/link'
import classes from './NewsDetails.module.scss'


const NewsDetails = (props) => {
    return (
        <div className={classes.singleNews}>
            <Link href={'/news'}><a><button className={classes.btn}>Обратно к списку новостей</button></a></Link>
            <div>
                <img src={props.singleNews.image}/>
            </div>
            <p>{props.singleNews.date}</p>
            <h2>{props.singleNews.title}</h2>
            <p>{props.singleNews.description}</p>
        </div>
    )
}

export default NewsDetails
