import { StoredTypeInfo } from "@/app/type_info/stored_type_info";
import { Dispatch, SetStateAction } from "react";
import NotOp from "./not_op";
import BitAndOp from "./bit_and_op";
import BitOrOp from "./bit_or_op";
import BitXorOp from "./bit_xor_op";
import BitAndSelfOp from "./bit_and_self_op";
import BitOrSelfOp from "./bit_or_self_op";
import BitXorSelfOp from "./bit_xor_self_op";
import TitledSectionLayout from "@/app/titled_section_layout";

export default function BoolOps({typeInfo, keyState, keyTypeInfo}: {typeInfo: StoredTypeInfo, keyState: string, keyTypeInfo: StoredTypeInfo})
{
    
    //, resultRows

    //, resultRows: number

    return (
        <TitledSectionLayout title={"bool Ops"}>
            <NotOp typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></NotOp>
            <BitAndOp typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></BitAndOp>
            <BitOrOp typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></BitOrOp>
            <BitXorOp typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></BitXorOp>
            <BitAndSelfOp typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></BitAndSelfOp>
            <BitOrSelfOp typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></BitOrSelfOp>
            <BitXorSelfOp typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></BitXorSelfOp>
        </TitledSectionLayout>

    )

}
