"use client"

import AppLayout from "@/app/app_layout";
import { SetStateAction, useState } from "react";

import { VecWhateverStoredTypeInfo, WhateverStoredTypeInfo } from "@/app/type_info/stored_type_info";
import Essential from "@/app/components/essential";
import { TheAppState } from "@/app/app_state";
import TitledSectionLayout from "@/app/titled_section_layout";
import VecMethods from "@/app/components/collections/vec_methods";

export default function VecWhateverType() {

    const [key, setKey] = useState('')

    const typeInfo = new VecWhateverStoredTypeInfo()

    const keyTypeInfo = TheAppState.KeyTypes.vecWhateverKeyTypeInfo

    const itemTypeInfo = new WhateverStoredTypeInfo()

    return (
        <AppLayout title={'Vec Whatever Type'}>
            <Essential typeInfo={typeInfo} keyState={key} setKeyState={setKey} keyTypeInfo={keyTypeInfo}></Essential>
            <TitledSectionLayout title={"Vec Whatever Methods"}>
                <VecMethods typeInfo={typeInfo} keyState={key} keyTypeInfo={keyTypeInfo} itemTypeInfo={itemTypeInfo}></VecMethods>
            </TitledSectionLayout>
        </AppLayout>
    )

}
