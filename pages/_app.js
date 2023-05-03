import '@/styles/globals.css'
import Head from 'next/head'
import favicon from "../public/favicon.ico";
import Layout from '../components/layout'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
         <Head>
         <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />

                <title>Brain Tumor</title>
            </Head>
        <Component {...pageProps} />
    </Layout>

)}
