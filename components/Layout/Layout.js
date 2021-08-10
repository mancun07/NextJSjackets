import {Fragment} from 'react'
import MainNavigation from './MainNavigation'
import Footer from './Footer'
import classes from './Layout.module.scss'

const Layout = (props) => {
    return (
        <Fragment>
            <MainNavigation />
            <main>{props.children}</main>
            <Footer />
        </Fragment>
    )
}

export default Layout
