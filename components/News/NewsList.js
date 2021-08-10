import React from 'react'
import classes from './NewsList.module.scss'
import NewsItem from './NewsItem'

const NewsList = (props) => {
    return (
        <div className={classes.news}>
           {props.news.map(el => {
               return <NewsItem key={el.id} el={el}/>
           })}            
        </div>
    )
}

export default NewsList
