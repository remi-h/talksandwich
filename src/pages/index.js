import { useState, useEffect } from 'react';
import Head from 'next/head';
import Navigation from "@/components/Navigation";
import Image from 'next/image';
import TimeDisplay from '@/components/TimeDisplay';
import GetDate from '@/components/GetDate';
import GetTime from '@/components/GetTime';
import SameDate from '@/components/SameDate';

// ---timezone---
const timezone1 = 'Europe/Stockholm';
const timezone2 = 'Asia/Tokyo';

// ---navigation---
let page = 'index';

export default function Home() {
  return (
    <>
      <Head>
        <title>Talk Sandwich</title>
        <meta name="description" content="is it a good time to call the friend on the other side of the world?" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation page={page} />
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
            <SameDate timezone1={timezone1} timezone2={timezone2} />
          </div>
        </div>
      </section>
    </>
  )
}
