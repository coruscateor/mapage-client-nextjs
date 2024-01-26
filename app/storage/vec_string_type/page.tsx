"use client"

import AppLayout from "@/app/app_layout";
import { SetStateAction, useState } from "react";

import { StringStoredTypeInfo, VecStringStoredTypeInfo } from "@/app/type_info/stored_type_info";
import Essential from "@/app/components/essential";
import { TheAppState } from "@/app/app_state";
import TitledSectionLayout from "@/app/titled_section_layout";
import VecMethods from "@/app/components/collections/vec_methods";

export default function VecStringType() {

    const [key, setKey] = useState('')

    const typeInfo = new VecStringStoredTypeInfo()

    const keyTypeInfo = TheAppState.KeyTypes.vecStringKeyTypeInfo

    const itemTypeInfo = new StringStoredTypeInfo()

    return (
        <AppLayout title={'Vec String Type'}>
            <Essential typeInfo={typeInfo} keyState={key} setKeyState={setKey} keyTypeInfo={keyTypeInfo}></Essential>
            <TitledSectionLayout title={"Vec String Methods"}>
                <VecMethods typeInfo={typeInfo} keyState={key} keyTypeInfo={keyTypeInfo} itemTypeInfo={itemTypeInfo}></VecMethods>
            </TitledSectionLayout>
        </AppLayout>
    )

}
