import { StoredTypeInfo } from "@/app/type_info/stored_type_info";
import KeydSimpleParamQuery from "../keyd_single_param_query";
import { Dispatch, SetStateAction } from "react";
import { ParamComps } from "@/app/param_comps";
import { ParamComp } from "@/app/param_comp";
import KeydMultiParamQuery from "../keyd_multi_param_query";
import { JsConversionType } from "@/app/type_info/js_conversion_type";

export default function UpdateShrinkTo({typeInfo, keyState, keyTypeInfo, resultRows}: {typeInfo: StoredTypeInfo, keyState: string, keyTypeInfo: StoredTypeInfo, resultRows: number})
{

    const label = `${typeInfo.lcTypeName}UpdateShrinkTo`

    const mutation = `mutation UpdateShrinkTo($key: ${keyTypeInfo.gqlTypeName}!, minCapacity: Int!) {
        ${label}(key: $key, minCapacity: $minCapacity)
    }`
    
    const paramComps = new ParamComps(label, new ParamComp("minCapacity", 3, JsConversionType.Number))
    
    return (
        <KeydMultiParamQuery query={mutation} label={label} resultRows={resultRows} keyState={keyState} paramComps={paramComps}></KeydMultiParamQuery>
    )


}
