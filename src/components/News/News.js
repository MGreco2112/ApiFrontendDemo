import React from "react";
import Articles from "./Articles";
import Container from "../common/Container";

const News = (props) => {
    return(
        <Container>
            <h1>News</h1>
            <Articles/>
        </Container>
    )
}

export default News;