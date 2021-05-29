import React from "react"
import MoviePresent from "./MoviePresent";
import  {MovieApi}  from "../../api";


export default class MovieContainer extends React.Component{
    state={
        popular:null,
        toprated:null,
        upcoming:null,
        nowplaying:null,
        error:null,
        loading:true
    }

  
    async componentDidMount(){
        try{
            const {data:{results:toprated}} = await MovieApi.toprated();
            const {data:{results:popular}} = await MovieApi.popular();
            const {data:{results:upcoming}} = await MovieApi.upcoming();
            const {data:{results:nowplaying}} = await MovieApi.nowplaying();
            this.setState({
                toprated,
                nowplaying,
                popular,
                upcoming
            })
        }catch{
                this.setState({
                    error:"What...?"
                });
        }finally{
                this.setState({
                    loading:false
                })

        }
    }
    render(){
        const {popular,toprated,upcoming,nowplaying,error,loading} =this.state;
        return(
            <MoviePresent
            popular={popular}
            toprated={toprated}
            upcoming={upcoming}
            nowplaying={nowplaying}
            error={error}
            loading={loading}
            />
        )
    }

} 