import { TheAppState } from "@/app/app_state";
import { anyToJson, tryGetDataOrErrorToJSON } from "@/app/json_funcs"; //receiveDataToJson, 
import { ParamComps } from "@/app/param_comps";
import { AxiosError, AxiosResponse } from "axios";
import { Console } from "console";
import { useState } from "react";

export default function KeydMultiParamQuery({query, label, resultRows, keyState, paramComps}: {query: string, label: string, resultRows: number, keyState: string, paramComps: ParamComps}) {

    const [queryExecutionState, setQueryExecutionState] = useState('NotExecutingQuery');

    const [queryExecutionResultState, setQueryExecutionResultState] = useState('');

    function on_click(e: React.MouseEvent<HTMLButtonElement>)
    {

        if(queryExecutionState === 'IsExecutingQuery')
        {
    
          return
    
        }
    
        if(queryExecutionResultState.length > 0)
        {
    
            setQueryExecutionResultState('')
    
        }

        let params_obj = { key: keyState }

        if(!paramComps.addToObject(params_obj, setQueryExecutionResultState))
        {

            console.log('!paramComps.addToObject')

            return

        }
        
        const queryRes: Promise<AxiosResponse> = TheAppState.runQueryWithVars(query, params_obj)

        console.log('KeydMultiParamQuery - params_obj:\n\n' + anyToJson(params_obj))
        
        setQueryExecutionState('IsExecutingQuery')

        queryRes.then((response: AxiosResponse) => {
            
            const res = tryGetDataOrErrorToJSON(response)

            setQueryExecutionResultState(res)
            
            setQueryExecutionState('NotExecutingQuery')

        })
        .catch((error: AxiosError) => {

            setQueryExecutionResultState(anyToJson(error))

            setQueryExecutionState('NotExecutingQuery')

        })

    }

    function on_clear_result(e: React.MouseEvent<HTMLButtonElement>)
    {

        setQueryExecutionResultState('')

    }

    const textAreaId = label + '_key'

    return (

            <div className="flex justify-center text-gray-900 flex-col mb-6 w-full">
                <div className="flex mb-4 flex-col text-lg font-bold">
                    {label}
                </div>
                <div className="flex mb-4 flex-col">
                    {/*<div className="flex mb-2">key: <span className="max-w-xs whitespace-normal">{keyState}</span></div>*/}
                    <label className="mb-1 font-bold" htmlFor={textAreaId}>key:</label>
                    {/*{resultRows}*/}
                    <textarea id={textAreaId} className="textarea textarea-bordered w-full max-w mb-6 bg-gray-200" rows={1} value={keyState} readOnly></textarea>
                    <div className="flex mb-6 flex-col">
                        {paramComps.getParamElements()}
                    </div>
                    {/*<div className="flex">
                        <button className="btn btn-primary normal-case" onClick={on_click}>{label}</button>
                    </div>*/}
                    <div className="flex mb-4 flex-row">
                        <div>
                            <button className="btn btn-primary normal-case" onClick={on_click}>{label}</button>
                        </div>
                        <div className="ml-4">
                            <button className="btn btn-primary normal-case" onClick={on_clear_result}>Clear Result</button>
                        </div>
                    </div>
                </div>

                <div className="flex mb-6">
                { queryExecutionState === 'IsExecutingQuery' &&

                    <span className="loading loading-spinner loading-lg"></span>

                }
                { queryExecutionState === 'NotExecutingQuery' &&

                    <textarea className="textarea textarea-bordered w-full max-w" rows={resultRows} value={queryExecutionResultState} readOnly></textarea>

                }
                </div>
            </div>
    )
    
}
