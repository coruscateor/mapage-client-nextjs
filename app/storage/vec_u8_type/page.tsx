"use client"

import AppLayout from "@/app/app_layout";
import { SetStateAction, useState } from "react";

import { U8StoredTypeInfo, VecU8StoredTypeInfo } from "@/app/type_info/stored_type_info";
import Essential from "@/app/components/essential";
import { TheAppState } from "@/app/app_state";
import TitledSectionLayout from "@/app/titled_section_layout";
import VecMethods from "@/app/components/collections/vec_methods";

export default function VecU8Type() {

    const [key, setKey] = useState('')

    const typeInfo = new VecU8StoredTypeInfo()

    const keyTypeInfo = TheAppState.KeyTypes.vecU8KeyTypeInfo

    const itemTypeInfo = new U8StoredTypeInfo()

    return (
        <AppLayout title={'Vec u8 Type'}>
            <Essential typeInfo={typeInfo} keyState={key} setKeyState={setKey} keyTypeInfo={keyTypeInfo}></Essential>
            <TitledSectionLayout title={"Vec u8 Methods"}>
                <VecMethods typeInfo={typeInfo} keyState={key} keyTypeInfo={keyTypeInfo} itemTypeInfo={itemTypeInfo}></VecMethods>
            </TitledSectionLayout>
        </AppLayout>
    )

}
