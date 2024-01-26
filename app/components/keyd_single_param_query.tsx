import { TheAppState } from "@/app/app_state";
import { anyToJson, tryGetDataOrErrorToJSON } from "@/app/json_funcs"; //receiveDataToJson, 
import { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";

export default function KeydSimpleParamQuery({query, label, resultRows, keyState}: {query: string, label: string, resultRows: number, keyState: string}) {

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

        const key_obj = { key: keyState }

        const queryRes: Promise<AxiosResponse> = TheAppState.runQueryWithVars(query, key_obj)
    
        setQueryExecutionState('IsExecutingQuery')

        queryRes.then((response: AxiosResponse) => {

            //setQueryExecutionResultState(receiveDataToJson(response.data))

            const res = tryGetDataOrErrorToJSON(response)

            //console.log('KeydSimpleParamQuery res: ' + res)

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

    return (
        <>
            <div className="flex justify-center text-gray-900 flex-col mb-6">
                <div className="flex mb-4 flex-col text-lg font-bold">
                    {label}
                </div>
                <div className="flex mb-4 flex-col">
                    {/*<div className="flex mb-2">key <span className="max-w-xs whitespace-normal">{keyState}</span></div>*/}
                    {/*<div className="flex mb-2">key:</div>*/}
                    <label className="mb-1 font-bold" htmlFor={label}>key:</label>
                    {/*{resultRows}*/}
                    <textarea id={label} className="textarea textarea-bordered w-full max-w mb-6 bg-gray-200" rows={1} value={keyState} readOnly></textarea>
                    {/*text-gray-600*/}
                    {/*<div className="flex"><button className="btn btn-primary normal-case" onClick={on_click}>{queryLabel}</button></div>*/}
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

        </>
    )
    
}
