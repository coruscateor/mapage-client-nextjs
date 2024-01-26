import { Dispatch, SetStateAction } from "react";

export default function Param({label, rows, paramState, setParamState, textAreaId}: {label: string, rows: number, paramState: string, setParamState: Dispatch<SetStateAction<string>>, textAreaId: string}) {

    function selected_key_change(e: React.ChangeEvent<HTMLTextAreaElement>)
    {

        setParamState(e.target.value)

    }
    
    //className="flex w-full mb-6"

    return (
        <div id={textAreaId} key={textAreaId}>
            <label className="mb-1 font-bold" htmlFor={textAreaId}>{label}:</label>
            {/*{label}: */}
            {/*<div className="flex mb-2">*/}
            <textarea id={textAreaId} className="textarea textarea-bordered w-full w-full max-w mb-6" rows={rows} value={paramState} onChange={selected_key_change}></textarea>
            {/*</div>*/}
            {/*max-w*/}
        </div>
    )

}

