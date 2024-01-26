"use client"

import AppLayout from "@/app/app_layout";
import { TheAppState } from "@/app/app_state";
import Essential from "@/app/components/essential";
import { CharStoredTypeInfo } from "@/app/type_info/stored_type_info";
import { useState } from "react";

export default function CharType() {

    const [key, setKey] = useState('');

    const typeInfo = new CharStoredTypeInfo()

    const keyTypeInfo = TheAppState.KeyTypes.boolKeyTypeInfo

    return (
        <AppLayout title={'char Type'}>
            <Essential typeInfo={typeInfo} keyState={key} setKeyState={setKey} keyTypeInfo={keyTypeInfo}></Essential>
            
        </AppLayout>
    )

}
