import { Cfgs } from "./interfaces";

//export type CfgField = { name: string, }

export function map(cfgs: Cfgs, fn: (name: string, value: string) => void)
{

    Object.entries(cfgs).forEach(([key, value]) => {
        
    })

    /*
    for (const fieldName in cfgs)
    {

        const fieldValue = cfgs[fieldName]

        fn(fieldName, fieldValue)

    }
    */
}