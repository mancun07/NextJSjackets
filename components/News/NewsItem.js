import React from 'react'
import classes from './NewsItem.module.scss'
import { useRouter } from 'next/router'

const NewsItem = ({el}) => {
    const router = useRouter();

    const goToSingleNewsHandler = () => {
        router.push('/news/' + el.id)
    }

    return (
        <div className={classes.newsItem}>
            <div className={classes.imageWrapper}>
                  <img src={el.image}/>
            </div>
            <p>{el.date}</p>
            <h2>{el.title}</h2>
            <p>{el.description}</p>
            <button className={classes.btn} onClick={goToSingleNewsHandler}>Читать далее</button>
        </div>
    )
}

export default NewsItem
