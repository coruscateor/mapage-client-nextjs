import { StoredTypeInfo } from "@/app/type_info/stored_type_info";
import TitledSectionLayout from "@/app/titled_section_layout";
import AddOp from "./add_op";
import AddSelfOp from "./add_self_op";
import DivOp from "./div_op";
import DivSelfOp from "./div_self_op";
import MulOp from "./mul_op";
import MulSelfOp from "./mul_self_op";
import NegOp from "./neg_op";
import RemOp from "./rem_op";
import RemSelfOp from "./rem_self_op";
import SubOp from "./sub_op";
import SubSelfOp from "./sub_self_op";
import IncOp from "./inc_op";
import DecOp from "./dec_op";

export default function FloatOps({typeInfo, keyState, keyTypeInfo}: {typeInfo: StoredTypeInfo, keyState: string, keyTypeInfo: StoredTypeInfo})
{

    return (
        <>
            <AddOp typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></AddOp>
            <AddSelfOp typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></AddSelfOp>
            <DivOp typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></DivOp>
            <DivSelfOp typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></DivSelfOp>
            <MulOp typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></MulOp>
            <MulSelfOp typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></MulSelfOp>
            <NegOp typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></NegOp>
            <RemOp typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></RemOp>
            <RemSelfOp typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></RemSelfOp>
            <SubOp typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></SubOp>
            <SubSelfOp typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></SubSelfOp>
            <IncOp typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></IncOp>
            <DecOp typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></DecOp>
        </>
    )

}