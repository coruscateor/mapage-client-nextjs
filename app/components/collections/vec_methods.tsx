import { StoredTypeInfo } from "@/app/type_info/stored_type_info";
import KeydSimpleParamQuery from "../keyd_single_param_query";
import { Dispatch, SetStateAction } from "react";
import { ParamComps } from "@/app/param_comps";
import { ParamComp } from "@/app/param_comp";
import KeydMultiParamQuery from "../keyd_multi_param_query";
import ReadCapacity from "./read_capacity";
import ReadLen from "./read_len";
import ReadIsEmpty from "./read_is_empty";
import ReadFirst from "./read_first";
import ReadLast from "./read_last";
import ReadBinarySearch from "./read_binary_search";
import ReadIndex from "./read_index";
import InsertNew from "./insert_new";
import InsertWithCapacity from "./insert_with_capacity";
import UpdateIndexMut from "./update_index_mut";
import UpdateReserve from "./update_reserve";
import UpdateReserveExact from "./update_reserve_exact";
import UpdateTryReserve from "./update_try_reserve";
import UpdateTryReserveExact from "./update_try_reserve_exact";
import UpdateShrinkToFit from "./update_shrink_to_fit";
import UpdateShrinkTo from "./update_shrink_to";
import UpdateTruncate from "./update_truncate";
import UpdateInsert from "./update_insert";
import UpdatePush from "./update_push";
import UpdatePop from "./update_pop";
import UpdateAppend from "./update_append";
import UpdateClear from "./update_clear";
import UpdateSplitOff from "./update_split_off";
import UpdateResize from "./update_resize";
import UpdateDedup from "./update_dedup";
import UpdateSortUnstable from "./update_sort_unstable";
import UpdateRotateLeft from "./update_rotate_left";
import UpdateFill from "./update_fill";
import UpdateSort from "./update_sort";
import UpdateSwap from "./update_swap";
import UpdateRetrieveContents from "./update_retrieve_contents";

export default function VecMethods({typeInfo, keyState, keyTypeInfo, itemTypeInfo}: {typeInfo: StoredTypeInfo, keyState: string, keyTypeInfo: StoredTypeInfo, itemTypeInfo: StoredTypeInfo})
{
    
   return (
        <>

            {/* Reads */}

            <ReadCapacity typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></ReadCapacity>
            <ReadLen typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></ReadLen>
            <ReadIsEmpty typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></ReadIsEmpty>
            <ReadFirst typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></ReadFirst>
            <ReadLast typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></ReadLast>
            <ReadBinarySearch typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></ReadBinarySearch>
            <ReadIndex typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></ReadIndex>

            {/* Writes */}

            <InsertNew typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></InsertNew>
            <InsertWithCapacity typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></InsertWithCapacity>
            <UpdateIndexMut typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3} itemTypeInfo={itemTypeInfo}></UpdateIndexMut>
            <UpdateReserve typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></UpdateReserve>
            <UpdateReserveExact typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></UpdateReserveExact>
            <UpdateTryReserve typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></UpdateTryReserve>
            <UpdateTryReserveExact typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></UpdateTryReserveExact>
            <UpdateShrinkToFit typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></UpdateShrinkToFit>
            <UpdateShrinkTo typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></UpdateShrinkTo>
            <UpdateTruncate typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></UpdateTruncate>
            <UpdateInsert typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3} itemTypeInfo={itemTypeInfo}></UpdateInsert>
            <UpdatePush typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3} itemTypeInfo={itemTypeInfo}></UpdatePush>
            <UpdatePop typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></UpdatePop>
            <UpdateAppend typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></UpdateAppend>
            <UpdateClear typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></UpdateClear>
            <UpdateSplitOff typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></UpdateSplitOff>
            <UpdateResize typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3} itemTypeInfo={itemTypeInfo}></UpdateResize>
            <UpdateDedup typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></UpdateDedup>
            <UpdateSortUnstable typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></UpdateSortUnstable>
            <UpdateRotateLeft typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></UpdateRotateLeft>
            <UpdateFill typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3} itemTypeInfo={itemTypeInfo}></UpdateFill>
            <UpdateSort typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></UpdateSort>
            <UpdateSwap typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></UpdateSwap>
            <UpdateRetrieveContents typeInfo={typeInfo} keyState={keyState} keyTypeInfo={keyTypeInfo} resultRows={3}></UpdateRetrieveContents>
            
        </>
    )

}