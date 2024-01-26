import { StoredTypeInfo } from "@/app/type_info/stored_type_info";
import KeydSimpleParamQuery from "../keyd_single_param_query";
import { Dispatch, SetStateAction } from "react";
import { ParamComps } from "@/app/param_comps";
import { ParamComp } from "@/app/param_comp";
import KeydMultiParamQuery from "../keyd_multi_param_query";

export default function ReadLen({typeInfo, keyState, keyTypeInfo, resultRows}: {typeInfo: StoredTypeInfo, keyState: string, keyTypeInfo: StoredTypeInfo, resultRows: number})
{

    const label = `${typeInfo.lcTypeName}ReadLen`

    const query = `query ReadLen($key: ${keyTypeInfo.gqlTypeName}!) {
        ${label}(key: $key)
    }`
    
    return (
        <KeydSimpleParamQuery query={query} label={label} resultRows={resultRows} keyState={keyState}></KeydSimpleParamQuery>
    )

}
