import axios from "axios"

const apiKey='46548cacdf054610a2de0e00206c71e8';
const getData = async(path)=>{

    return (await axios.get(path)).data
}

export {getData, apiKey}
