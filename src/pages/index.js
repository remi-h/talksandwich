import Head from 'next/head'
import Image from 'next/image'
import TimeDisplay from '@/components/TimeDisplay';
import GetDate from '@/components/GetDate';
import GetTime from '@/components/GetTime';

// ---timezone---
const timezone1 = 'Europe/Stockholm';
const timezone2 = 'Asia/Tokyo';

export default function Home() {
  return (
    <>
      <Head>
        <title>Talk Sandwich</title>
        <meta name="description" content="is it a good time to call the friend on the other side of the world?" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <div className='timezone-wrap'>
          <div className='timezone'>
            <h2>Stockholm</h2>
            <p className='time'><GetTime timezone={timezone1} /></p>
            <p className='date'><GetDate timezone={timezone1} /></p>
          </div>
          <div className='timezone'>
            <h2>Tokyo</h2>
            <p className='time'><GetTime timezone={timezone2} /></p>
            <p className='date'><GetDate timezone={timezone2} /></p>
          </div>
        </div>
      </section>
    </>
  )
}
