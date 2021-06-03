import React from "react";
import { MovieApi, TvApi } from "../../api";
import SearchPresent from "./SearchPresent";


export default class extends React.Component{
    state={
        movieResult:null,
        tvResult:null,
        searchTerm:"",
        error:null,
        loading:false
    }
  
    
    handleSubmit=(event)=>{
        event.preventDefault();
        const {searchTerm}=this.state;
        if(searchTerm !== ""){
            this.serchByTerm();
        }
    };
        updataTerm=event=>{
            const{
                target:{value}
            }=event;
            this.setState({
                searchTerm:value
            })
    };

    serchByTerm = async() =>{
        const{searchTerm}=this.state
         this.setState({loading:true})
        try{
                const {data:{results:movieResult}}=await MovieApi.searchMvoie(searchTerm)
                const {data:{results:tvResult}}= await TvApi.searchTv(searchTerm)
                this.setState({
                    movieResult,
                    tvResult
                })
        }catch{
                this.setState({
                    error:"What..."
                })
        }finally{
                this.setState({
                    loading:false
                })
        }
    }


    render(){
        const {movieResult,tvResult,searchTerm,error,loading}=this.state
        return(
            <SearchPresent
            movieResult={movieResult}
            tvResult={tvResult}
            searchTerm={searchTerm}
            error={error}
            loading={loading}
            handleSubmit={this.handleSubmit}
            updataTerm={this.updataTerm}
            />
        )
    }
}
