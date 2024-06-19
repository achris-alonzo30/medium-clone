import "./Homepage.scss"

import { Footer } from "../../components/Footer/Footer"
import { HeroBlog } from "../../components/HeroBlog/HeroBlog"
import { Blogs } from "../../components/Blogs/Blogs"
import { useEffect, useState } from 'react';
import { getArticles } from "../../lib/api-requests";
import { useParams } from "react-router-dom";

export const Homepage = () => {
    const [articles, setArticles] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        getArticles(setArticles);
    }, [])

    // Loading state
    if (articles.length < 1) return <>Loading...</>

    const selectedArticleId = id || articles[0].id ;
    const filteredArticles = articles.filter(article => article.id !== selectedArticleId)

    return (
        <main className="homepage">
            <HeroBlog selectedArticleId={selectedArticleId} />
            <Blogs filteredArticles={filteredArticles} />
            <Footer />
        </main>
    )
}