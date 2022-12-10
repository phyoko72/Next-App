import Navi from '../Layout/Navi'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  // console.log('what is Component: ',Component);
  // console.log('what is pageProps: ',pageProps);
  // return <Component {...pageProps} />
  return (<>
      <Navi>
        <Component {...pageProps} />
      </Navi>
  </>)
}

export default MyApp
