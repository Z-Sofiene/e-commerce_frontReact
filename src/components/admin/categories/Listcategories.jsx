import React, {useEffect, useState} from "react";
import axios from "axios";
import Viewcategories from "./Viewcategories.jsx";

const Listcategories = () => {
    const [categories, setArticle] = useState([]);
    useEffect(() => {
        loadcategories();
    }, []);

    //consum the APi and fetch the json
    const loadcategories = async () => {
        const res = await axios.get("https://e-commerce-node-js-ten.vercel.app/api/categories");
        setArticle(res.data);
    };
    const handleDelete = async (id) => {
        await axios.delete(`https://e-commerce-node-js-ten.vercel.app/api/categories/${id}`);
        loadcategories();
    };
    return (
        <div className="container">
            <Viewcategories categories={categories} handleDelete={handleDelete} />
        </div>
    )
}
export default Listcategories