import React from 'react'
import PhotosList from '../../components/Photos/PhotosList'

const dummyPhotos = [
    {id: '1', title: 'Band Photo1', src:'./about1.jpg'},
    {id: '2', title: 'Band Photo2', src:'./about2.jpg'},
    {id: '3', title: 'Band Photo3', src:'./about3.jpg'},
    {id: '4', title: 'Band Photo4', src:'./about4.jpg'},
    {id: '5', title: 'Band Photo5', src:'./about5.jpg'},
    {id: '6', title: 'Band Photo6', src:'./about6.jpg'},
    {id: '7', title: 'Band Photo7', src:'./concert1.jpg'},
    {id: '8', title: 'Band Photo8', src:'./concert2.jpg'},
    {id: '9', title: 'Band Photo9', src:'./concert3.jpg'}
  ]

const PhotosPage = () => {
    return (
        <div className="container">
            <PhotosList photos={dummyPhotos}/>
        </div>
    )
}

export default PhotosPage
