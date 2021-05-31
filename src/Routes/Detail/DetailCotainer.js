import React from "react";
import { MovieApi, TvApi } from "../../api";
import DetailPresent from "./DetailPresent";

export default class extends React.Component{
    //class 생성자
    //loaction을 props로 부터  가져온다
    //props 는 {pathname } 아니고 존재하지 않는다 단지 생성자 클래스 일뿐
    constructor(props){
        super(props)
        const{location:{pathname}}=props;
        this.state={
            error:null,
            result:null,
            loading:true,
            //클래스를 생성하는 방식
            isMovie:pathname.includes("/movie/")

        };
    }


    async componentDidMount(){
        const{
            match:{
                params:{id}
            },
            history:{push},
        }=this.props;
        const{isMovie}=this.state
        const parseId=parseInt(id);
        if(isNaN(parseId)) {
         return push("/")
        }

        //무엇이 발생하든 result를  선언
        let result=null;
      try{
          //무엇이 됫든 덮어씌운다.
        if(isMovie){
         ({data:{result}}=await MovieApi.movieDetail(parseId))
        }else{
           ({data:{result}}=await TvApi.showDetail(parseId))
        }
        console.log(result)
      }catch{
        this.setState({
            error:"What...."
        })
      }finally{
          this.setState({
              loading:false
          })
      }
    }
    render(){
        const {result,error,loading} =this.state
        return(
            <DetailPresent
            result={result}
            error={error}
            loading={loading}
            />
            )
    }
}