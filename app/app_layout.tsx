"use client" //May need to be moved into sub-components

import Link from 'next/link';

import { useEffect, useState, useSyncExternalStore } from 'react';

import { AppState, TheAppState } from './app_state';

import { Cfgs } from './interfaces';

import TypeStorageLinks from './components/type_storage_links';

import ServerDisplay from './components/server_display';

//<></>

//https://tailwindcss.com/docs/min-height

export default function AppLayout({ children, title }: {
    children: React.ReactNode,
    title: string
  }) {

    //<!-- header -->

    //aside

    //main

    //aside

    //footer

    //place-items-center 

    //justify-end
    
    //grid

    //const app_url = useSyncExternalStore(TheAppState.subscribeOnSetURL_useSES, TheAppState.getURL_fn);

    //const appUrlState = TheAppState.getURLState

    const [displayedURL, setDisplayedURL] = useState('')

    const [serverCfgs, setServerCfgs] = useState<Cfgs | null>(null)
    
    useEffect(() => {

      setDisplayedURL(TheAppState.getURL)

      setServerCfgs(TheAppState.getCfgs)

    })

    return (

    /*<div className="grid grid-cols-6 min-h-screen font-mono text-sm grid-flow-row">*/
    <div className="flex flex-col grow basis-full min-h-screen font-mono text-sm">
        
        {/*grid-rows-6*/}

        {/*gap-6*/}

        {/*flex-col*/}

        {/*w-2*/}

        {/*bg-sky-500 hover:bg-sky-700*/}

        {/*bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full*/}

        {/*border-b-2 border-gray-400*/}

        {/*border border-white-200*/}

        {/*border-r border-r-black*/}

        {/*border-l border-l-black*/}

        {/*from-sky-500 to-indigo-500*/}

        {/*from-gray-400*/}

         {/*
         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Server:
         </button>
         */}

        {/*Top*/}

        <div className="col-span-6 flex place-items-center justify-center min-w-screen bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold h-96">
            <ServerDisplay serverURL={displayedURL} />
            {/*gap-6*/}
            {/*<div className="flex min-w-screen">*/}
              {/*<div className="flex text-white font-bold">*/}
                {/*Server: {displayedURL}*/}
              {/*</div>*/}
              {/*<div className="flex text-white">
                {/* app_url */}
                {/*appUrlState */}
                {/*TheAppState.getURL*/}
                {/*suppressHydrationWarning*/}
                {/*pl-2*/}
                {/*displayedURL*/}
              {/*</div>*/}
            {/*</div>*/}
        </div>

        {/* via-20% */}

         {/*Middle*/}

        <div className="flex flex-row grow">

          {/*Left Aside*/}

          <div className="flex flex-col basis-1/4 row-span-4 p-2 bg-gradient-to-t from-slate-300 to-white via-white object-fill">
            <div className="flex justify-end flex-col text-end group">
              <div className="flex flex-col">
                {/*  <Link href="/connect_to_server">Connect To Server</Link> */}
                {/* <Link href="/test">Test</Link> */}
                <div className="flex justify-end pb-2 font-bold">
                  Settings
                </div>
                <div className="flex justify-end pb-1">
                  <Link href="/connect_to_server" className="text-blue-600 visited:text-purple-600">Connect To Server</Link>
                </div>
                <div className="flex justify-end pb-2">
                  <Link href="/" className="text-blue-600 visited:text-purple-600">Configurations</Link>
                </div>
                <div className="flex justify-end pt-2 pb-2">
                  <Link href="/test" className="text-blue-600 visited:text-purple-600">Test</Link>
                </div>

                {/* Server Configurations */}

                <TypeStorageLinks cfgs={serverCfgs}/>

              </div>
            </div>
          </div>

          {/*Main*/}

          <div className="flex flex-col basis-2/4 col-span-4 row-span-4 p-2 flex bg-gradient-to-t from-slate-300 to-white via-white object-fill">

            {/* Title Area */}

            <div className="flex m-8 font-bold text-4xl">
              {title}
            </div>

            {/* Child Components */}

            <div className="flex flex-col place-items-center justify-center w-full pb-10">
              {children}
            </div>
          </div>

          {/*Right Aside*/}

          <div className="flex basis-1/4 row-span-4 p-2 bg-gradient-to-t from-slate-300 to-white via-white object-fill">
            {/*<div>Right Aside</div>*/}
          </div>

        </div>

        {/*Bottom*/}

        <div className="col-span-6 flex flex-col place-items-center justify-center bg-gradient-to-r from-blue-500 to-blue-400 h-96">
          Mapage Client - Next.js
        </div>
         
        {/*Footer - */}

    </div>

  )

  }

