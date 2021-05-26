import React from "react"
import styled from "styled-components";
import Form from "../../Form/Movie"

const Container =styled.div``;


const MoviePresent =({nowplaying,error,loading})=>(
    <Container>
        {nowplaying && nowplaying > 0 && (
            <Form title="TOP">
                {nowplaying.map(props=>(
                   <span>{props.title}</span>
                ))}
            </Form>
        )}
    </Container>
)





export default MoviePresent;