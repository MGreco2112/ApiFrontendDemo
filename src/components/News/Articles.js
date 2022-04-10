import React, {useState, useContext} from "react";
import axios from "axios";
import Article from "./Article";
import { NewsContext } from "../Providers/NewsProvider";
import Form from "../common/Form";
import InlineInputContainer from "../common/InlineInputContainer";
import Input from "../common/Input";
import Button from "../common/Button";
import Container from "../common/Container";
import Spinner from "../faCommon/Spinner";

const Articles = (props) => {

    const {articles, loading, setQuery} = useContext(NewsContext);

    const [que, setQue] = useState("");

    const handleSubmit = (e) => {
        setQuery(que);
    }

    const displayArticles = () => {
        return(
            articles.map(article => {
                <Article article={article} key={article.url}/>
            })
        )
    }


    return(
        <Container>
            <Form onSubmit={handleSubmit}>
                <InlineInputContainer>
                    <Input
                        id="query"
                        placeholder="Search Topic"
                        onChange={e => setQue(e.target.value)}
                        value={que}
                    />
                    <Button>Search</Button>
                </InlineInputContainer>
            </Form>
            {
                loading ?
                <Spinner/>
                :
                displayArticles()
            }
        </Container>
    )
}

export default Articles;