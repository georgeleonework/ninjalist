import Layout from '../components/Layout'
import '../styles/globals.css'

//wrapping the layout component around the other components
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} /> 
    </Layout>
  )
}

export default MyApp
