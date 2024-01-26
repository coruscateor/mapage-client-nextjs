"use client"

import { ReactNode, useEffect, useState } from "react"
import { Cfgs } from "../interfaces"
import { TheAppState } from "../app_state"

//{for (const field in serverCfgs)}

export default function CfgsTable({cfgs}: {cfgs: Cfgs | null}) {

    /*
    const [serverCfgsFieldsArray, setServerCfgsFieldsArray] = useState<ReactNode[] | null>(null)
    
    useEffect(() => {

        if (cfgs !== null)
        {

            let nodes: ReactNode[] = Array<ReactNode>()

            const serverCfgs = cfgs as Cfgs

            Object.entries(serverCfgs).map(([key, value]) => {
                nodes.push((<div className="flex flex-row"> <div>{key}</div> <div>{value.toString()}</div></div>))
            })

            setServerCfgsFieldsArray(nodes)

        }
 
    })
    */

    if(cfgs === null)
    //if(serverCfgsFieldsArray === null)
    {

        /*justify-end pt-4 font-bold*/

        return (
            <div className="flex">
               No configurations detected
            </div>
        )
        
    }
    else
    {

      const serverCfgs = cfgs as Cfgs

      {/*keyof Cfgs */}

      return (
        <div className="grid grid-cols-2 gap-4">

            {/*serverCfgsFieldsArray*/}
            
            {/*Object.entries(serverCfgs).map<ReactNode>(([key, value]) => {
                (<div>{key}: {value}</div>)
            })*/}

            {/*
                Argument of type '([key, value]: [string, any]) => void' is not assignable to parameter of type '(value: [string, any], index: number, array: [string, any][]) => ReactNode'.
                Type 'void' is not assignable to type 'ReactNode'.ts(2345)
            */}

            {/*This one works, YAY!!!*/}
            
            {Object.keys(serverCfgs).map((key: string, index: number) => {
                
                const index_str = index.toString(undefined) //(10)

                const currentKey = key.concat(index_str) //key + index_str

                return (
                /*<div>{key}: {serverCfgs[key as keyof Cfgs].toString()}</div>*/

                <div key={currentKey}><div className="italic">{key}</div> <div className="font-bold italic">{serverCfgs[key as keyof Cfgs].toString()}</div></div>
                )
            })
                }
            

            {/*Object.entries(serverCfgs).forEach(([key, value]) => {
                <div>{key}: {value}</div>
            })*/}


        </div>
      )

    }

}