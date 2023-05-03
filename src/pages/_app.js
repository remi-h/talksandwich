import '@/styles/globals.css'
import Link from 'next/link'

export default function App({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />
    <footer>
      <p>(c) 2023 Remi</p>
    </footer>
  </>
}
