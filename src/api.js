import axios from "axios";

const api=axios.create({
    baseURL:"https://api.themoviedb.org",
    params:{
        api_key:"13dce73d621a57563589d58029a15906",
        language:"en-US"
    }
})


export const MovieApi={
    popular:()=>api.get("/3/movie/popular"),
    toprated:()=>api.get("/3/movie/top_rated"),
    upcoming:()=>api.get("/3/movie/upcoming"),
    nowplaying:()=>api.get("/3/movie/now_playing")
}


export const TvApi={

airingToday:()=>api.get("/3/tv/airing_today",{
    params:{
        api_key:"13dce73d621a57563589d58029a15906",
        language:"en",
    }

}),
toprated:()=>api.get("/3/tv/top_rated",{
    params:{
        api_key:"13dce73d621a57563589d58029a15906",
        language:"en",
    }

}),
onTheAir:()=>api.get("/3/tv/on_the_air",{
    params:{
        api_key:"13dce73d621a57563589d58029a15906",
        language:"en",
    }

}),
popular:()=>api.get("/3/tv/popular",{
    params:{
        api_key:"13dce73d621a57563589d58029a15906",
        language:"en",
    }

})
}


