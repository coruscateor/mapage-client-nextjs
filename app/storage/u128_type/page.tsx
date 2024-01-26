"use client"

import AppLayout from "@/app/app_layout";
import { TheAppState } from "@/app/app_state";
import Essential from "@/app/components/essential";
import IntegerOps from "@/app/components/ops/interger_ops";
import TitledSectionLayout from "@/app/titled_section_layout";
import { U128StoredTypeInfo } from "@/app/type_info/stored_type_info";
import { useState } from "react";

export default function U128Type() {

    const [key, setKey] = useState('');

    const typeInfo = new U128StoredTypeInfo()

    const keyTypeInfo = TheAppState.KeyTypes.u128KeyTypeInfo

    return (
        <AppLayout title={'u128 Type'}>
            <div className="flex m-8 font-bold text-3xl">Broken - (Deserialised into number)</div>
            <Essential typeInfo={typeInfo} keyState={key} setKeyState={setKey} keyTypeInfo={keyTypeInfo}></Essential>
            <TitledSectionLayout title={"u128 Ops"}>
                <IntegerOps typeInfo={typeInfo} keyState={key} keyTypeInfo={keyTypeInfo}></IntegerOps>
            </TitledSectionLayout> 
        </AppLayout>
    )

}
