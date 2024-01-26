import { StoredTypeInfo } from "@/app/type_info/stored_type_info";
import KeydSimpleParamQuery from "../keyd_single_param_query";
import { Dispatch, SetStateAction } from "react";
import { ParamComps } from "@/app/param_comps";
import { ParamComp } from "@/app/param_comp";
import KeydMultiParamQuery from "../keyd_multi_param_query";

export default function BitAndOp({typeInfo, keyState, keyTypeInfo, resultRows}: {typeInfo: StoredTypeInfo, keyState: string, keyTypeInfo: StoredTypeInfo, resultRows: number})
{

    const mutation = `mutation BitAndOp($key: ${keyTypeInfo.gqlTypeName}!, $value: ${typeInfo.gqlTypeName}!) {
        ${typeInfo.lcTypeName}BitAndOp(key: $key, value: $value)
    }`

    const notOpLabel = `${typeInfo.lcTypeName}BitAndOp`

    const notOpParamComps = new ParamComps(notOpLabel, new ParamComp("value", 3, typeInfo.jsConversionType))
    
    return (
        <KeydMultiParamQuery query={mutation} label={notOpLabel} resultRows={resultRows} keyState={keyState} paramComps={notOpParamComps}></KeydMultiParamQuery>
    )

}
