import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import axios from "axios";
import Viewarticles from "./Viewarticles.jsx";

const Listarticles = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch articles from the API
    const loadArticles = async () => {
        try {
            const res = await axios.get("https://e-commerce-node-js-ten.vercel.app/api/articles");
            setArticles(res.data);
            setLoading(false);
        } catch (err) {
            console.error("Error loading articles:", err);
        }
    };

    // Delete article by ID
    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://e-commerce-node-js-ten.vercel.app/api/articles/${id}`);
            setArticles(articles.filter(deleted_article => deleted_article.id !== id));
            loadArticles(); // Reload articles after deletion
        } catch (err) {
            console.error("Error deleting article:", err);
        }
    };

    useEffect(() => {
        loadArticles();
    }, []); // Dependency array ensures the API call is made only once on component mount

    if (loading) {
        return <>
            <br/><br/><br/><br/>
            <center><h1><b> LOADING...</b></h1></center>
            <center><ReactLoading type="spinningBubbles" color="black" height={667} width={375}/></center>
        </>;
    }

    return (
        <div className="container">
            <Viewarticles articles={articles} handleDelete={handleDelete} />
        </div>
    );
};

export default Listarticles;
