import { StoredTypeInfo } from "@/app/type_info/stored_type_info";
import KeydSimpleParamQuery from "../keyd_single_param_query";
import { Dispatch, SetStateAction } from "react";


export default function NotOp({typeInfo, keyState, keyTypeInfo, resultRows}: {typeInfo: StoredTypeInfo, keyState: string, keyTypeInfo: StoredTypeInfo, resultRows: number})
{

    const mutation = `mutation NotOp($key: ${keyTypeInfo.gqlTypeName}!) {
        ${typeInfo.lcTypeName}NotOp(key: $key)
    }`

    const label = `${typeInfo.lcTypeName}NotOp`

    return (
        <KeydSimpleParamQuery query={mutation} label={label} resultRows={resultRows} keyState={keyState}></KeydSimpleParamQuery>
    )

}
