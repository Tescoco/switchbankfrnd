import Head from 'next/head'
import React from 'react';
import Part1 from '../components/pages/LandingPage/Part1';
import Part2 from '../components/pages/LandingPage/Part2';
import Part3 from '../components/pages/LandingPage/Part3';
import Part4 from '../components/pages/LandingPage/Part4';
import Part5 from '../components/pages/LandingPage/Part5';

export default function Home() {
 
  return (
    <div>
      <Head>
        <title>Switch Bank</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Part1 />
        <Part2 />
        <Part3 />
        <Part4 />
        <Part5 />
      </div>
  )
}
