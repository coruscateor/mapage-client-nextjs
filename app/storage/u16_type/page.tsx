"use client"

import AppLayout from "@/app/app_layout";
import { TheAppState } from "@/app/app_state";
import Essential from "@/app/components/essential";
import IntegerOps from "@/app/components/ops/interger_ops";
import TitledSectionLayout from "@/app/titled_section_layout";
import { U16StoredTypeInfo } from "@/app/type_info/stored_type_info";
import { useState } from "react";

export default function U16Type() {

    const [key, setKey] = useState('');

    const typeInfo = new U16StoredTypeInfo()

    const keyTypeInfo = TheAppState.KeyTypes.u16KeyTypeInfo

    return (
        <AppLayout title={'u16 Type'}>
            <Essential typeInfo={typeInfo} keyState={key} setKeyState={setKey} keyTypeInfo={keyTypeInfo}></Essential>
            <TitledSectionLayout title={"u16 Ops"}>
                <IntegerOps typeInfo={typeInfo} keyState={key} keyTypeInfo={keyTypeInfo}></IntegerOps>
            </TitledSectionLayout> 
        </AppLayout>
    )

}
