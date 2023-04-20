import '@/styles/globals.css'
import Link from 'next/link'

export default function App({ Component, pageProps }) {
  return <>
    <header>
      <nav>
        <Link href="/"><h1>SANDWICH TALK</h1></Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
    <Component {...pageProps} />
    <footer>
      <p>(c) 2023 Remi</p>
    </footer>
  </>
}
