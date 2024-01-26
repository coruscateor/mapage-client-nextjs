"use client"

import AppLayout from "@/app/app_layout";
import { SetStateAction, useState } from "react";

import { U32StoredTypeInfo, VecU32StoredTypeInfo } from "@/app/type_info/stored_type_info";
import Essential from "@/app/components/essential";
import { TheAppState } from "@/app/app_state";
import TitledSectionLayout from "@/app/titled_section_layout";
import VecMethods from "@/app/components/collections/vec_methods";

export default function VecU32Type() {

    const [key, setKey] = useState('')

    const typeInfo = new VecU32StoredTypeInfo()

    const keyTypeInfo = TheAppState.KeyTypes.vecU32KeyTypeInfo

    const itemTypeInfo = new U32StoredTypeInfo()

    return (
        <AppLayout title={'Vec u32 Type'}>
            <Essential typeInfo={typeInfo} keyState={key} setKeyState={setKey} keyTypeInfo={keyTypeInfo}></Essential>
            <TitledSectionLayout title={"Vec u32 Methods"}>
                <VecMethods typeInfo={typeInfo} keyState={key} keyTypeInfo={keyTypeInfo} itemTypeInfo={itemTypeInfo}></VecMethods>
            </TitledSectionLayout>
        </AppLayout>
    )

}
