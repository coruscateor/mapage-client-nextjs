import { StoredTypeInfo } from "@/app/type_info/stored_type_info";
import KeydSimpleParamQuery from "../keyd_single_param_query";
import { Dispatch, SetStateAction } from "react";
import { ParamComps } from "@/app/param_comps";
import { ParamComp } from "@/app/param_comp";

export default function BitAndSelfOp({typeInfo, keyState, keyTypeInfo, resultRows}: {typeInfo: StoredTypeInfo, keyState: string, keyTypeInfo: StoredTypeInfo, resultRows: number})
{

    const mutation = `mutation Insert($key: ${keyTypeInfo.gqlTypeName}!) {
        ${typeInfo.lcTypeName}BitAndSelfOp(key: $key)
    }`

    const label = `${typeInfo.lcTypeName}BitAndSelfOp`

    return (
        <KeydSimpleParamQuery query={mutation} label={label} resultRows={resultRows} keyState={keyState}></KeydSimpleParamQuery>
    )

}
