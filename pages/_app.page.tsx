import { AppProps } from 'next/app'

import 'normalize.css'
import '../styles/globals.scss'
import TheAppLoading from '../components/singleton/TheAppLoading/TheAppLoading'

const MeLiApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <TheAppLoading />
      <Component {...pageProps} />
    </>
  )
}

export default MeLiApp
