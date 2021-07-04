import React from "react";
import HomePresent from "./HomePresent";
import { MovieApi, TvApi } from "../api";

export default class MainContainer extends  React.Component{
    state={
        toprated:null,
        airingToday:null,
        nowplaying:null,
        error:null,
        loading:true

    }

    async componentDidMount(){
        try{
            const {data:{results:toprated}} =await MovieApi.toprated();
            const {data:{results:nowplaying}} =await MovieApi.nowplaying();
            const {data:{results:airingToday}} =await TvApi.airingToday();
            this.setState({
                toprated,
                nowplaying,
                airingToday
            })
        }catch{
                this.setState({
                    error:"Can't Find Poster"
                })
        }finally{
            this.setState({
                loading:false
            })
        }
    }

    render(){
        const {toprated,airingToday,nowplaying,error,loading}=this.state;
        return(
            <HomePresent
            toprated={toprated}
            airingToday={airingToday}
            nowplaying={nowplaying}
            error={error}
            loading={loading}
            />
        )
    }
}
