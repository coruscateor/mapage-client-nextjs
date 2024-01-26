"use client"

import axios, { AxiosResponse } from 'axios';
import { Cfgs, defaultCfgs } from './interfaces';
import { StoredTypeInfo, StringStoredTypeInfo } from './type_info/stored_type_info';
import { KeyTypes } from './type_info/key_types';
//import { useState } from 'react';

/*
export interface plainFunction
{

    (): void;

}
*/

export class AppState
{

    //changeURLlisters: plainFunction[] = new Array<plainFunction>();

    //urlState: string
    //setURLState: React.Dispatch<React.SetStateAction<string>>

    _cfgs: Cfgs | null = null //= defaultCfgs() //= undefined

    //skipLoad: boolean = false

    //_keyType: StoredTypeInfo = new StringStoredTypeInfo()

    _keyTypes = new KeyTypes() 

    constructor()
    {

        if(!this.isClient)
        {

            return

        }

        //this.changeURLlisters 

        //axios.defaults.baseURL = 'http://localhost:8000';

        //axios.defaults.baseURL = '';

        /*
        const [urlState, setURLState] = useState(axios.defaults.baseURL);

        this.urlState = urlState

        this.setURLState = setURLState
        */

        axios.defaults.headers['Content-Type'] = 'application/json'
        
        axios.defaults.headers['Accept'] = 'application/json'

        //this.cfgs = null

        //Actually load the url and cfgs here...

        //try get URL

        const urlRes = sessionStorage.getItem('url') as string | null

        if(urlRes === null)
        {

            axios.defaults.baseURL = ''

        }
        else
        {

            axios.defaults.baseURL = urlRes

        }

        //Try get cfgs

        const res = sessionStorage.getItem("cfgs") as string | null //| undefined

        if(res !== null && res !== undefined && res !== "undefined") //Got some random syntax error here
        {

            const cfgs = JSON.parse(res) as Cfgs

            this._cfgs = cfgs

        }
        
    }

    get getURL(): string
    {

        if(!this.isClient)
        {

            return "Invalid - client only functionality"

        }
        
        //console.log(localStorage === window.localStorage)

        //console.log(sessionStorage === window.sessionStorage)

        return axios.defaults.baseURL as string

        /*
        let res = axios.defaults.baseURL as string

        if(res.length < 1)
        {

            res = sessionStorage.getItem("url") as string

            if(res === null)
            {

                res = ""

            }
            if(res.length > 0)
            {

                axios.defaults.baseURL = res

            }

        }

        return res
        */

    }

    set setURL(url: string)
    {

        if(!this.isClient)
        {

            return
            
        }

        axios.defaults.baseURL = url

        sessionStorage.setItem("url", url)

        //this.skipLoad = true

        //this.onSetURL();

        //this.setURLState(url)

    }

    removeURL()
    {

        axios.defaults.baseURL = ''

        sessionStorage.removeItem("url")

        this.removeCfgs()

    }

    get getCfgs(): Cfgs | null
    {

        if(!this.isClient)
        {

            return this._cfgs
            
        }

        //skip load?

        /*
        if(!this.skipLoad)
        {

            const res = sessionStorage.getItem("cfgs") as string

            if(res !== null)
            {

                const cfgs = JSON.parse(res) as Cfgs

                this.cfgs = cfgs

            }

        }
        */

        return this._cfgs

    }

    set setCfgs(cfgs: Cfgs)
    {

        if(!this.isClient)
        {

            return
            
        }

        this._cfgs = cfgs

        sessionStorage.setItem("cfgs", JSON.stringify(cfgs));

    }

    removeCfgs()
    {

        this._cfgs = null

        sessionStorage.removeItem("cfgs")

    }

    get isClient(): boolean
    {

        return typeof window !== "undefined"

    }

    get KeyTypes()
    {

        return this._keyTypes

    }

    /*
    get keyType()
    {

        return this._keyType

    }
    */
    
    /*
    get getURLState(): string
    {

        return this.urlState

    }
    */
    
    /*
    getURL_fn(): string
    {

        return this.getURL

    }

    subscribeOnSetURL(listener: plainFunction): void
    {

        this.changeURLlisters.push(listener);

    }

    unsubscribeOnSetURL(listener: plainFunction): void
    {

        const index = this.changeURLlisters.indexOf(listener, 0);

        if (index > -1)
        {
        
            this.changeURLlisters.splice(index, 1);

        }

    }
    
    subscribeOnSetURL_useSES(listener: plainFunction): plainFunction
    {

        this.subscribeOnSetURL(listener);

        return () =>
        {

            this.unsubscribeOnSetURL(listener);

        }

    }

    private onSetURL(): void
    {

        for (let listener of this.changeURLlisters)
        {

            listener();

        }

    }
    */

    /*
    test(): Promise<AxiosResponse<string, any>> //any
    {

        return axios.post('', '{"query": "{ test }" }', {
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          }) as Promise<AxiosResponse<string, any>>;

        //return axios.post('http://localhost:8000/test') as Promise<AxiosResponse<string, any>>;

    }
    */

    testWithURL(url: string): Promise<AxiosResponse> //<string, any>>
    {

        return axios({
            method: 'post',
            url: url,
            data: '{"query": "{ test }" }',
            /*headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              }*/
        }) as Promise<AxiosResponse> //<string, any>>;
        
        //, "variables": "{}"

        /*
        return axios.post(url, '{"query": "{ test }" }', {
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          }) as Promise<AxiosResponse<string, any>>;
          */

    }

    runQuery(queryData: string): Promise<AxiosResponse>
    {

        return axios({
            method: 'post',

            data: { query: queryData }

        }) as Promise<AxiosResponse>
    }

    runQueryWithVars<T>(queryData: string, varsData: T): Promise<AxiosResponse>
    {

        return axios({
            method: 'post',

            data: { query: queryData, variables: varsData }

        }) as Promise<AxiosResponse>
    }

}

export const TheAppState = new AppState();

/*

default

//axios_client: AxiosStatic;

*/

