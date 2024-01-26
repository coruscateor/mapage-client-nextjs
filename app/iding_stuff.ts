
export class IdedKey
{

    //private readonly _key: string
    //private readonly _id: number

    readonly key: string
    readonly id: number

    constructor(key: string, id: number)
    {

        this.key = key

        this.id = id

        //this._key = key

        //this._id = id

    }

    /*
    get key()
    {

        return this._key

    }

    get id()
    {

        return this._id

    }
    */
   
}

export function idByIndex(keys: string[]): IdedKey[]
{

    let idKeys: IdedKey[] = []

    keys.forEach((key, index) => {

        idKeys.push(new IdedKey(key, index))

    })

    return idKeys

}
