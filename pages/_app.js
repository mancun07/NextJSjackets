import { Provider } from 'react-redux';
import {store} from '../store/store'
import '../styles/globals.css'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
    <Layout>
        <Component {...pageProps} />
    </Layout>
    </Provider>
  )
}

export default MyApp
