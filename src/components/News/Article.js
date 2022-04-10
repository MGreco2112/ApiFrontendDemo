import React, { useContext } from "react";
import BorderCard from "../common/BorderCard";
import Container from "../common/Container";

const Article = (props) => {

    return(
        <BorderCard style={{minWidth: '1000px'}}>
            <Container>
                <div style={{flex: 1}}>
                    <img 
                        style={{height: "100%", width: "100%", objectFit: "cover"}} 
                        src={props.article.urlToImage} 
                        alt="article img"
                    />
                </div>
                <div style={{flex: 3, flexDirection: "column", padding: '0 8px'}}>
                    <h2>{props.article.title}</h2>
                    <p>{props.article.description}</p>
                    {props.article.source
                        ? 
                        <small>{props.article.source.name}</small>
                        :
                        null
                    }
                </div>
            </Container>
        </BorderCard>
    )
}

export default Article;