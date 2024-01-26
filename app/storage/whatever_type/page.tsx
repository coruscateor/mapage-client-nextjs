"use client"

import AppLayout from "@/app/app_layout";
import { TheAppState } from "@/app/app_state";
import Essential from "@/app/components/essential";
import { WhateverStoredTypeInfo } from "@/app/type_info/stored_type_info";
import { useState } from "react";

export default function WhateverType() {

    const [key, setKey] = useState('');

    const typeInfo = new WhateverStoredTypeInfo()

    const keyTypeInfo = TheAppState.KeyTypes.whateverKeyTypeInfo

    return (
        <AppLayout title={'Whatever Type'}>
            <Essential typeInfo={typeInfo} keyState={key} setKeyState={setKey} keyTypeInfo={keyTypeInfo}></Essential>
        </AppLayout>
    )

}
