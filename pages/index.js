import Head from 'next/head';
import React from 'react';
import styles from '../styles/Home.module.css'; 

export default function Home() {
  return (
  <div className= {styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <div className='flex flex-col items-center justify-center h-screen'>
      <div className="max-w-lg w-full">
        <div
        style={{height: "650px"}}
        className='bg-gray-100 w-full p-4 h-96 overflow-scroll rounded-lg'>
          <span className="text-center block font-medium text-2x1 border-b-2 border-indigo-400">ジーニアス山崎</span>

          <div className="flex justify-end mb-2">
            <div className="bg-indigo-400 text-white p-2 rounded-md">hello</div>
          </div>
          <div className="flex justify-start mb-2">
            <div className="bg-gray-200 p-2 rounded-md">やっほー</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
