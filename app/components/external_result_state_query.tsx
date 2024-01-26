import { TheAppState } from "@/app/app_state";
import { anyToJson, tryGetDataOrErrorToJSON } from "@/app/json_funcs";
import { AxiosError, AxiosResponse } from "axios";
import { Dispatch, SetStateAction, useState } from "react";

export default function ExternalResultStateQuery({query, label, result_rows, queryResultState, setQueryResultState, on_clear_result}: {query: string, label: string, result_rows: number, queryResultState: string, setQueryResultState: Dispatch<SetStateAction<string>>, on_clear_result: (e: React.MouseEvent<HTMLButtonElement>) => void}) {

    const [queryExecutionState, setQueryState] = useState('NotExecutingQuery');

    function on_click(e: React.MouseEvent<HTMLButtonElement>)
    {

        if(queryExecutionState === 'IsExecutingQuery')
        {
    
          return
    
        }
    
        if(queryResultState.length > 0)
        {
    
            setQueryResultState('')
    
        }

        const queryRes: Promise<AxiosResponse> = TheAppState.runQuery(query)
    
        setQueryState('IsExecutingQuery')

        queryRes.then((response: AxiosResponse) => { 

            setQueryResultState(tryGetDataOrErrorToJSON(response)) //receiveDataToJson(response.data))

            setQueryState('NotExecutingQuery')

        })
        .catch((error: AxiosError) => {

            setQueryResultState(anyToJson(error))

            setQueryState('NotExecutingQuery')

        })

    }

    //

    return (
        <>
            <div className="flex justify-center text-gray-900 flex-col mb-4">
                <div className="flex mb-4">
                    {/*<button className="btn btn-primary normal-case" onClick={on_click}>{label}</button>*/}
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

                    <textarea className="textarea textarea-bordered w-full max-w" rows={result_rows} value={queryResultState} readOnly></textarea>

                }
                </div>
            </div>

        </>
    )
    
}
