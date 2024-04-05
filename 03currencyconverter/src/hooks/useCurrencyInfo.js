import { useEffect, useState } from "react";

async function useCurrencyInfo(currency){
    const [data,setData]= useState({});
    useEffect(( ) => {
       const fetchData = async ()=>{
        try{
            // api for currency data 
            let URL=`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;

            let response= await fetch(URL);
            const jsonData = await response.json();
            setData(jsonData);
        }catch(error) {
            console.error(error);
        }
       }
       fetchData();
    },[currency])

    return data;
}
export default useCurrencyInfo