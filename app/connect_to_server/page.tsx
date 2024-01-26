"use client"

import AppLayout from '../app_layout'

import { TheAppState } from '../app_state'

import { MouseEventHandler, useState } from 'react'

import { AxiosError, AxiosResponse } from 'axios'

import { getCfgs } from "../communication/cfgs"

import { /*toJson,*/ anyToJson, unwrapGetCfgs, tryGetDataOrError, tryGetDataOrErrorToJSON } from "../json_funcs" //tryReceiveDataToJson, //unwrapData, //receiveDataToJson, 

export default function Page() {

  //Url UI State

  const [url, setURL] = useState(TheAppState.getURL) //useState('');

  //const [connectingState, setConnectingState] = useState('NotConnecting');

  const [testState, setTestState] = useState('NotTesting'); //IsTesting

  const [testResultState, setTestResultState] = useState('');

  const [cfgState, setCfgState] = useState('NotGettingCfgs'); //IsGettingCfgs

  const [cfgResultState, setCfgResultState] = useState('');

  //const [authenticatingState, setAuthenticatinggState] = useState('NotAuthenticating');

  /*
  if(url !== TheAppState.getURL)
  {

    setURL(TheAppState.getURL)

  }
  */

  /*
  if(url.length < 1)
  {

    setURL(TheAppState.getURL)

  }
  */

  /*
  Unhandled Runtime Error
  Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.
  */

  //

  //MouseEventHandler<HTMLButtonElement>

  //async 

  function on_connect(e: React.MouseEvent<HTMLButtonElement>)
  {

    //Make sure were not already testing etc

    if(testState === 'IsTesting') //Or is authenticating
    {

      return

    }

    if(testResultState.length > 0)
    {

      setTestResultState('')

    }

    if(cfgResultState.length > 0)
    {

      setCfgResultState('')

    }

    //Clear is-authenticating...

    //setURL()

    //const testRes: Promise<AxiosResponse<string, any>> = TheAppState.test();

    //Run test query

    const testRes: Promise<AxiosResponse> = TheAppState.testWithURL(url) //<string, any>
    
    setTestState('IsTesting')

    //console.log('testRes')

    //function

    //console.log(response);

    //console.log(error);

    testRes.then((response: AxiosResponse) => { //<string, any>

      //setTestResultState(JSON.stringify(response))

      //setTestResultState(JSON.stringify(response.data)) //response.data)

      //setTestResultState(toJson(response.data))

      //setTestResultState(response.data)

      //setTestResultState(anyToJson(response.data))

      setTestResultState(tryGetDataOrErrorToJSON(response)) //tryReceiveDataToJson(response)) //receiveDataToJson(response.data))

      setTestState('NotTesting')

      TheAppState.setURL = url

      //run getCfgs query

      const cfgsRes: Promise<AxiosResponse> = getCfgs() //<string, any>

      setCfgState('IsGettingCfgs')

      cfgsRes.then((response: AxiosResponse) => { //<string, any>

        //setCfgResultState(JSON.stringify(response.data)) //response.data) 

        //setCfgResultState(response.data)

        //setTestResultState(toJson(response.data))

        //setCfgResultState(anyToJson(response.data))

        //setCfgResultState(receiveDataToJson(response.data))

        //const cfgsObj = unwrapGetCfgs(response.data)

        //Set cfgs

        //setCfgResultState(anyToJson(cfgsObj))

        const cfgsDataObj = tryGetDataOrError(response)//unwrapData(response.data)

        //console.log("cfgsObj JSON: \n\n" + JSON.stringify(cfgsDataObj, null, 4))

        const cfgsObj = unwrapGetCfgs(cfgsDataObj)

        //console.log("cfgsObj JSON: \n\n" + JSON.stringify(cfgsObj, null, 4))

        //Set cfgs

        TheAppState.setCfgs = cfgsObj

        //Get values

        setCfgResultState(anyToJson(cfgsObj))

        setCfgState('NotGettingCfgs')

      }).catch((error: AxiosError) => { //<string, any>

        //setCfgResultState(JSON.stringify(error))

        setCfgResultState(anyToJson(error))

        TheAppState.removeCfgs()

        setCfgState('NotGettingCfgs')

      })

      //Begin the authentication process (if applicable)

    })
    .catch((error: AxiosError) => { //<string, any>

      //setTestResultState(JSON.stringify(error))

      setTestResultState(anyToJson(error))

      setTestState('NotTesting')

    })

  }

  function url_change(e: React.ChangeEvent<HTMLInputElement>)
  {

    setURL(e.target.value)

  }
  
  //value="etc"

  //onChange={}

  return (

    <AppLayout title={'Connect To Server'}>

        <div className="flex min-w-full justify-center text-gray-900">
            <div className="flex flex-col w-3/6">
                <div className="flex flex-row pb-4"> 
                    <div className="flex flex-row basis-1/4">URL:</div>
                    <div className="flex flex-row basis-3/4 grow-0"><input type="text" className='input input-bordered input-primary w-full max-w' value={url} onChange={url_change}></input></div> {/*max-w-xs */} {/*ring-1 w-4/6*/}
                </div>
                {/* On Error */}
                {/* 
                <div className="flex flex-row pb-4">

                </div>
                */}
                <div className="flex flex-row pb-4">
                    <div className="flex flex-row basis-1/4 text-gray-500">Username:</div>
                    <div className="flex flex-row basis-3/4"><input type="text" className='input input-bordered input-primary w-full max-w' disabled></input></div> {/*ring-1 w-4/6 ring-gray-300*/} {/* readOnly not readonly?*/}
                </div>
                <div className="flex flex-row">
                  <div className="flex flex-row basis-1/4 text-gray-500">Password:</div>
                  <div className="flex flex-row basis-3/4"><input type="text" className='input input-bordered input-primary w-full max-w' disabled></input></div> {/* readOnly */} {/*ring-1 w-4/6 ring-gray-300*/}
                </div>
                <div className="flex flex-row pt-6">
                  <div className="flex flex-row basis-1/4"></div>
                  <div className="flex flex-row basis-3/4"><button className="btn btn-primary" onClick={on_connect}>Connect</button></div>
                </div>
                <div className="flex flex-row pt-6 grow">
                  <div className="flex flex-row basis-1/4 grow">Test Result:</div>
                  <div className="flex flex-row basis-3/4 grow">
                  { testState === 'IsTesting' &&
                    <span className="loading loading-spinner loading-lg"></span>
                  }
                  { testState === 'NotTesting' &&
                    <textarea className="textarea textarea-bordered w-full max-w" rows={3} value={testResultState} readOnly></textarea>
                  }
                  </div>
                </div>
                <div className="flex flex-row pt-6 grow">
                  <div className="flex flex-row basis-1/4 grow">Cfg Result:</div>
                  <div className="flex flex-row basis-3/4 grow">
                  { cfgState === 'IsGettingCfgs' &&
                    <span className="loading loading-spinner loading-lg"></span>
                  }
                  { cfgState === 'NotGettingCfgs' &&
                    <textarea className="textarea textarea-bordered w-full max-w" rows={40} value={cfgResultState} readOnly></textarea>
                  }
                  </div>
                </div>
                {/* authentication output */}
            </div>
        </div>

    </AppLayout>
  )
}

