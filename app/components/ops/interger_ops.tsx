import { StoredTypeInfo } from "@/app/type_info/stored_type_info";
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
import BitAndOp from "./bit_and_op";
import BitOrOp from "./bit_or_op";
import BitXorOp from "./bit_xor_op";
import BitAndSelfOp from "./bit_and_self_op";
import BitOrSelfOp from "./bit_or_self_op";
import BitXorSelfOp from "./bit_xor_self_op";
import NotOp from "./not_op";
import ShlOp from "./shl_op";
import ShlSelfOp from "./shl_self_op";
import ShrOp from "./shr_op";
import ShrSelfOp from "./shr_self_op";

export default function IntegerOps({typeInfo, keyState, keyTypeInfo}: {typeInfo: StoredTypeInfo, keyState: string, keyTypeInfo: StoredTypeInfo})
{

    return (
        <>
            <AddOp typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></AddOp>
            <AddSelfOp typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></AddSelfOp>
            <BitAndOp typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></BitAndOp>
            <BitOrOp typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></BitOrOp>
            <BitXorOp typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></BitXorOp>
            <BitAndSelfOp typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></BitAndSelfOp>
            <BitOrSelfOp typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></BitOrSelfOp>
            <BitXorSelfOp typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></BitXorSelfOp>
            <DivOp typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></DivOp>
            <DivSelfOp typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></DivSelfOp>
            <MulOp typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></MulOp>
            <MulSelfOp typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></MulSelfOp>
            <NegOp typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></NegOp>
            <NotOp typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></NotOp>
            <RemOp typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></RemOp>
            <RemSelfOp typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></RemSelfOp>
            <ShlOp typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></ShlOp>
            <ShlSelfOp typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></ShlSelfOp>
            <ShrOp typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></ShrOp>
            <ShrSelfOp typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></ShrSelfOp>
            <SubOp typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></SubOp>
            <SubSelfOp typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></SubSelfOp>
            <IncOp typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></IncOp>
            <DecOp typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></DecOp>
        </>
    )

}
