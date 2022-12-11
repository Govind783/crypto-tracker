import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';



const UseAxios = (param) => {
    const [response,setResponse]=useState(null);
    const [load,setLoad]=useState(false);
    const [err,setErr]=useState("");

   axios.defaults.baseURL="https://api.coingecko.com/api/v3";

    const fetchData=async (param)=>{
        try {
            setLoad(true);
            const result=await axios(param)
            setResponse(result.data);
        } catch (error) {
            setErr(error)
        }
        finally{
            setLoad(false);
        }
    }

    useEffect(()=>{
        fetchData(param);
    },[]);

  return {
response,err,load
  }
}

export default UseAxios