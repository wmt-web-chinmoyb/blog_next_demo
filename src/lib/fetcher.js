import useSWR from 'swr'

const baseURL="http://localhost:3000/";
const response = (...args) => fetch(...args).then(res => res.json())
export default function fetcher(endoint){
    const {data,error}=useSWR(`${baseURL}${endoint}`,response)
    return {
      data: data,
      isLoading:!error && !data,
      isError:error 
    }

}