import { StoredTypeInfo } from "@/app/type_info/stored_type_info";
import KeydSimpleParamQuery from "../keyd_single_param_query";
import { Dispatch, SetStateAction } from "react";
import { ParamComps } from "@/app/param_comps";
import { ParamComp } from "@/app/param_comp";
import KeydMultiParamQuery from "../keyd_multi_param_query";

export default function ReadBinarySearch({typeInfo, keyState, keyTypeInfo, resultRows}: {typeInfo: StoredTypeInfo, keyState: string, keyTypeInfo: StoredTypeInfo, resultRows: number})
{

    const label = `${typeInfo.lcTypeName}ReadBinarySearch`

    const query = `query ReadBinarySearch($key: ${keyTypeInfo.gqlTypeName}!, $x: ${typeInfo.gqlTypeName}!) {
        ${label}(key: $key, x: $x)
    }`

    const paramComps = new ParamComps(label, new ParamComp("x", 3, typeInfo.jsConversionType))
    
    return (
        <KeydMultiParamQuery query={query} label={label} resultRows={resultRows} keyState={keyState} paramComps={paramComps}></KeydMultiParamQuery>
    )

}
