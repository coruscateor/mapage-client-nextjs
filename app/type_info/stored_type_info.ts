import { JsConversionType } from "./js_conversion_type"

export interface StoredTypeInfo
{

    //GraphQL Method naming

    get lcTypeName(): string

    //GraphQL type name

    get gqlTypeName(): string

    //How should the value be converted (if at all) when added to a parameters object so that it's converted to JSON correctly?

    get jsConversionType(): JsConversionType

}

export class BoolStoredTypeInfo
{

    get lcTypeName(): string
    {

        return "bool"

    }

    get gqlTypeName(): string
    {
        
        return "Boolean"

    }

    get jsConversionType(): JsConversionType
    {

        return JsConversionType.Boolean

    }

}

export class CharStoredTypeInfo
{

    get lcTypeName(): string
    {

        return "char"

    }

    get gqlTypeName(): string
    {
        
        return "Char"

    }

    get jsConversionType(): JsConversionType
    {

        return JsConversionType.String

    }

}

export class F32StoredTypeInfo
{

    get lcTypeName(): string
    {

        return "f32"

    }

    get gqlTypeName(): string
    {
        
        return "Float"

    }

    get jsConversionType(): JsConversionType
    {

        return JsConversionType.Number

    }

}

export class F64StoredTypeInfo
{

    get lcTypeName(): string
    {

        return "f64"

    }

    get gqlTypeName(): string
    {
        
        return "Float"

    }

    get jsConversionType(): JsConversionType
    {

        return JsConversionType.Number

    }

}

//Signed Integers

export class I8StoredTypeInfo
{

    get lcTypeName(): string
    {

        return "i8"

    }

    get gqlTypeName(): string
    {
        
        return "Int"

    }

    get jsConversionType(): JsConversionType
    {

        return JsConversionType.Number

    }

}

export class I16StoredTypeInfo
{

    get lcTypeName(): string
    {

        return "i16"

    }

    get gqlTypeName(): string
    {
        
        return "Int"

    }

    get jsConversionType(): JsConversionType
    {

        return JsConversionType.Number

    }

}

export class I32StoredTypeInfo
{

    get lcTypeName(): string
    {

        return "i32"

    }

    get gqlTypeName(): string
    {
        
        return "Int"

    }

    get jsConversionType(): JsConversionType
    {

        return JsConversionType.Number

    }

}

export class I64StoredTypeInfo
{

    get lcTypeName(): string
    {

        return "i64"

    }

    get gqlTypeName(): string
    {
        
        return "Int"

    }

    get jsConversionType(): JsConversionType
    {

        return JsConversionType.Number

    }

}

export class I128StoredTypeInfo
{

    get lcTypeName(): string
    {

        return "i128"

    }

    get gqlTypeName(): string
    {
        
        return "I128Scalar"

    }

    get jsConversionType(): JsConversionType
    {

        /*Unhandled Runtime Error
          TypeError: Do not know how to serialize a BigInt*/

        //return JsConversionType.BigInt

        //return JsConversionType.String

        return JsConversionType.Number

    }

}

export class StringStoredTypeInfo
{

    get lcTypeName(): string
    {

        return "string"

    }

    get gqlTypeName(): string
    {
        
        return "String"

    }

    get jsConversionType(): JsConversionType
    {

        return JsConversionType.String

    }

}

//No isize

//Unsigned Integers

export class U8StoredTypeInfo
{

    get lcTypeName(): string
    {

        return "u8"

    }

    get gqlTypeName(): string
    {
        
        return "Int"

    }

    get jsConversionType(): JsConversionType
    {

        return JsConversionType.Number

    }

}

export class U16StoredTypeInfo
{

    get lcTypeName(): string
    {

        return "u16"

    }

    get gqlTypeName(): string
    {
        
        return "Int"

    }

    get jsConversionType(): JsConversionType
    {

        return JsConversionType.Number

    }

}

export class U32StoredTypeInfo
{

    get lcTypeName(): string
    {

        return "u32"

    }

    get gqlTypeName(): string
    {
        
        return "Int"

    }

    get jsConversionType(): JsConversionType
    {

        return JsConversionType.Number

    }

}

export class U64StoredTypeInfo
{

    get lcTypeName(): string
    {

        return "u64"

    }

    get gqlTypeName(): string
    {
        
        return "Int"

    }

    get jsConversionType(): JsConversionType
    {

        return JsConversionType.Number

    }

}

export class U128StoredTypeInfo
{

    get lcTypeName(): string
    {

        return "u128"

    }

    get gqlTypeName(): string
    {
        
        return "U128Scalar"

    }

    get jsConversionType(): JsConversionType
    {

        /*Unhandled Runtime Error
          TypeError: Do not know how to serialize a BigInt*/

        //return JsConversionType.BigInt

        //return JsConversionType.String

        return JsConversionType.Number

    }

}

//No usize

export class WhateverStoredTypeInfo
{

    get lcTypeName(): string
    {

        return "whatever"

    }

