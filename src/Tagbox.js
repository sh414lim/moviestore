import React, { useCallback, useState } from "react"
import { useSelector } from "react-redux";
import styled from "styled-components";

const TagBoxBlock = styled.div`
    width: 100%;
    border-top:1px solid gray;
    padding-top  :2rem ;
    h4{
        color:gray;
        margin-top: 0px;
        margin-bottom: 0.5rem;
    }
`;

const TagForm=styled.form`
        border-radius: 4px;
        overflow: hidden;
        display: flex;
        width: 256px;
        border: 1px solid gray;
        input,
        button{
            outline: none;
            border: none;
            font-size: 1rem;
        }

        input{
            padding:0.5rem;
            flex:1;
            min-width: 1rem;
        }
        button{
            cursor: pointer;
            padding-left: 1rem;
            padding-right: 1rem;
            border: none;
            background: gray;
            color:white;
            font-weight: bold;
            &:hover{
                background: white;
                color:black;
            }
        }
`
const Tag=styled.div`
    margin-right: 0.6rem;
    color:gray;
    cursor: pointer;
    &:hover{
        opacity: 0.5;
    }
`

const TagListBlcok=styled.div`
display: flex;
margin-top: 0.5rem;
`

//React memo를 사용하여 tag 값이 바뀔때만 리렌더링 되도록 처리
//Hook을 사용하여 태그를 제거
    const TagItem=React.memo(({tag,onRemove})=>(
        <Tag onClick={()=>onRemove(tag)}>#{tag}</Tag>
    ))

//React.memo를 사용하여 tags 값ㅇㅣ바뀔때만 리렌더링 되도록 처리
const TagList=React.memo(({tags,onRemove})=>(
    <TagListBlcok>
        {tags&&tags.map(tag=>(
            <TagItem key={tag} tag={tag} onRemove={onRemove}/>
        ))}
    </TagListBlcok>
));

const TagBox=()=>{
    const [input,setInput]=useState('');
    const [localTags,setLocalTags]=useState([]);

    const insertTag=useCallback(
        tag=>{
            if(!tag) return // 공백이라면 추가x
            if(localTags.includes(tag)) return; //이미 존재한다면 추가하지 않음
            setLocalTags([...localTags,tag]);
        },
        [localTags]
    );

    const onRemove=useCallback(
        tag=>{
            setLocalTags(localTags.filter(t=>t !== tag));
        },
        [localTags],
    );

    const onChange=useCallback(e=>{
        setInput(e.target.value);
    },[]);

    const onSubmit=useCallback(
        e=>
        {
            e.preventDefault();
            insertTag(input.trim())//앞 뒤 공백을 없앤 후 등록
            setInput(''); //input 초기화
        },
        [input,insertTag],
    );

    
    return(
        <TagBoxBlock>
            <h4>태그</h4>
            <TagForm onSubmit={onSubmit}>
                <input placeholder="태그를 입력하세요"
                    value={input}
                    onChange={onChange}
                />
                <button type="submit">추가</button>
            </TagForm>
            <TagList tag={localTags} onRemove={onRemove} />
        </TagBoxBlock>
    );
};

export default TagBox;
