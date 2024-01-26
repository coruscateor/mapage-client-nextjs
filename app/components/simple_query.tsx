import { TheAppState } from "@/app/app_state";
import { anyToJson, tryGetDataOrErrorToJSON } from "@/app/json_funcs"; //tryReceiveDataToJson //receiveDataToJson,
import { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";

export default function SimpleQuery({query, label, result_rows}: {query: string, label: string, result_rows: number}) {

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

        const queryRes: Promise<AxiosResponse> = TheAppState.runQuery(query)
    
        setQueryExecutionState('IsExecutingQuery')

        queryRes.then((response: AxiosResponse) => { 

            //setQueryExecutionResultState(anyToJson(response.data))

            //setQueryExecutionResultState(receiveDataToJson(response.data))

            setQueryExecutionResultState(tryGetDataOrErrorToJSON(response)) //tryReceiveDataToJson(response))

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
            <div className="flex justify-center text-gray-900 flex-col">
                <div className="flex mb-4 flex-col text-lg font-bold">
                    {label}
                </div>
                <div className="flex mb-4 flex-row">
                    <div>
                        <button className="btn btn-primary normal-case" onClick={on_click}>{label}</button>
                    </div>
                    <div className="ml-4">
                        <button className="btn btn-primary normal-case" onClick={on_clear_result}>Clear Result</button>
                    </div>
                </div>

                <div className="flex mb-6">
                { queryExecutionState === 'IsExecutingQuery' &&

                    <span className="loading loading-spinner loading-lg"></span>

                }
                { queryExecutionState === 'NotExecutingQuery' &&

                    <textarea className="textarea textarea-bordered w-full max-w" rows={result_rows} value={queryExecutionResultState} readOnly></textarea>

                }
                </div>
            </div>
        </>
    )
    
}
