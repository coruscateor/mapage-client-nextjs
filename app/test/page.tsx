"use client"

import { useState } from 'react';
import AppLayout from '../app_layout'
import { TheAppState } from '../app_state';
import { AxiosError, AxiosResponse } from 'axios';

import { test } from '../communication/miscellaneous';
import { anyToJson, tryGetDataOrErrorToJSON } from '../json_funcs';

//, receiveDataToJson

export default function Page() {

  const [testState, setTestState] = useState('NotTesting');

  const [testResultState, setTestResultState] = useState('');

  function on_test(e: React.MouseEvent<HTMLButtonElement>)
  {

    if(testState == 'IsTesting')
    {

      return

    }

    if(testResultState.length > 0)
    {

      setTestResultState('')

    }

    const testRes: Promise<AxiosResponse> = test()

    setTestState('IsTesting')

    testRes.then((response: AxiosResponse) => {

      setTestResultState(tryGetDataOrErrorToJSON(response)) //receiveDataToJson(response.data))

      setTestState('NotTesting')

    }).catch((error: AxiosError) => { 

      setTestResultState(anyToJson(error))

      setTestState('NotTesting')

    })

  }

  return (
    <AppLayout title={'Test'}>

      <div className="flex flex-col">
        <button className="btn btn-primary w-16" onClick={on_test}>Test</button>
        <div className="flex flex-row pt-6 grow">
          { testState === 'IsTesting' &&
            <span className="loading loading-spinner loading-lg"></span>
          }
          { testState === 'NotTesting' &&
            <textarea className="textarea textarea-bordered w-full max-w" rows={3} value={testResultState} readOnly></textarea>
          }
        </div>
      </div>

    </AppLayout>
  )
}