    get gqlTypeName(): string
    {
        
        return "Whatever"

    }

    get jsConversionType(): JsConversionType
    {

        return JsConversionType.Serialise

    }

}

//Collections - Vecs

export class VecBoolStoredTypeInfo
{

    get lcTypeName(): string
    {

        return "vecBool"

    }

    get gqlTypeName(): string
    {
        
        return "[Boolean!]"

    }

    get jsConversionType(): JsConversionType
    {

        return JsConversionType.Serialise

    }

}

export class VecCharStoredTypeInfo
{

    get lcTypeName(): string
    {

        return "vecChar"

    }

    get gqlTypeName(): string
    {
        
        return "[Char!]"

    }

    get jsConversionType(): JsConversionType
    {

        return JsConversionType.Serialise

    }

}

export class VecF32StoredTypeInfo
{

    get lcTypeName(): string
    {

        return "vecF32"

    }

    get gqlTypeName(): string
    {
        
        return "[Float!]"

    }

    get jsConversionType(): JsConversionType
    {

        return JsConversionType.Serialise

    }

}

export class VecF64StoredTypeInfo
{

    get lcTypeName(): string
    {

        return "vecF64"

    }

    get gqlTypeName(): string
    {
        
        return "[Float!]"

    }

    get jsConversionType(): JsConversionType
    {

        return JsConversionType.Serialise

    }

}

//signed integers

export class VecI8StoredTypeInfo
{

    get lcTypeName(): string
    {

        return "vecI8"

    }

    get gqlTypeName(): string
    {
        
        return "[Int!]"

    }

    get jsConversionType(): JsConversionType
    {

        return JsConversionType.Serialise

    }

}

export class VecI16StoredTypeInfo
{

    get lcTypeName(): string
    {

        return "vecI8"

    }

    get gqlTypeName(): string
    {
        
        return "[Int!]"

    }

    get jsConversionType(): JsConversionType
    {

        return JsConversionType.Serialise

    }

}

export class VecI32StoredTypeInfo
{

    get lcTypeName(): string
    {

        return "vecI32"

    }

    get gqlTypeName(): string
    {
        
        return "[Int!]"

    }

    get jsConversionType(): JsConversionType
    {

        return JsConversionType.Serialise

    }

}

export class VecI64StoredTypeInfo
{

    get lcTypeName(): string
    {

        return "vecI64"

    }

    get gqlTypeName(): string
    {
        
        return "[Int!]"

    }

    get jsConversionType(): JsConversionType
    {

        return JsConversionType.Serialise

    }

}

export class VecI128StoredTypeInfo
{

    get lcTypeName(): string
    {

        return "vecI128"

    }

    get gqlTypeName(): string
    {
        
        return "[I128Scalar!]"

    }

    get jsConversionType(): JsConversionType
    {

        return JsConversionType.Serialise

    }

}

export class VecStringStoredTypeInfo
{

    get lcTypeName(): string
    {

        return "vecString"

    }

    get gqlTypeName(): string
    {
        
        return "[String!]"

    }

    get jsConversionType(): JsConversionType
    {

        return JsConversionType.Serialise

    }

}

//No vecISize

//unsigned integers

export class VecU8StoredTypeInfo
{

    get lcTypeName(): string
    {

        return "vecU8"

    }

    get gqlTypeName(): string
    {
        
        return "[Int!]"

    }

    get jsConversionType(): JsConversionType
    {

        return JsConversionType.Serialise

    }

}

export class VecU16StoredTypeInfo
{

    get lcTypeName(): string
    {

        return "vecU16"

    }

    get gqlTypeName(): string
    {
        
        return "[Int!]"

    }

    get jsConversionType(): JsConversionType
    {

        return JsConversionType.Serialise

    }

}

export class VecU32StoredTypeInfo
{

    get lcTypeName(): string
    {

        return "vecU32"

    }

    get gqlTypeName(): string
    {
        
        return "[Int!]"

    }

    get jsConversionType(): JsConversionType
    {

        return JsConversionType.Serialise

    }

}

export class VecU64StoredTypeInfo
{

    get lcTypeName(): string
    {

        return "vecU64"

    }

    get gqlTypeName(): string
    {
        
        return "[Int!]"

    }

    get jsConversionType(): JsConversionType
    {

        return JsConversionType.Serialise

    }

}

export class VecU128StoredTypeInfo
{

    get lcTypeName(): string
    {

        return "vecU128"

    }

    get gqlTypeName(): string
    {
        
        return "[U128Scalar!]"

    }

    get jsConversionType(): JsConversionType
    {

        return JsConversionType.Serialise

    }

}

//No vecUSize

export class VecWhateverStoredTypeInfo
{

    get lcTypeName(): string
    {

        return "vecWhatever"

    }

    get gqlTypeName(): string
    {
        
        return "[Whatever!]"

    }

    get jsConversionType(): JsConversionType
    {

        return JsConversionType.Serialise

    }

}








