import React, {useState, useContext, useEffect} from "react";
import axios from "axios";
import Article from "./Article";
import { apiHostURL, newsApiKey } from "../../config";
import Form from "../common/Form";
import InlineInputContainer from "../common/InlineInputContainer";
import Input from "../common/Input";
import Button from "../common/Button";
import Container from "../common/Container";
import Spinner from "../faCommon/Spinner";

const Articles = (props) => {

    const [articles, setArticles] = useState('');

    const [loading, setLoading] = useState(true);

    const [que, setQue] = useState("");

    const handleSubmit = (e) => {
        setQue(que);
        _getNews(que);
    }

    
    const _getNews = async (query) => {
        try {
            const res = await axios.get(`${apiHostURL}/everything?q=${query}&apiKey=${newsApiKey}`);

            console.log(res.data);
            setArticles(res.data.articles);
            setLoading(false);
        } catch (e) {
            console.error(e.message);
        }
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
                (
                <p>Loading. . .</p>
                )
                :
                displayArticles()
            }
        </Container>
    )
}

export default Articles;