"use client"

import AppLayout from "@/app/app_layout";
import { SetStateAction, useState } from "react";

import { BoolStoredTypeInfo, VecBoolStoredTypeInfo } from "@/app/type_info/stored_type_info";
import Essential from "@/app/components/essential";
import { TheAppState } from "@/app/app_state";
import TitledSectionLayout from "@/app/titled_section_layout";
import VecMethods from "@/app/components/collections/vec_methods";
{/*import BoolOps from "@/app/components/ops/bool_ops";*/}

export default function VecBoolType() {

    const [key, setKey] = useState('')

    const typeInfo = new VecBoolStoredTypeInfo()

    const keyTypeInfo = TheAppState.KeyTypes.vecBoolKeyTypeInfo

    const itemTypeInfo = new BoolStoredTypeInfo()

    return (
        <AppLayout title={'Vec bool Type'}>
            <Essential typeInfo={typeInfo} keyState={key} setKeyState={setKey} keyTypeInfo={keyTypeInfo}></Essential>
            {/*<BoolOps typeInfo={typeInfo} keyState={key} keyTypeInfo={keyTypeInfo}></BoolOps>*/}
            <TitledSectionLayout title={"Vec bool Methods"}>
                <VecMethods typeInfo={typeInfo} keyState={key} keyTypeInfo={keyTypeInfo} itemTypeInfo={itemTypeInfo}></VecMethods>
            </TitledSectionLayout> 
        </AppLayout>
    )

}
