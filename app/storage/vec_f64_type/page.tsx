"use client"

import AppLayout from "@/app/app_layout";
import { SetStateAction, useState } from "react";

import { F64StoredTypeInfo, VecF64StoredTypeInfo } from "@/app/type_info/stored_type_info";
import Essential from "@/app/components/essential";
import { TheAppState } from "@/app/app_state";
import TitledSectionLayout from "@/app/titled_section_layout";
import VecMethods from "@/app/components/collections/vec_methods";

export default function VecF64Type() {

    const [key, setKey] = useState('')

    const typeInfo = new VecF64StoredTypeInfo()

    const keyTypeInfo = TheAppState.KeyTypes.vecF64KeyTypeInfo

    const itemTypeInfo = new F64StoredTypeInfo()

    return (
        <AppLayout title={'Vec f64 Type'}>
            <Essential typeInfo={typeInfo} keyState={key} setKeyState={setKey} keyTypeInfo={keyTypeInfo}></Essential>
            <TitledSectionLayout title={"Vec f64 Methods"}>
                <VecMethods typeInfo={typeInfo} keyState={key} keyTypeInfo={keyTypeInfo} itemTypeInfo={itemTypeInfo}></VecMethods>
            </TitledSectionLayout> 
        </AppLayout>
    )

}
