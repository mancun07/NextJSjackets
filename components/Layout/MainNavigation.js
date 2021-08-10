import React, {Fragment, useRef, useEffect} from 'react'
import classes from './MainNavigation.module.scss'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { navbarActions } from '../../store/navbarSlice'

const MainNavigation = () => {

    const mobileMenuIsShown = useSelector(state => state.navbar.mobileMenuIsShown);
    const dispatch = useDispatch();


    const toggleMenu = () => {
        dispatch(navbarActions.toggleMenu())
    }

    return (
        <Fragment>
        <header className={classes.header}>
            <div className={classes[`sidenav-trigger`]} onClick={toggleMenu}></div>
            <div className={classes.logo}>Leather Jackets</div>
            <nav className={classes.navbar}>
                <ul className={classes.menu1}>
                    <li><Link href="/">ГЛАВНАЯ</Link></li>
                    <li><Link href={'/news'}>НОВОСТИ</Link></li>
                    <li><Link href="/photos">ФОТО</Link></li>
                    <li><Link href="/videos">ВИДЕО</Link></li>
                </ul>
                <ul className={classes.menu2}>
                    <li><Link href="/">VK</Link></li>
                    <li><Link href="/">YT</Link></li>
                    <li><Link href="/">IN</Link></li>
                </ul>
            </nav>
        </header>

        {/* mobile menu */}
        <div className={mobileMenuIsShown ? classes[`sidenav-is-active`] : classes.sidenav}>
            <ul className="sidenav__nav__menu">
                <li onClick={toggleMenu}><Link href={'/'}>ГЛАВНАЯ</Link></li>
                <li onClick={toggleMenu}><Link href={'/news'}>НОВОСТИ</Link></li>
                <li onClick={toggleMenu}><Link href={'/photos'}>ФОТО</Link></li>
                <li onClick={toggleMenu}><Link href={'/videos'}>ВИДЕО</Link></li>
            </ul>
     
            <ul className="sidenav__nav__socials">
                <li><a href="https://vk.com/kkurtki" target="blank"><i className="fab fa-vk fa-2x"></i></a></li>
                <li> <a href="https://www.youtube.com/channel/UCcUbnoi0qkje6LeWTYyEIcg" target="blank"><i className="fab fa-youtube fa-2x"></i></a></li>
                <li><a href="https://www.instagram.com/music_jackets/" target="blank"><i className="fab fa-instagram fa-2x"></i></a></li>
            </ul>
        </div>
        </Fragment>
    )
}

export default MainNavigation
