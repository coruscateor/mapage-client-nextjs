import { StoredTypeInfo } from "@/app/type_info/stored_type_info";
import KeydSimpleParamQuery from "../keyd_single_param_query";
import { Dispatch, SetStateAction } from "react";
import { ParamComps } from "@/app/param_comps";
import { ParamComp } from "@/app/param_comp";
import KeydMultiParamQuery from "../keyd_multi_param_query";

export default function AddOp({typeInfo, keyState, keyTypeInfo, resultRows}: {typeInfo: StoredTypeInfo, keyState: string, keyTypeInfo: StoredTypeInfo, resultRows: number})
{

    const label = `${typeInfo.lcTypeName}AddOp`

    const mutation = `mutation AddOp($key: ${keyTypeInfo.gqlTypeName}!, $value: ${typeInfo.gqlTypeName}!) {
        ${label}(key: $key, value: $value)
    }`

    const paramComps = new ParamComps(label, new ParamComp("value", 3, typeInfo.jsConversionType))
    
    return (
        <KeydMultiParamQuery query={mutation} label={label} resultRows={resultRows} keyState={keyState} paramComps={paramComps}></KeydMultiParamQuery>
    )

}
