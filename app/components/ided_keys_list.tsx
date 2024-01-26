import { IdedKey } from "../iding_stuff"

export default function IdedKeysList({ided_keys, on_click_menu_item}: {ided_keys: IdedKey[], on_click_menu_item: (e: React.MouseEvent<HTMLButtonElement>) => void})
{

    if(ided_keys.length === 0)
    {

        return (
            <>
            </>
        )

    }

    let listItems: JSX.Element[] = []
    
    ided_keys.map((idedKey) => {

        listItems.push((<li key={idedKey.id}><button onClick={on_click_menu_item}>{idedKey.key}</button></li>))

    })

    return (
        <>
            <div className="flex mb-4 font-bold text-2xl w-full content-center">Found Keys</div>

            <ul className="menu bg-white rounded-md mb-12">{listItems}</ul>
        </>
    )

}

