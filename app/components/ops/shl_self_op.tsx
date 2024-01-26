import { StoredTypeInfo } from "@/app/type_info/stored_type_info";
import KeydSimpleParamQuery from "../keyd_single_param_query";

export default function ShlSelfOp({typeInfo, keyState, keyTypeInfo, resultRows}: {typeInfo: StoredTypeInfo, keyState: string, keyTypeInfo: StoredTypeInfo, resultRows: number})
{

    const label = `${typeInfo.lcTypeName}ShlSelfOp`

    const mutation = `mutation ShlSelfOp($key: ${keyTypeInfo.gqlTypeName}!) {
        ${label}(key: $key)
    }`
    
    return (
        <KeydSimpleParamQuery query={mutation} label={label} resultRows={resultRows} keyState={keyState}></KeydSimpleParamQuery>
    )

}


