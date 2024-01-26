import { Dispatch, SetStateAction, useState } from "react";
import Param from "./components/param";
import { ParamComps } from "./param_comps";
import { JsConversionType } from "./type_info/js_conversion_type";

export class ParamComp
{

    //private _paramState: string
    //private _setParamState: Dispatch<SetStateAction<string>>
    //private _paramElement: JSX.Element
    private readonly _label: string
    //private _parent: ParamComps | null = null
    //private _setTextElementId: Dispatch<SetStateAction<string>> | null = null
    private readonly _rows: number

    private readonly _conversionType: JsConversionType

    constructor(label: string, rows: number, conversionType: JsConversionType)
    {

        //const [paramState, setParamState] = useState('')

        //this._paramState = paramState

        //this._setParamState = setParamState

        //const [textElementId, setTextElementId] = useState('')

        //this._setTextElementId = setTextElementId

        //this._paramElement = Param({label: label, rows: rows, paramState: paramState, setParamState: setParamState, textAreaId: textElementId })

        this._label = label

        this._rows = rows

        this._conversionType = conversionType
        
    }

    get label()
    {

        return this._label

    }

    get rows()
    {

        return this._rows

    }

    get conversionType()
    {

        return this._conversionType

    }

    /*
    get paramState()
    {

        return this._paramState

    }

    get paramElement()
    {

        return this._paramElement

    }

    addToObject(obj: any)
    {

        obj[this._label] = JSON.parse(this._paramState)

    }

    trySetParent(paramComps: ParamComps): boolean
    {

        if(this._parent !== null)
        {

            this._parent = paramComps

            this?._setTextElementId(paramComps.paramLabel + '_' + this._label)

            return true

        }

        return false

    }
    */

    /*
    getElementId(): string
    {

        if(this._parent !== null)
        {

            const parent = this._parent

            return parent.paramLabel + '_' + this._label

        }

        return 'ERROR_' + this._label

    }
    */

}
