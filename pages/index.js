import Head from 'next/head'
// import Image from 'next/image'
import SwiperSlider from '../components/Home/SwiperSlider'
import Description from '../components/Home/Description'
import React from 'react'
import MembersList from '../components/Home/MembersList'

const dummyImages = [
  {id: '1', src:'/concert1.jpg'},
  {id: '2', src:'/concert2.jpg'},
  {id: '3', src:'/concert3.jpg'},
]

const dummySocials = [
  {id: '1', 
  title: 'Канал группы в YouTube', 
  pic: <i className="fa fa-youtube" aria-hidden="true"></i>, href:'https://www.youtube.com/channel/UCcUbnoi0qkje6LeWTYyEIcg',
  color: 'tomato'
  },

  {id: '2', 
  title: 'Сообщество группы в VK', 
  pic: <i className="fa fa-vk" aria-hidden="true"></i>, href: 'https://vk.com/kkurtki',
  color: 'steelblue'
  },
  {id: '3', 
  title: 'Сообщество группы в Instagram', 
  pic: <i className="fa fa-instagram" aria-hidden="true"></i>, href: 'https://www.instagram.com/music_jackets/',
  color: 'black'
  }
]

const DummyMembers = [
  {id: '1', title: 'Boris Britva - вокал, гитара', src: '/boris.jpg', direction: 'row-reverse'},
  {id: '2', title: 'Боярский Максим - ударные', src: '/maxim.jpg', direction: 'row'},
  {id: '3', title: 'Музыченко Дмитрий - бас', src: '/dima.jpg', direction: 'row-reverse'},
  {id: '4', title: 'Андрей Лазук - клавишные', src: '/andrew.jpg', direction: 'row'}
]




const HomePage = () => {
  return (
    <>
      <SwiperSlider images={dummyImages}/>
      <Description socials={dummySocials}/>
      <MembersList members={DummyMembers}/>
    </>
  )
}

export default HomePage
