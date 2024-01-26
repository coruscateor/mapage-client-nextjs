import { Dispatch, SetStateAction } from "react";
import { ElementalParamComp } from "./elemental_param_comp";
import { ParamComp } from "./param_comp";

export class ParamComps
{
    
    private readonly _paramComps: ElementalParamComp[] = []
    private readonly _paramLabel: string

    constructor(paramLabel: string, ...paramComps: ParamComp[])
    {

        //this._paramComps = paramComps

        this._paramLabel = paramLabel

        paramComps.forEach((value) => {

            //value.trySetParent(this)

            this._paramComps.push(new ElementalParamComp(paramLabel, value))

        })

    }

    getParamElements(): JSX.Element[]
    {

        let elements = new Array<JSX.Element> //[] //.new()

        this._paramComps.forEach((value) => {

            //, index

            elements.push(value.paramElement)

        })

        return elements

    }

    addToObject(obj: any, setQueryExecutionResultState: Dispatch<SetStateAction<string>>): boolean
    {

        let has_found_error = false

        this._paramComps.forEach((value) => {

            if(!value.addToObject(obj, setQueryExecutionResultState))
            {

                //console.log('!value.addToObject')

                //return false

                has_found_error = true

                return

            }

        })

        return !has_found_error

        //return true

    }

    get paramLabel(): string
    {

        return this._paramLabel

    }

}