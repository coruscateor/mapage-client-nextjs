
import { StoredTypeInfo } from "@/app/type_info/stored_type_info";
import { Dispatch, SetStateAction, useState } from "react";

import { AppState } from "@/app/app_state";

import SimpleQuery from "./simple_query";
import ExternalResultStateQuery from "./external_result_state_query";
import { getStringArray } from "@/app/json_funcs";
import KeydSimpleParamQuery from "./keyd_single_param_query";
import KeydMultiParamQuery from "./keyd_multi_param_query";
import { ParamComps } from "@/app/param_comps";
import { ParamComp } from "@/app/param_comp";
import { IdedKey, idByIndex } from "@/app/iding_stuff";

import IdedKeysList from "./ided_keys_list";
import TitledSectionLayout from "../titled_section_layout";

//<button className="btn btn-primary" onClick={on_connect}>Connect</button>

//lcTypeName: string

export default function Essential({typeInfo, keyState, setKeyState, keyTypeInfo}: {typeInfo: StoredTypeInfo, keyState: string, setKeyState: Dispatch<SetStateAction<string>>, keyTypeInfo: StoredTypeInfo}) {

    //Queries

    const lenQuery = `{
        ${typeInfo.lcTypeName}Len
    }`
    
    //const lenLabel = `${typeInfo.lcTypeName}Len`

    const lenLabel = typeInfo.lcTypeName + 'Len'

    //console.log('lenLabel: ' + lenLabel)

    const isEpmtyQuery = `{
        ${typeInfo.lcTypeName}IsEmpty
    }`

    const isEmptyLabel = `${typeInfo.lcTypeName}IsEmpty`
    
    const capacityQuery = `{
        ${typeInfo.lcTypeName}Capacity
    }`

    const capacityLabel = `${typeInfo.lcTypeName}Capacity`

    const getAllKeysQuery = `{
        ${typeInfo.lcTypeName}GetAllKeys
    }`

    const getAllKeysLabel = `${typeInfo.lcTypeName}GetAllKeys`

    const [queryGetAllKeysResult, setQueryGetAllKeysResult] = useState('');

    //let keys: string[] = []

    let idedKeys: IdedKey[] = []

    //String

    const containsQuery = `query Contains($key: ${keyTypeInfo.gqlTypeName}!) {
        ${typeInfo.lcTypeName}Contains(key: $key)
    }`

    const containsLabel = `${typeInfo.lcTypeName}Contains`

    //String

    const readQuery = `query Read($key: ${keyTypeInfo.gqlTypeName}!) {
        ${typeInfo.lcTypeName}Read(key: $key)
    }`

    const readLabel = `${typeInfo.lcTypeName}Read`

    //String

    const tryReadQuery = `query TryRead($key: ${keyTypeInfo.gqlTypeName}!) {
	    ${typeInfo.lcTypeName}TryRead(key: $key)
    }`

    const tryReadLabel = `${typeInfo.lcTypeName}TryRead`

    //Mutations

    /*
        boolInsert(key: String!, value: Boolean!): String!
        boolUpdate(key: String!, value: Boolean!): String!
        boolTryReplace(key: String!, value: Boolean!): Boolean
        boolUpsert(key: String!, value: Boolean!): String!
        boolRemove(key: String!): String!
        boolTryRetrieve(key: String!): Boolean
        boolClear: String!
        boolClearAndGetLen: Int!
    */

    //Insert

    //String

    const insertMutation = `mutation Insert($key: ${keyTypeInfo.gqlTypeName}!, $value: ${typeInfo.gqlTypeName}!) {
        ${typeInfo.lcTypeName}Insert(key: $key, value: $value)
    }`

    const insertLabel = `${typeInfo.lcTypeName}Insert`

    const insertParamComps = new ParamComps(insertLabel, new ParamComp("value", 3, typeInfo.jsConversionType))

    //Update

    //String

    const updateMutation = `mutation Update($key: ${keyTypeInfo.gqlTypeName}!, $value: ${typeInfo.gqlTypeName}!) {
        ${typeInfo.lcTypeName}Update(key: $key, value: $value)
    }`

    const updateLabel = `${typeInfo.lcTypeName}Update`

    const updateParamComps = new ParamComps(updateLabel, new ParamComp("value", 3, typeInfo.jsConversionType))

    //TryReplace

    //String

    const tryReplaceMutation = `mutation TryReplace($key: ${keyTypeInfo.gqlTypeName}!, $value: ${typeInfo.gqlTypeName}!) {
        ${typeInfo.lcTypeName}TryReplace(key: $key, value: $value)
    }`

    const tryReplaceLabel = `${typeInfo.lcTypeName}TryReplace`

    const tryReplaceParamComps = new ParamComps(tryReplaceLabel, new ParamComp("value", 3, typeInfo.jsConversionType))

    //Upsert

    //String

    const upsertMutation = `mutation Upsert($key: ${keyTypeInfo.gqlTypeName}!, $value: ${typeInfo.gqlTypeName}!) {
        ${typeInfo.lcTypeName}Upsert(key: $key, value: $value)
    }`

    const upsertLabel = `${typeInfo.lcTypeName}Upsert`

    const upsertParamComps = new ParamComps(upsertLabel, new ParamComp("value", 3, typeInfo.jsConversionType))

    //Remove

    //String

    const removeMutation = `mutation Remove($key: ${keyTypeInfo.gqlTypeName}!) {
        ${typeInfo.lcTypeName}Remove(key: $key)
    }`

    const removeLabel = `${typeInfo.lcTypeName}Remove`

    //TryRetrieve

    //String

    const tryRetrieveMutation = `mutation TryRetrieve($key: ${keyTypeInfo.gqlTypeName}!) {
        ${typeInfo.lcTypeName}TryRetrieve(key: $key)
    }`

    const tryRetrieveLabel = `${typeInfo.lcTypeName}TryRetrieve`

    //Clear

    const clearMutation = `mutation Clear {
        ${typeInfo.lcTypeName}Clear
    }`

    const clearLabel = `${typeInfo.lcTypeName}Clear`

    //ClearAndGetLen

    const clearAndGetLentMutation = `mutation ClearAndGetLen {
        ${typeInfo.lcTypeName}ClearAndGetLen
    }`

    const clearAndGetLenLabel = `${typeInfo.lcTypeName}ClearAndGetLen`
    
    /*query BoolRead($key: String!) {
	boolRead(key: $key)
    }*/

    /*
    {
        "key": ":test"
    }
    */

    /*
    query boolTryRead($key: String!) {
	    boolTryRead(key: $key)
    }
    */

    /*
    query BoolContains($key: String!) {
        boolContains(key: $key)
    }
    */

    //let selected_key: string | null = null

    //const [selectedKey, setSelectedKey] = useState(''); //<string | null>(null);

    if(queryGetAllKeysResult.length > 0)
    {

        let keys = getStringArray(getAllKeysLabel, queryGetAllKeysResult)

        idedKeys = idByIndex(keys)

    }

    function on_click_keys_menu_item(e: React.MouseEvent<HTMLButtonElement>) //HTMLAnchorElement>)
    {

        //const target = e.currentTarget //e.target as any

        //const value = JSON.stringify(target, null, 2)  //target.value //JSON.stringify(target, null, 2) //.name

        //console.log("target.value: " + value)

        //console.log(e.target.children);

        //console.log(e.currentTarget);

        const target = e.target as any

        //console.log("target.innerHTML " + target.innerHTML);

        //selected_key = target.innerHTML

        //setSelectedKey(target.innerHTML)

        setKeyState(target.innerHTML)

    }

    function selected_key_change(e: React.ChangeEvent<HTMLTextAreaElement>) //React.ChangeEvent<HTMLInputElement>)
    {

        //setSelectedKey(e.target.value)

        //setKeyState(e.target.innerHTML)

        setKeyState(e.target.value)

        //console.log('selected_key_change')http://localhost:8000

    }

    function on_clear_keys_result(e: React.MouseEvent<HTMLButtonElement>)
    {

        setQueryGetAllKeysResult('')

        idedKeys = []

    }

    function on_clear_key_state(e: React.MouseEvent<HTMLButtonElement>)
    {

        setKeyState('')

    }

    return (

        <TitledSectionLayout title={"Namespace-Wide Queries And Key Selection"}>

        {/*<div className="flex text-gray-900 flex-col items-center flex-col">
            <div className="flex m-8 font-bold text-3xl w-full content-center">Namespace-wide queries and key selection</div>
            <div className="flex flex-col w-full">*/}

                 {/* Section Title */}
                 {/* Level 1 */}
                 {/* Level 2 */}

                {/*Queries*/}

                <SimpleQuery query={lenQuery} label={lenLabel} result_rows={3}></SimpleQuery>
                <SimpleQuery query={isEpmtyQuery} label={isEmptyLabel} result_rows={3}></SimpleQuery>
                <SimpleQuery query={capacityQuery} label={capacityLabel} result_rows={3}></SimpleQuery>
                <div className="flex mb-8 font-bold text-2xl w-full content-center">Key Parameter</div>
                <ExternalResultStateQuery query={getAllKeysQuery} label={getAllKeysLabel} result_rows={5} queryResultState={queryGetAllKeysResult} setQueryResultState={setQueryGetAllKeysResult} on_clear_result={on_clear_keys_result}></ExternalResultStateQuery>

                {/*
                {idedKeys.length > 0 && 
                    <ul className="menu bg-white rounded-md">
                        {idedKeys.map((idedKey) => {

                            return (
                                <>

                                    <li key={idedKey.id}><button onClick={on_click_keys_menu_item}>{idedKey.key}</button></li>

                                </>
                            )                            

                        })}
                    </ul>
                }
                */}

                <IdedKeysList ided_keys={idedKeys} on_click_menu_item={on_click_keys_menu_item}></IdedKeysList>

                <div className="flex mb-4 flex-row">
                    <div>
                        <button className="btn btn-primary normal-case" onClick={on_clear_key_state}>Clear Key In Use</button>
                    </div>
                </div>

                <label className="mb-1 font-bold" htmlFor="the_key">key in use:</label>

                <textarea id="the_key" className="input input-bordered w-full mb-6 w-full pt-3" value={keyState} onChange={selected_key_change}></textarea>
                

                <KeydSimpleParamQuery query={containsQuery} label={containsLabel} resultRows={3} keyState={keyState}></KeydSimpleParamQuery>
                <KeydSimpleParamQuery query={readQuery} label={readLabel} resultRows={3} keyState={keyState}></KeydSimpleParamQuery>
                <KeydSimpleParamQuery query={tryReadQuery} label={tryReadLabel} resultRows={3} keyState={keyState}></KeydSimpleParamQuery>

                {/*Mutations*/}

                <KeydMultiParamQuery query={insertMutation} label={insertLabel} resultRows={3} keyState={keyState} paramComps={insertParamComps}></KeydMultiParamQuery>
                <KeydMultiParamQuery query={updateMutation} label={updateLabel} resultRows={3} keyState={keyState} paramComps={updateParamComps}></KeydMultiParamQuery>
                <KeydMultiParamQuery query={tryReplaceMutation} label={tryReplaceLabel} resultRows={3} keyState={keyState} paramComps={tryReplaceParamComps}></KeydMultiParamQuery>
                <KeydMultiParamQuery query={upsertMutation} label={upsertLabel} resultRows={3} keyState={keyState} paramComps={upsertParamComps}></KeydMultiParamQuery>

                <KeydSimpleParamQuery query={removeMutation} label={removeLabel} resultRows={3} keyState={keyState}></KeydSimpleParamQuery>
                <KeydSimpleParamQuery query={tryRetrieveMutation} label={tryRetrieveLabel} resultRows={3} keyState={keyState}></KeydSimpleParamQuery>
                <SimpleQuery query={clearMutation} label={clearLabel} result_rows={3}></SimpleQuery>
                <SimpleQuery query={clearAndGetLentMutation} label={clearAndGetLenLabel} result_rows={3}></SimpleQuery>

           {/*} </div>
            </div>*/}

        </TitledSectionLayout>
    )

}

