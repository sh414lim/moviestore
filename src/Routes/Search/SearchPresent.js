import React from "react";
import styled from "styled-components";
import Form from "../../Form/Form"
import Poster from "../../Form/Poster"

const Container=styled.div``;

const FORM=styled.form``;

const INPUT=styled.input`
border-style: none;
width: 15%;
height: 50px;
border-bottom: 1px solid rgba(0,0,0,0.5);
font-size: 20px;
outline:none;
`;

const SearchPresent=({movieResult,tvResult,serchTerm,error,loading,handleSubmit,updataTerm})=>
    <Container>
        <FORM onChange={handleSubmit}>
            <INPUT type="text" placeholder="Search..." value={serchTerm} onChange={updataTerm}/>
            </FORM>

            {loading ? null : <>
                {movieResult && movieResult.length > 0 && <Form title="Movie">
                    {movieResult.map(movie=>(
                       <Poster
                       key={movie.id}
                       id={movie.id}
                       imageUrl={movie.poster_path}
                       title={movie.original_title}
                       rating={movie.vote_average}
                       isMovie={true}
                       />
                        ))}
                    </Form>}
                {tvResult && tvResult.length > 0 && <Form title="DRAMA">
                    {tvResult.map(drama=>(
                      <Poster
                      key={drama.id}
                      id={drama.id}
                      imageUrl={drama.poster_path}
                      title={drama.name}
                      rating={drama.vote_average}
                      isdrama={true}
                       />
                        ))}
                    </Form>}
                    </>}
    </Container>


export default SearchPresent;