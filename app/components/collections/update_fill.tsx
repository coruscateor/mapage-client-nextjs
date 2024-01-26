import { StoredTypeInfo } from "@/app/type_info/stored_type_info";
import KeydSimpleParamQuery from "../keyd_single_param_query";
import { Dispatch, SetStateAction } from "react";
import { ParamComps } from "@/app/param_comps";
import { ParamComp } from "@/app/param_comp";
import KeydMultiParamQuery from "../keyd_multi_param_query";
import { JsConversionType } from "@/app/type_info/js_conversion_type";

export default function UpdateFill({typeInfo, keyState, keyTypeInfo, resultRows, itemTypeInfo}: {typeInfo: StoredTypeInfo, keyState: string, keyTypeInfo: StoredTypeInfo, resultRows: number, itemTypeInfo: StoredTypeInfo})
{

    const label = `${typeInfo.lcTypeName}UpdateFill`

    const mutation= `mutation UpdateFill($key: ${keyTypeInfo.gqlTypeName}!, $value: ${itemTypeInfo.gqlTypeName}!) {
        ${label}(key: $key, value: $value)
    }`
    
    const paramComps = new ParamComps(label, new ParamComp("value", 3, itemTypeInfo.jsConversionType))
    
    return (
        <KeydMultiParamQuery query={mutation} label={label} resultRows={resultRows} keyState={keyState} paramComps={paramComps}></KeydMultiParamQuery>
    )

}
