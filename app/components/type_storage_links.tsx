import { useState } from "react"
import { Cfgs } from "../interfaces"
import Link from "next/link"


export default function TypeStorageLinks({cfgs}: {cfgs: Cfgs | null}) {

    if(cfgs == null)
    {

        return (
            <div className="flex justify-end pt-4 font-bold">
               No storage types detected
            </div>
        )

    }
    else
    {

      const serverCfgs = cfgs as Cfgs

      //console.log("serverCfgs JSON: \n\n" + JSON.stringify(serverCfgs, null, 2))

      //const hasBoolType = serverCfgs.allTypes || serverCfgs.boolType

      //console.log("hasBoolType: " + hasBoolType)

      //{hasBoolType &&

      return (

          <div>

          {/*Mutable Types*/}

          <div className="flex justify-end pb-2 font-bold">
            Mut Types
          </div>

          {/*Scalars & Misc*/}

          {(serverCfgs.allTypes || serverCfgs.boolType) &&
            <div className="flex justify-end pb-1">
              <Link href="/storage/bool_type" className="text-blue-600 visited:text-purple-600">bool</Link>
            </div>
          }
          {(serverCfgs.allTypes || serverCfgs.charType) &&
            <div className="flex justify-end pb-1">
              <Link href="/storage/char_type" className="text-blue-600 visited:text-purple-600">char</Link>
            </div>
          }
          {(serverCfgs.allTypes || serverCfgs.f32Type) &&
            <div className="flex justify-end pb-1">
              <Link href="/storage/f32_type" className="text-blue-600 visited:text-purple-600">f32</Link>
            </div>
          }
          {(serverCfgs.allTypes || serverCfgs.f64Type) &&
            <div className="flex justify-end pb-1">
              <Link href="/storage/f64_type" className="text-blue-600 visited:text-purple-600">f64</Link>
            </div>
          }
          {(serverCfgs.allTypes || serverCfgs.i8Type) &&
            <div className="flex justify-end pb-1">
              <Link href="/storage/i8_type" className="text-blue-600 visited:text-purple-600">i8</Link>
            </div>
          }
          {(serverCfgs.allTypes || serverCfgs.i16Type) &&
            <div className="flex justify-end pb-1">
              <Link href="/storage/i16_type" className="text-blue-600 visited:text-purple-600">i16</Link>
            </div>
          }
          {(serverCfgs.allTypes || serverCfgs.i32Type) &&
            <div className="flex justify-end pb-1">
              <Link href="/storage/i32_type" className="text-blue-600 visited:text-purple-600">i32</Link>
            </div>
          }
          {(serverCfgs.allTypes || serverCfgs.i64Type) &&
          <div className="flex justify-end pb-1">
            <Link href="/storage/i64_type" className="text-blue-600 visited:text-purple-600">i64</Link>
          </div>
          }
          {(serverCfgs.allTypes || serverCfgs.i128Type) &&
          <div className="flex justify-end pb-1">
            <Link href="/storage/i128_type" className="text-blue-600 visited:text-purple-600">i128</Link>
          </div>
          }
          {(serverCfgs.allTypes || serverCfgs.stringType) &&
          <div className="flex justify-end pb-1">
            <Link href="/storage/string_type" className="text-blue-600 visited:text-purple-600">String</Link>
          </div>
          }
          {(serverCfgs.allTypes || serverCfgs.u8Type) &&
            <div className="flex justify-end pb-1">
              <Link href="/storage/u8_type" className="text-blue-600 visited:text-purple-600">u8</Link>
            </div>
          }
          {(serverCfgs.allTypes || serverCfgs.u16Type) &&
            <div className="flex justify-end pb-1">
              <Link href="/storage/u16_type" className="text-blue-600 visited:text-purple-600">u16</Link>
            </div>
          }
          {(serverCfgs.allTypes || serverCfgs.u32Type) &&
            <div className="flex justify-end pb-1">
              <Link href="/storage/u32_type" className="text-blue-600 visited:text-purple-600">u32</Link>
            </div>
          }
          {(serverCfgs.allTypes || serverCfgs.u64Type) &&
            <div className="flex justify-end pb-1">
              <Link href="/storage/u64_type" className="text-blue-600 visited:text-purple-600">u64</Link>
            </div>
          }
          {(serverCfgs.allTypes || serverCfgs.u128Type) &&
            <div className="flex justify-end pb-1">
              <Link href="/storage/u128_type" className="text-blue-600 visited:text-purple-600">u128</Link>
            </div>
          }
          {(serverCfgs.allTypes || serverCfgs.whateverType) &&
            <div className="flex justify-end pb-1">
              <Link href="/storage/whatever_type" className="text-blue-600 visited:text-purple-600">Whatever</Link>
            </div>
          }

          {/*Vecs*/}

          {/*(serverCfgs.allTypes || serverCfgs.vecBoolType) &&*/}
          {(serverCfgs.allTypes || serverCfgs.vecBoolType) &&
          <div className="flex justify-end pb-1">
            <Link href="/storage/vec_bool_type" className="text-blue-600 visited:text-purple-600">Vec_bool</Link>
          </div>
          }
          {(serverCfgs.allTypes || serverCfgs.vecF32Type) &&
          <div className="flex justify-end pb-1">
            <Link href="/storage/vec_f32_type" className="text-blue-600 visited:text-purple-600">Vec_f32</Link>
          </div>
          }
          {(serverCfgs.allTypes || serverCfgs.vecF64Type) &&
          <div className="flex justify-end pb-1">
            <Link href="/storage/vec_f64_type" className="text-blue-600 visited:text-purple-600">Vec_f64</Link>
          </div>
          }
          {(serverCfgs.allTypes || serverCfgs.vecI8Type) &&
          <div className="flex justify-end pb-1">
            <Link href="/storage/vec_i8_type" className="text-blue-600 visited:text-purple-600">Vec_i8</Link>
          </div>
          }
          {(serverCfgs.allTypes || serverCfgs.vecI16Type) &&
          <div className="flex justify-end pb-1">
            <Link href="/storage/vec_i16_type" className="text-blue-600 visited:text-purple-600">Vec_i16</Link>
          </div>
          }
          {(serverCfgs.allTypes || serverCfgs.vecI32Type) &&
          <div className="flex justify-end pb-1">
            <Link href="/storage/vec_i32_type" className="text-blue-600 visited:text-purple-600">Vec_i32</Link>
          </div>
          }
          {(serverCfgs.allTypes || serverCfgs.vecI64Type) &&
          <div className="flex justify-end pb-1">
            <Link href="/storage/vec_i64_type" className="text-blue-600 visited:text-purple-600">Vec_i64</Link>
          </div>
          }
          {(serverCfgs.allTypes || serverCfgs.vecI128Type) &&
          <div className="flex justify-end pb-1">
            <Link href="/storage/vec_i128_type" className="text-blue-600 visited:text-purple-600">Vec_i128</Link>
          </div>
          }
          {(serverCfgs.allTypes || serverCfgs.vecStringType) &&
          <div className="flex justify-end pb-1">
            <Link href="/storage/vec_string_type" className="text-blue-600 visited:text-purple-600">Vec_String</Link>
          </div>
          }
          {(serverCfgs.allTypes || serverCfgs.vecU8Type) &&
          <div className="flex justify-end pb-1">
            <Link href="/storage/vec_u8_type" className="text-blue-600 visited:text-purple-600">Vec_u8</Link>
          </div>
          }
          {(serverCfgs.allTypes || serverCfgs.vecU16Type) &&
          <div className="flex justify-end pb-1">
            <Link href="/storage/vec_u16_type" className="text-blue-600 visited:text-purple-600">Vec_u16</Link>
          </div>
          }
          {(serverCfgs.allTypes || serverCfgs.vecU32Type) &&
          <div className="flex justify-end pb-1">
            <Link href="/storage/vec_u32_type" className="text-blue-600 visited:text-purple-600">Vec_u32</Link>
          </div>
          }
          {(serverCfgs.allTypes || serverCfgs.vecU64Type) &&
          <div className="flex justify-end pb-1">
            <Link href="/storage/vec_u64_type" className="text-blue-600 visited:text-purple-600">Vec_u64</Link>
          </div>
          }
          {(serverCfgs.allTypes || serverCfgs.vecU128Type) &&
          <div className="flex justify-end pb-1">
            <Link href="/storage/vec_u128_type" className="text-blue-600 visited:text-purple-600">Vec_u128</Link>
          </div>
          }
          {(serverCfgs.allTypes || serverCfgs.vecWhateverType) &&
          <div className="flex justify-end pb-2">
            <Link href="/storage/vec_whatever_type" className="text-blue-600 visited:text-purple-600">Vec_Whatever</Link>
          </div>
          }

          {/*Immutable Types*/}

          {/*
          <div className="flex justify-end pb-2 font-bold">
            Immut Types
          </div>

          <div className="flex justify-end pb-1">
            immut_bool
          </div>
          <div className="flex justify-end pb-1">
            immut_char
          </div>
          <div className="flex justify-end pb-1">
            immut_f32
          </div>
          <div className="flex justify-end pb-1">
            immut_f64
          </div>
          <div className="flex justify-end pb-1">
            immut_i8
          </div>
          <div className="flex justify-end pb-1">
            immut_i16
          </div>
          <div className="flex justify-end pb-1">
            immut_i32
          </div>
          <div className="flex justify-end pb-1">
            immut_i64
          </div>
          <div className="flex justify-end pb-1">
            immut_i128
          </div>*}

          {/*<div className="flex justify-end pb-1">
            immut_String
          </div>*/}
          {/*
          <div className="flex justify-end pb-1">
            arc_str
          </div>
          <div className="flex justify-end pb-1">
            immut_u8
          </div>
          <div className="flex justify-end pb-1">
            immut_u16
          </div>
          <div className="flex justify-end pb-1">
            immut_u32
          </div>
          <div className="flex justify-end pb-1">
            immut_u64
          </div>
          <div className="flex justify-end pb-1">
            immut_u128
          </div>*/}

          {/*<<div className="flex justify-end pb-1">
            immut_Whatever
          </div>*/}

          {/*<div className="flex justify-end pb-1">
            QusaiImmutWhatever
          </div>*/}

          {/* arc_arrays */}

          {/*<div className="flex justify-end pb-1">
            arc_array_bool
          </div>
          <div className="flex justify-end pb-1">
            arc_array_char
          </div>
          <div className="flex justify-end pb-1">
            arc_array_f32
          </div>
          <div className="flex justify-end pb-1">
            arc_array_f64
          </div>
          <div className="flex justify-end pb-1">
            arc_array_i8
          </div>
          <div className="flex justify-end pb-1">
            arc_array_i16
          </div>
          <div className="flex justify-end pb-1">
            arc_array_i32
          </div>
          <div className="flex justify-end pb-1">
            arc_array_i64
          </div>
          <div className="flex justify-end pb-1">
            arc_array_i128
          </div>*/}

          {/*<div className="flex justify-end pb-1">
            arc_str
          </div>*/}

          {/*<div className="flex justify-end pb-1">
            arc_array_u8
          </div>
          <div className="flex justify-end pb-1">
            arc_array_u16
          </div>
          <div className="flex justify-end pb-1">
            arc_array_u32
          </div>
          <div className="flex justify-end pb-1">
            arc_array_u64
          </div>
          <div className="flex justify-end pb-1">
            arc_array_u128
          </div>
          <div className="flex justify-end pb-1">
            arc_array_QusaiImmutWhatever
          </div>*/}

        </div>

      )

    }

}