"use client"

import AppLayout from "@/app/app_layout";
import { TheAppState } from "@/app/app_state";
import Essential from "@/app/components/essential";
import FloatOps from "@/app/components/ops/float_ops";
import TitledSectionLayout from "@/app/titled_section_layout";
import { F32StoredTypeInfo } from "@/app/type_info/stored_type_info";
import { useState } from "react";

export default function F32Type() {

    const [key, setKey] = useState('');

    const typeInfo = new F32StoredTypeInfo()

    const keyTypeInfo = TheAppState.KeyTypes.f32KeyTypeInfo

    return (
        <AppLayout title={'f32 Type'}>
            <Essential typeInfo={typeInfo} keyState={key} setKeyState={setKey} keyTypeInfo={keyTypeInfo}></Essential>
            <TitledSectionLayout title={"f32 Ops"}>
                <FloatOps typeInfo={typeInfo} keyState={key} keyTypeInfo={keyTypeInfo}></FloatOps>
            </TitledSectionLayout>
        </AppLayout>
    )

}
