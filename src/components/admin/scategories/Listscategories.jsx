import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import axios from "axios";
import Viewscategories from "./Viewscategories.jsx";

const Listscategories = () => {
    const [scategories, setArticle] = useState([]);
    const [loading, setLoading] = useState(true);

    // Pagination
    const [page, setPage] = useState(1); // Current page
    const [limit] = useState(5); // Number of items per page
    const [totalscategories, setTotalscategories] = useState(0);

    // Fetch scategories from the API
    const loadscategories = async () => {
        try {
            const res = await axios.get("https://e-commerce-node-js-ten.vercel.app/api/scategories");
            setArticle(res.data);
            setLoading(false);
        } catch (err) {
            console.error("Error loading scategories:", err);
        }
    };

    // Delete article by ID
    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://e-commerce-node-js-ten.vercel.app/api/scategories/${id}`);
            loadscategories(); // Reload scategories after deletion
        } catch (err) {
            console.error("Error deleting article:", err);
        }
    };

    useEffect(() => {
        loadscategories();
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
            <Viewscategories scategories={scategories} handleDelete={handleDelete} />
        </div>
    );
};

export default Listscategories;
