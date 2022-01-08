import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query';
import {Hydrate} from 'react-query/hydration'
import { ReactQueryDevtools } from "react-query/devtools";
import {useState} from 'react';
import axios from 'axios';


const baseUrl = process.env.DEV_URL + '/';

//set baseURl for incoming requests
 export const axiosInstance  = axios.create({
  baseURL: baseUrl,
})
axiosInstance.defaults.headers.common['content-type'] = 'application/json'
axiosInstance.defaults.headers.common['Authorization'] = 'Bearer';

function MyApp({ Component, pageProps }: AppProps) {
 
  //change the baseURL when putting project into prod.
  const [queryClient] =  useState(() => new QueryClient());
  const baseUrl = process.env.DEV_URL


  return (
   <QueryClientProvider client={queryClient}>
    <Hydrate state={pageProps.dehydratedState}>
      <Component {...pageProps} />
     </Hydrate>
     <ReactQueryDevtools initialIsOpen={false}/>
     </QueryClientProvider>
 )
}

export default MyApp
