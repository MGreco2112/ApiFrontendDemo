import React, {useState, useEffect} from "react";
import axios from 'axios';
import {apiHostURL, newsApiKey} from "../../../config";

const NewsContext = React.createContext({});

const NewsProvider = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState(props.query);

    useEffect(() => {
        const _getNews = async (query) => {
            try {
                const res = await axios.get(`${apiHostURL}everything/q=${query}&apikey=${newsApiKey}`);

                console.log(res.data);
                setArticles(res.data);
                setLoading(false);
            } catch (e) {
                console.error(e.message);
            }
        }
        setLoading(true);
        _getNews();
    }, [query])

    return(
        <h1>NewsProvider</h1>
    )
}

export default NewsProvider;