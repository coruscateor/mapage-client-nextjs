"use client"

import AppLayout from "@/app/app_layout";
import { SetStateAction, useState } from "react";

import { I64StoredTypeInfo, VecI64StoredTypeInfo } from "@/app/type_info/stored_type_info";
import Essential from "@/app/components/essential";
import { TheAppState } from "@/app/app_state";
import TitledSectionLayout from "@/app/titled_section_layout";
import VecMethods from "@/app/components/collections/vec_methods";

export default function VecI64Type() {

    const [key, setKey] = useState('')

    const typeInfo = new VecI64StoredTypeInfo()

    const keyTypeInfo = TheAppState.KeyTypes.vecI64KeyTypeInfo

    const itemTypeInfo = new I64StoredTypeInfo()

    return (
        <AppLayout title={'Vec i64 Type'}>
            <Essential typeInfo={typeInfo} keyState={key} setKeyState={setKey} keyTypeInfo={keyTypeInfo}></Essential>
            <TitledSectionLayout title={"Vec i64 Methods"}>
                <VecMethods typeInfo={typeInfo} keyState={key} keyTypeInfo={keyTypeInfo} itemTypeInfo={itemTypeInfo}></VecMethods>
            </TitledSectionLayout> 
        </AppLayout>
    )

}
