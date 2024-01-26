import axios, { AxiosResponse } from 'axios';

import { TheAppState } from '../app_state'

export function getCfgs(): Promise<AxiosResponse> //<string, any>>
{

  //''

  //TheAppState.getURL

  /*
  const data: string = `{
    "query": "{
      getAllCfgs {
        storeAml
        subStoreAml
        sccHashmapNamespaces
        dashmapNamespaces
        allTypes
        boolType
        charType
        f32Type
        f64Type
        i8Type
        i16Type
        i32Type
        i64Type
        i128Type
        isizeType
        stringType
        u8Type
        u16Type
        u32Type
        u64Type
        u128Type
        usizeType
        whateverType
        selectedTypeType
        selectedTypeIoType
        allKeyTypesString
        allKeyTypesArcString
        boolKeyTypeString
        boolKeyTypeArcString
        charKeyTypeString
        charKeyTypeArcString
        f32KeyTypeString
        f32KeyTypeArcString
        f64KeyTypeString
        f64KeyTypeArcString
        i8KeyTypeString
        i8KeyTypeArcString
        i16KeyTypeString
        i16KeyTypeArcString
        i32KeyTypeString
        i32KeyTypeArcString
        i64KeyTypeString
        i64KeyTypeArcString
        i128KeyTypeString
        i128KeyTypeArcString
        isizeKeyTypeString
        isizeKeyTypeArcString
        selectedRypeKeyTypeString
        selectedTypeKeyTypeArcString
        stringKeyTypeString
        stringKeyTypeArcString
        u8KeyTypeString
        u8KeyTypeArcString
        u16KeyTypeString
        u16KeyTypeArcString
        u32KeyTypeString
        u32KeyTypeArcString
        u64KeyTypeString
        u64KeyTypeArcString
        u128KeyTypeString
        u128KeyTypeArcString
        usizeKeyTypeString
        usizeKeyTypeArcString
        whateverKeyTypeString
        whateverKeyTypeArcString
      }
    }"
  }`.replace("/\r?\n|\r/g", " ")
  */

  //const data: string = '{ "query": "{ getAllCfgs { storeAml }}" }'

  /*
  const data: string = `{ "query": "{ getAllCfgs { storeAml }
  }" 
  }`
  */

  /*
  const data = `{
    getAllCfgs {
      storeAml
      subStoreAml
      sccHashmapNamespaces
      dashmapNamespaces
      allTypes
      boolType
      charType
      f32Type
      f64Type
      i8Type
      i16Type
      i32Type
      i64Type
      i128Type
      isizeType
      stringType
      u8Type
      u16Type
      u32Type
      u64Type
      u128Type
      usizeType
      whateverType
      selectedTypeType
      selectedTypeIoType
      allKeyTypesString
      allKeyTypesArcString
      boolKeyTypeString
      boolKeyTypeArcString
      charKeyTypeString
      charKeyTypeArcString
      f32KeyTypeString
      f32KeyTypeArcString
      f64KeyTypeString
      f64KeyTypeArcString
      i8KeyTypeString
      i8KeyTypeArcString
      i16KeyTypeString
      i16KeyTypeArcString
      i32KeyTypeString
      i32KeyTypeArcString
      i64KeyTypeString
      i64KeyTypeArcString
      i128KeyTypeString
      i128KeyTypeArcString
      isizeKeyTypeString
      isizeKeyTypeArcString
      selectedRypeKeyTypeString
      selectedTypeKeyTypeArcString
      stringKeyTypeString
      stringKeyTypeArcString
      u8KeyTypeString
      u8KeyTypeArcString
      u16KeyTypeString
      u16KeyTypeArcString
      u32KeyTypeString
      u32KeyTypeArcString
      u64KeyTypeString
      u64KeyTypeArcString
      u128KeyTypeString
      u128KeyTypeArcString
      usizeKeyTypeString
      usizeKeyTypeArcString
      whateverKeyTypeString
      whateverKeyTypeArcString
    }
  }`
  */

  const data = `{
    getCfgs {
      storeAml
      subStoreAml
      sccHashmapNamespaces
      dashmapNamespaces
      allTypes
      boolType
      charType
      f32Type
      f64Type
      i8Type
      i16Type
      i32Type
      i64Type
      i128Type
      isizeType
      stringType
      u8Type
      u16Type
      u32Type
      u64Type
      u128Type
      usizeType
      whateverType
      selectedTypeType
      vecBoolType
      vecCharType
      vecF32Type
      vecF64Type
      vecI8Type
      vecI16Type
      vecI32Type
      vecI64Type
      vecI128Type
      vecIsizeType
      vecU8Type
      vecU16Type
      vecU32Type
      vecU64Type
      vecU128Type
      vecUsizeType
      vecStringType
      vecWhateverType
      vecSelectedType
      allKeyTypesString
      allKeyTypesArcString
    }
  }`

  //selectedTypeIoType
  
  //console.log("getCfgs query:")
  
  //console.log(data)

  //TheAppState.getURL

  return axios.post('', { query: data }) as Promise<AxiosResponse> //<string, any>>

    /*
    , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
      */

      /*
      return axios({
        method: 'post',
        //url: url,
        data: `{
          getAllCfgs {
            storeAml
            subStoreAml
            sccHashmapNamespaces
            dashmapNamespaces
            allTypes
            boolType
            charType
            f32Type
            f64Type
            i8Type
            i16Type
            i32Type
            i64Type
            i128Type
            isizeType
            stringType
            u8Type
            u16Type
            u32Type
            u64Type
            u128Type
            usizeType
            whateverType
            selectedTypeType
            selectedTypeIoType
            allKeyTypesString
            allKeyTypesArcString
            boolKeyTypeString
            boolKeyTypeArcString
            charKeyTypeString
            charKeyTypeArcString
            f32KeyTypeString
            f32KeyTypeArcString
            f64KeyTypeString
            f64KeyTypeArcString
            i8KeyTypeString
            i8KeyTypeArcString
            i16KeyTypeString
            i16KeyTypeArcString
            i32KeyTypeString
            i32KeyTypeArcString
            i64KeyTypeString
            i64KeyTypeArcString
            i128KeyTypeString
            i128KeyTypeArcString
            isizeKeyTypeString
            isizeKeyTypeArcString
            selectedRypeKeyTypeString
            selectedTypeKeyTypeArcString
            stringKeyTypeString
            stringKeyTypeArcString
            u8KeyTypeString
            u8KeyTypeArcString
            u16KeyTypeString
            u16KeyTypeArcString
            u32KeyTypeString
            u32KeyTypeArcString
            u64KeyTypeString
            u64KeyTypeArcString
            u128KeyTypeString
            u128KeyTypeArcString
            usizeKeyTypeString
            usizeKeyTypeArcString
            whateverKeyTypeString
            whateverKeyTypeArcString
          }
        }`
    }) as Promise<AxiosResponse<string, any>>;
    */
}

