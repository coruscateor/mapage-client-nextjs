import axios, { AxiosResponse } from 'axios';

export function test(): Promise<AxiosResponse<string, any>>
{

    return axios.post('', '{"query": "{ test }" }') as Promise<AxiosResponse<string, any>>

    /*
    , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
      */
     
}

