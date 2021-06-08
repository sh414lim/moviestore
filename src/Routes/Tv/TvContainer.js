// import React,{useState,useEffect} from "react";
// import { TvApi } from "../../api";
// import TvPresent from './TvPresent';


// const TvContainer =()=>{
//     const [airingToday,setairingToday]=useState("");
//     const [toprated,settoprated]=useState("");
//     const [onTheAir,setonTheAir]=useState("");
//     const [popular,setpopular]=useState("");

//     useEffect(async ()=>{
//         const airingToday=await TvApi.airingToday();
//         setairingToday(airingToday);
//     })

//     const {airingToday,toprated,onTheAir,popular}=this.state
// return(

// )

// }

import React from "react";
import { TvApi } from "../../api";
import TvPresent from './TvPresent';

export default class TvContainer extends React.Component{
    state={
        airingToday:null,
        toprated:null,
        onTheAir:null,
        popular:null,
        error:null,
        loading:true
    }
    componentDidMount(){
        this.getTv();

    }
      getTv=async()=>{
         try{
                const {data:{results:airingToday}}=await TvApi.airingToday();
                const {data:{results:toprated}}=await TvApi.toprated();
                const {data:{results:popular}}=await TvApi.popular();
                const {data:{results:onTheAir}}=await TvApi.onTheAir();
                this.setState({
                    airingToday,
                    toprated,
                    popular,
                    onTheAir
                })
         }catch{
                this.setState({
                    error:"Errror......"
                })
         }finally{
            this.setState({
                loading:false
            })
         }
     }

  
        
    render(){
        const {airingToday,toprated,onTheAir,popular,error,loading}=this.state;
        return(
            <TvPresent
            aringToday={airingToday}
            toprated={toprated}
            onTheAir={onTheAir}
            popular={popular}
            error={error}
            loading={loading}
            />
        )
    }
}
