import { StoredTypeInfo } from "@/app/type_info/stored_type_info";
import KeydSimpleParamQuery from "../keyd_single_param_query";
import { Dispatch, SetStateAction } from "react";
import { ParamComps } from "@/app/param_comps";
import { ParamComp } from "@/app/param_comp";
import KeydMultiParamQuery from "../keyd_multi_param_query";
import { TheAppState } from "@/app/app_state";
import { JsConversionType } from "@/app/type_info/js_conversion_type";

export default function ReadIndex({typeInfo, keyState, keyTypeInfo, resultRows}: {typeInfo: StoredTypeInfo, keyState: string, keyTypeInfo: StoredTypeInfo, resultRows: number})
{

    //const indexTypeInfo = TheAppState.KeyTypes.u64KeyTypeInfo

    const label = `${typeInfo.lcTypeName}ReadIndex`

    const query = `query ReadIndex($key: ${keyTypeInfo.gqlTypeName}!, $index: Int!) {
        ${label}(key: $key, index: $index)
    }`

    const paramComps = new ParamComps(label, new ParamComp("index", 3, JsConversionType.Number))
    
    return (
        <KeydMultiParamQuery query={query} label={label} resultRows={resultRows} keyState={keyState} paramComps={paramComps}></KeydMultiParamQuery>
    )

}
