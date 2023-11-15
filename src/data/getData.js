import axios from "axios"

// const apiKey='46548cacdf054610a2de0e00206c71e8';
const apiKey='925a1d7c06ef434c850b5a1cf3f3443f';

const getData = async(path)=>{

    return (await axios.get(path)).data
}

export {getData, apiKey}
