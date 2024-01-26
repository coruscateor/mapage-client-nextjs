"use client"

import AppLayout from "@/app/app_layout";
import { SetStateAction, useState } from "react";

import { U16StoredTypeInfo, VecU16StoredTypeInfo } from "@/app/type_info/stored_type_info";
import Essential from "@/app/components/essential";
import { TheAppState } from "@/app/app_state";
import TitledSectionLayout from "@/app/titled_section_layout";
import VecMethods from "@/app/components/collections/vec_methods";

export default function VecU16Type() {

    const [key, setKey] = useState('')

    const typeInfo = new VecU16StoredTypeInfo()

    const keyTypeInfo = TheAppState.KeyTypes.vecU16KeyTypeInfo

    const itemTypeInfo = new U16StoredTypeInfo()

    return (
        <AppLayout title={'Vec u16 Type'}>
            <Essential typeInfo={typeInfo} keyState={key} setKeyState={setKey} keyTypeInfo={keyTypeInfo}></Essential>
            <TitledSectionLayout title={"Vec u16 Methods"}>
                <VecMethods typeInfo={typeInfo} keyState={key} keyTypeInfo={keyTypeInfo} itemTypeInfo={itemTypeInfo}></VecMethods>
            </TitledSectionLayout>
        </AppLayout>
    )

}
