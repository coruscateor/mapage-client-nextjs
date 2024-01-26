"use client"

import AppLayout from "@/app/app_layout";
import { TheAppState } from "@/app/app_state";
import Essential from "@/app/components/essential";
import { StringStoredTypeInfo } from "@/app/type_info/stored_type_info";
import { useState } from "react";

export default function StringType() {

    const [key, setKey] = useState('');

    const typeInfo = new StringStoredTypeInfo()

    const keyTypeInfo = TheAppState.KeyTypes.stringKeyTypeInfo

    return (
        <AppLayout title={'String Type'}>
            <Essential typeInfo={typeInfo} keyState={key} setKeyState={setKey} keyTypeInfo={keyTypeInfo}></Essential>
            
        </AppLayout>
    )

}
