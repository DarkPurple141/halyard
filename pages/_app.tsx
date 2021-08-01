import Head from 'next/head'
import Grid from '../components/grid'
import Footer from '../components/footer'
import Nav from '../components/nav'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: any) {
  return (
    <Grid>
      <Head>
        <title>Halyard</title>
        <meta
          name="description"
          content="Halyard is an Australia-based software solutions consultancy"
        />
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://cdn.splitbee.io/sb.js" />
      </Head>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </Grid>
  )
}

export default MyApp
