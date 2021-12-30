import {React,useCallback} from 'react';
const useHttp =  () => {



    const sendRequest = useCallback(async (values) => {


        const methodsObject = {
            method: (values.hasOwnProperty('method')) ? values.method : 'GET',
            body: (values.hasOwnProperty('body')) ? JSON.stringify(values.body) : null,
            headers: (values.hasOwnProperty('headers')) ? values.headers : null

        }

        const response = await fetch(values.url, methodsObject)

        const jsonData = await response.json()


    },[]
      
    )
   

  






    return sendRequest

}
export default useHttp;
