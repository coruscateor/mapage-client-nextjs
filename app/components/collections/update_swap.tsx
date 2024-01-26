import { StoredTypeInfo } from "@/app/type_info/stored_type_info";
import KeydSimpleParamQuery from "../keyd_single_param_query";
import { Dispatch, SetStateAction } from "react";
import { ParamComps } from "@/app/param_comps";
import { ParamComp } from "@/app/param_comp";
import KeydMultiParamQuery from "../keyd_multi_param_query";
import { JsConversionType } from "@/app/type_info/js_conversion_type";

export default function UpdateSwap({typeInfo, keyState, keyTypeInfo, resultRows}: {typeInfo: StoredTypeInfo, keyState: string, keyTypeInfo: StoredTypeInfo, resultRows: number})
{

    const label = `${typeInfo.lcTypeName}UpdateSwap`

    const mutation = `mutation UpdateSwap($key: ${keyTypeInfo.gqlTypeName}!, $a: Int!, $b: Int!) {
        ${label}(key: $key, a: $a, b: $b)
    }`
    
    const paramComps = new ParamComps(label, new ParamComp("a", 3, JsConversionType.Number), new ParamComp("b", 3, JsConversionType.Number))
    
    return (
        <KeydMultiParamQuery query={mutation} label={label} resultRows={resultRows} keyState={keyState} paramComps={paramComps}></KeydMultiParamQuery>
    )

}
