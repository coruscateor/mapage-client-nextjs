"use client"

//import Image from 'next/image'

//<AppLayout>

//</AppLayout>

import { useEffect, useState } from 'react'
import AppLayout from './app_layout'

import CfgsTable from './components/cfgs_table'
import { Cfgs } from './interfaces'
import { TheAppState } from './app_state'

export default function Home() {

  const [serverCfgs, setServerCfgs] = useState<Cfgs | null>(null)
    
  useEffect(() => {

    setServerCfgs(TheAppState.getCfgs)

  })

  return (
    <AppLayout title={'Configurations'}>

    <div className="flex">
      <CfgsTable cfgs={serverCfgs}/>
    </div>

    </AppLayout>
  )
}

/*
export function Test() {
  return (
    <AppLayout>

    <div className="flex">
    test 9000
    </div>

    </AppLayout>
  )
}
*/

