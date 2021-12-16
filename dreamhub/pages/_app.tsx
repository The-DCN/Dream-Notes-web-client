import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ReactQueryCacheProvider, QueryCache } from 'react-query';
import {Hydrate} from 'react-query/hydration'

const queryCache = new QueryCache;

function MyApp({ Component, pageProps }: AppProps) {
 
 return (<ReactQueryCacheProvider>
    <Hydrate>
    <Component {...pageProps} />
  </Hydrate>
  </ReactQueryCacheProvider>
 )
}

export default MyApp
