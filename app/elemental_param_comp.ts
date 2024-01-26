import { Dispatch, SetStateAction, useState } from "react";
import Param from "./components/param";
import { ParamComps } from "./param_comps";
import { ParamComp } from "./param_comp";
import { JsConversionType } from "./type_info/js_conversion_type";
import { anyToJson } from "./json_funcs";

export class ElementalParamComp
{

    private readonly _paramState: string
    private readonly _paramElement: JSX.Element
    //private _label: string
    private readonly _paramComp: ParamComp

    constructor(paramLabel: string, paramComp: ParamComp)
    {

        const [paramState, setParamState] = useState('')

        this._paramState = paramState

        //this._setParamState = setParamState

        //const [textElementId, setTextElementId] = useState('')

        //this._setTextElementId = setTextElementId

        this._paramComp = paramComp

        const textElementId = paramLabel + '_' + paramComp.label

        this._paramElement = Param({label: paramComp.label, rows: paramComp.rows, paramState: paramState, setParamState: setParamState, textAreaId: textElementId })

        //this._label = label
        
    }

    get paramState()
    {

        return this._paramState

    }

    get paramElement()
    {

        return this._paramElement

    }

    addToObject(obj: any, setQueryExecutionResultState: Dispatch<SetStateAction<string>>): boolean
    {
        
        const param = this._paramState

        const fieldName = this._paramComp.label

        const conversionType = this._paramComp.conversionType

        try
        {

            switch (this._paramComp.conversionType)
            {

                /*Unhandled Runtime Error
                  TypeError: Do not know how to serialize a BigInt*/

                /*
                case JsConversionType.BigInt:
                {

                    obj[fieldName] = BigInt(param)

                    return true

                }*/
                case JsConversionType.Number:
                {

                    obj[fieldName] = Number(param)

                    return true

                }
                case JsConversionType.Boolean:
                {

                    const trimedParam = param.trim()

                    if(trimedParam === 'true')
                    {

                        obj[fieldName] = true

                        //console.log('bool true')
                        
                        return true

                    }
                    else if(trimedParam === 'false')
                    {

                        obj[fieldName] = false

                        //console.log('bool false')

                        return true

                    }

                    //console.log('bool invalid')

                    setQueryExecutionResultState('Not a valid Boolean value: ' + trimedParam)

                    //obj[fieldName] = !!param //Boolean.parse(param)

                    return false

                }
                case JsConversionType.Serialise:
                {

                    obj[fieldName] = JSON.parse(param)

                    return true

                }
                case JsConversionType.String:
                {

                    obj[fieldName] = param

                    return true

                }

            }

        }
        catch(error: any)
        {

            const errorInfo = {

                param: param,
                fieldName: fieldName,
                conversionType: conversionType,
                error: error

            }

            const errorInfoJSON = anyToJson(errorInfo)

            console.log("errorInfoJSON:\n\n" + errorInfoJSON)

            setQueryExecutionResultState(errorInfoJSON)

            return false

        }

        setQueryExecutionResultState('Nothing happened')

        return false

        //obj[this._paramComp.label] = JSON.parse(this._paramState)

    }
    
}
