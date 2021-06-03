import React from "react";
import DetailPresent from "./DetailPresent";
import { MovieApi, TvApi } from "../../api";


export default class extends React.Component{
    constructor(props){
        super(props)
        const {location:{pathname}}=props;
        this.state={
            result:null,
            error:null,
            loading:true,
            isMovie:pathname.includes("/movie/"),
        }
    };

    async componentDidMount(){
        const{
            match:{
                params:{id}
            },
            history:{push},
        }
        =this.props;
        const{isMovie} = this.state;
        const parseId=parseInt(id);
        if(isNaN(parseId)){
            return push("/");
        }
        let result=null;

        try{
            if(isMovie !== ""){
                ({data:result}= await MovieApi.movieDetail(parseId))
            }
                ({data:result}=await TvApi.showDetail(parseId))

                console.log(result);
        }catch{
            this.setState({
                error:null
            })
        }finally{
            this.setState({
                loading:false,result
            })

        }
    }

    render(){
        const {result,error,loading}=this.state
        return(
            <DetailPresent
            result={result}
            error={error}
            loading={loading}
            />
        )
    }
}