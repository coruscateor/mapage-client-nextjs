"use client"

import AppLayout from "@/app/app_layout";
import { SetStateAction, useState } from "react";

import { I128StoredTypeInfo, VecI128StoredTypeInfo } from "@/app/type_info/stored_type_info";
import Essential from "@/app/components/essential";
import { TheAppState } from "@/app/app_state";
import TitledSectionLayout from "@/app/titled_section_layout";
import VecMethods from "@/app/components/collections/vec_methods";

export default function VecI128Type() {

    const [key, setKey] = useState('')

    const typeInfo = new VecI128StoredTypeInfo()

    const keyTypeInfo = TheAppState.KeyTypes.vecI128KeyTypeInfo

    const itemTypeInfo = new I128StoredTypeInfo()

    return (
        <AppLayout title={'Vec i128 Type'}>
            <Essential typeInfo={typeInfo} keyState={key} setKeyState={setKey} keyTypeInfo={keyTypeInfo}></Essential>
            <TitledSectionLayout title={"Vec i128 Methods"}>
                <VecMethods typeInfo={typeInfo} keyState={key} keyTypeInfo={keyTypeInfo} itemTypeInfo={itemTypeInfo}></VecMethods>
            </TitledSectionLayout>
        </AppLayout>
    )

}
