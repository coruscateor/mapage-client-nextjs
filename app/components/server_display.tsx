

export default function ServerDisplay({serverURL}: {serverURL: string}) {

    if(serverURL.length < 1)
    {

        return (
            <div>No Server URL</div>
        )

    }
    else
    {

        return (
            <div>Server: {serverURL}</div>
        )

    }

}

