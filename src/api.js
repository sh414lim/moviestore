import axios from "axios";

const api=axios.create({
    baseURL:"https://api.themoviedb.org/3",
    params:{
        api_key:"13dce73d621a57563589d58029a15906",
        language:"en-US"
    }
})


export const MovieApi={
    popular:()=>api.get("movie/popular"),
    toprated:()=>api.get("movie/top_rated"),
    upcoming:()=>api.get("movie/upcoming"),
    nowplaying:()=>api.get("/movie/now_playing")
}


export const TvApi={
    allTvApi:()=>api.get("/tv/",{
        params:""
            
    })
}