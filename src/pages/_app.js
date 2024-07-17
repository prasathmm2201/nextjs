import '../styles/globel.css'
import AppTheme from '../App.theme';
import { TopNavBar } from '../components';
import Head from 'next/head';
import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { LocalStorageKeys } from '../utilities';


function MyApp({ Component, pageProps }) {

  const router = useRouter()

  useEffect(()=>{
    if(!localStorage?.getItem(LocalStorageKeys?.token)){
      router.push('/login')
  }
  },[])

  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }

  return (
    <div>
      <Head>
        <title>Boilerplate</title>
        <meta name="Boilerplate" content='page'></meta>
        <meta name="keywords" content="next.js, meta tags, example" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href='/favicon.ico' />
      </Head>
      <AppTheme>
        <Box sx={{ height: "100vh" }}>
          <TopNavBar />
          <Component {...pageProps} />
        </Box>
      </AppTheme>
    </div>

  )
}

export default MyApp