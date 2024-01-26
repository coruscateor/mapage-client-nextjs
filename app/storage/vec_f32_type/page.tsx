"use client"

import AppLayout from "@/app/app_layout";
import { SetStateAction, useState } from "react";

import { F32StoredTypeInfo, VecF32StoredTypeInfo } from "@/app/type_info/stored_type_info";
import Essential from "@/app/components/essential";
import { TheAppState } from "@/app/app_state";
import TitledSectionLayout from "@/app/titled_section_layout";
import VecMethods from "@/app/components/collections/vec_methods";

export default function VecF32Type() {

    const [key, setKey] = useState('')

    const typeInfo = new VecF32StoredTypeInfo()

    const keyTypeInfo = TheAppState.KeyTypes.vecF32KeyTypeInfo

    const itemTypeInfo = new F32StoredTypeInfo()

    return (
        <AppLayout title={'Vec f32 Type'}>
            <Essential typeInfo={typeInfo} keyState={key} setKeyState={setKey} keyTypeInfo={keyTypeInfo}></Essential>
            <TitledSectionLayout title={"Vec f32 Methods"}>
                <VecMethods typeInfo={typeInfo} keyState={key} keyTypeInfo={keyTypeInfo} itemTypeInfo={itemTypeInfo}></VecMethods>
            </TitledSectionLayout> 
        </AppLayout>
    )

}
