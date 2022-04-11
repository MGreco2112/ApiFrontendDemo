import React, {useState, useEffect} from "react";
import axios from 'axios';
import {apiHostURL, newsApiKey} from "../../config";

const NewsContext = React.createContext({});

const NewsProvider = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState('Javascript');

    useEffect(() => {
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
        setLoading(true);
        _getNews(query);
    }, [query])

    return(
        <NewsContext.Provider value={{articles, loading, setQuery}}>
            {props.children}
        </NewsContext.Provider>
    )
}

export {NewsProvider, NewsContext};