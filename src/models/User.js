// 1. mongoose 데이터 베이스에 사용자 정보를 담고 조회


import mongoose,{Schema} from "mongoose";


const UserSchma=new Schema({
    username:String,
    hashedPasswed:String,
});

const User =mongoose.model('User',UserSchma);
export default User;


// 2. 모델메서드 생성
//모델 메서드란 모델에서 사용할 수있는 함수를 의미
//첫번쩨 종류 : 인스턴스 메서드 : 모델을 통해 만든 문서 인스턴스에서 사용할 수 잇는 함수

/*
    const user=new User({username:'velopert})
    user.setPassword('123password)
*/ 

// 두번째 종류 스태틱 메소드
//
/*


*/