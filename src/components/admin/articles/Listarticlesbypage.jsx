import React, { useEffect, useState } from "react";
import axios from "axios";
import Viewarticles from "./Viewarticles.jsx";
import Pagination from "./Pagination.jsx"
import { useParams, useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";


const Listarticlesbypage = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1); // Current page
    const [limit] = useState(6); // Number of items per page
    const [totalArticles, setTotalArticles] = useState(0); // Total number of articles
    const { pageNumber } = useParams(); // Use `useParams` to get the page number from the URL
    const navigate = useNavigate(); // For navigation

    // Fetch articles with pagination
    const loadArticles = async (page = 1) => {
        setLoading(true);
        try {
            const res = await axios.get(`https://e-commerce-node-js-ten.vercel.app/api/articles/pagination?page=${page}&limit=${limit}`);
            setArticles(res.data.articles);
            setTotalArticles(res.data.tot);
            setLoading(false);
        } catch (err) {
            console.error("Error loading articles:", err);
        }
    };

    // Handle page change
    const handlePageChange = (newPage) => {
        navigate(`/articles/page/${newPage}`); // Navigate to the new page route
    };

    useEffect(() => {
        loadArticles(pageNumber || 1); // Load articles based on the page number in the URL
    }, [pageNumber]);

    if (loading) {
        return <>
            <br/><br/><br/><br/>
            <center><h1><b> LOADING...</b></h1></center>
            <center><ReactLoading type="spinningBubbles" color="black" height={500} width={200}/></center>
        </>;
    }

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://e-commerce-node-js-ten.vercel.app/api/articles/${id}`);
            loadArticles(); // Reload articles after deletion
        } catch (err) {
            console.error("Error deleting article:", err);
        }
    };

    return (
        <div className="container">
            <Pagination
                currentPage={parseInt(pageNumber, 10) || 1}
                totalItems={totalArticles}
                itemsPerPage={limit}
                onPageChange={handlePageChange}
            />
            <Viewarticles articles={articles} handleDelete={handleDelete} />

        </div>
    );
};

export default Listarticlesbypage;
