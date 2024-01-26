"use client"

import AppLayout from "@/app/app_layout";
import { SetStateAction, useState } from "react";

import { StoredTypeInfo, BoolStoredTypeInfo } from "@/app/type_info/stored_type_info";
import Essential from "@/app/components/essential";
import { TheAppState } from "@/app/app_state";
import BoolOps from "@/app/components/ops/bool_ops";

export default function BoolType() {

    const [key, setKey] = useState('')

    const typeInfo = new BoolStoredTypeInfo()

    const keyTypeInfo = TheAppState.KeyTypes.boolKeyTypeInfo

    return (
        <AppLayout title={'bool Type'}>
            <Essential typeInfo={typeInfo} keyState={key} setKeyState={setKey} keyTypeInfo={keyTypeInfo}></Essential>
            <BoolOps typeInfo={typeInfo} keyState={key} keyTypeInfo={keyTypeInfo}></BoolOps>
            
        </AppLayout>
    )

}
