import axios from "axios";

const api=axios.create({
    baseURL:"",
    params:{
        api_key:"13dce73d621a57563589d58029a15906",
        language:"en-US"
    }
})


const MovieApi=()=>api.get("")




const TvApi=()=>api.get("")