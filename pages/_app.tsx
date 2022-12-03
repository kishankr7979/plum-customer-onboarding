import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { LinearProgress } from '@mui/material';
import { useState, useEffect } from 'react';
export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000)
  }, [])
  return (
    <>
      {isLoading ? <div><LinearProgress color='error' /></div> : <Component {...pageProps} />}

    </>
  )
}
