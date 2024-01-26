
/*
export function toJson(strInput: string): string
{

    const res = JSON.parse(strInput);

    return JSON.stringify(res, null, 2)

}
*/

import { AxiosResponse } from "axios"

export function anyToJson(input: any): string
{

    if(input === undefined)
    {

        return 'undefined'

    }

    return JSON.stringify(input, null, 2)

}

/*
export function unwrapData(input: any): any
{

    return Reflect.get(input, "data")

}
*/

export function tryGetDataOrError(input: AxiosResponse): any
{

    //console.log('tryGetDataOrError - input:\n\n' + anyToJson(input))

    const input_data = input.data

    let res = Reflect.get(input_data, "data")

    if(res === null)
    {

        res = Reflect.get(input_data, "errors")

        //console.log('tryGetDataOrError - Reflect.get(input_data, "error")')

        if(res === null)
        {

            //console.log('tryGetDataOrError - return input_data')

            return input_data

        }

    }

    //console.log('tryGetDataOrError - return res')

    return res

}

export enum DataErrorAnyResult
{

    Data,
    Error,
    Any
}

export function tryGetDataOrErrorWithIndicator(input: AxiosResponse): [DataErrorAnyResult, any]
{

    const input_data = input.data

    let res = Reflect.get(input_data, "data")

    if(res === null)
    {

        res = Reflect.get(input_data, "errors")

        if(res === null)
        {

            //console.log('return [DataErrorAnyResult.Any, input]')

            return [DataErrorAnyResult.Any, input]

        }

        //console.log('return [DataErrorAnyResult.Error, res]')

        return [DataErrorAnyResult.Error, res]

    }

    //console.log('return [DataErrorAnyResult.Data, res]')

    return [DataErrorAnyResult.Data, res]

}

export function tryGetDataOrErrorToJSON(input: AxiosResponse): string
{

    return anyToJson(tryGetDataOrError(input))

}

/*
export function receiveDataToJson(input: any): string
{

    return anyToJson(unwrapData(input))

}
*/

/*
export function tryReceiveDataToJson(input: AxiosResponse): string
{

    //console.log('input:\n\n' + JSON.stringify(input, null, 2))

    const data = input.data

    if(data === null)
    {

        return anyToJson(tryGetDataOrError(input))

    }
    
    return anyToJson(data)

}
*/

//getAllCfgs

//Call on input after unwrapData

export function unwrapGetCfgs(input: any): any
{
    
    return Reflect.get(input, "getCfgs") //"getAllCfgs"

}

export function unwrapDataGetCfgs(input: any): any
{

    const getCfgsObj = tryGetDataOrError(input)
    
    return unwrapGetCfgs(getCfgsObj)

}

export function receiveGetCfgsToJson(input: any): string
{

    return anyToJson(unwrapGetCfgs(input))

}

export function getStringArray(from_field: string, input: string): string[]
{

    const input_obj = JSON.parse(input)

    const str_array = Reflect.get(input_obj, from_field) as string[]

    return str_array
    
}


