"use client"

import AppLayout from "@/app/app_layout";
import { SetStateAction, useState } from "react";

import { I16StoredTypeInfo, VecI16StoredTypeInfo } from "@/app/type_info/stored_type_info";
import Essential from "@/app/components/essential";
import { TheAppState } from "@/app/app_state";
import TitledSectionLayout from "@/app/titled_section_layout";
import VecMethods from "@/app/components/collections/vec_methods";

export default function VecI16Type() {

    const [key, setKey] = useState('')

    const typeInfo = new VecI16StoredTypeInfo()

    const keyTypeInfo = TheAppState.KeyTypes.vecI16KeyTypeInfo

    const itemTypeInfo = new I16StoredTypeInfo()

    return (
        <AppLayout title={'Vec i16 Type'}>
            <Essential typeInfo={typeInfo} keyState={key} setKeyState={setKey} keyTypeInfo={keyTypeInfo}></Essential>
            <TitledSectionLayout title={"Vec i16 Methods"}>
                <VecMethods typeInfo={typeInfo} keyState={key} keyTypeInfo={keyTypeInfo} itemTypeInfo={itemTypeInfo}></VecMethods>
            </TitledSectionLayout> 
        </AppLayout>
    )

}
