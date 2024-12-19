import React, { useEffect, useState } from "react";
import { Form, Col, Row } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";

const Addarticle = () => {
    const [article, setArticle] = useState({
        reference: "",
        designation: "",
        marque: "",
        prix: "",
        qtestock: "",
        imageart: "",
        scategorieID: ""
    });
    const [loading, setLoading] = useState(true);
    const [scategories, setScategories] = useState([]);
    const navigate = useNavigate();

    const loadScategorie = async () => {
        try {
            const res = await axios.get("https://e-commerce-node-js-ten.vercel.app/api/scategories");
            setScategories(res.data);
            setLoading(false);
        } catch (err) {
            console.error("Error loading sub categories:", err);
        }
    };

    useEffect(() => {
        loadScategorie();
    }, []);

    if (loading) {
        return (
            <>
                <br /><br /><br /><br />
                <center>
                    <h1><b>LOADING...</b></h1>
                    <ReactLoading type="spinningBubbles" color="black" height={667} width={375} />
                </center>
            </>
        );
    }

    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            await axios.post("https://e-commerce-node-js-ten.vercel.app/api/articles/add", article);
            navigate("/articles");
        } catch (error) {
            console.error("Error adding article:", error);
        }
    };

    return (
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h1>Insérer un article</h1>
            <Form>
                <Row>
                    <Form.Group as={Col} md="6">
                        <Form.Label>Référence</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Référence"
                            value={article.reference}
                            onChange={(e) => setArticle({ ...article, reference: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="6">
                        <Form.Label>Désignation</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Désignation"
                            value={article.designation}
                            onChange={(e) => setArticle({ ...article, designation: e.target.value })}
                        />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} md="6">
                        <Form.Label>Marque</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Marque"
                            value={article.marque}
                            onChange={(e) => setArticle({ ...article, marque: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="6">
                        <Form.Label>Prix</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Prix"
                            value={article.prix}
                            onChange={(e) => setArticle({ ...article, prix: e.target.value })}
                        />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} md="6">
                        <Form.Label>Stock</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Stock"
                            value={article.qtestock}
                            onChange={(e) => setArticle({ ...article, qtestock: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="6">
                        <Form.Label>Image</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Image"
                            value={article.imageart}
                            onChange={(e) => setArticle({ ...article, imageart: e.target.value })}
                        />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} md="12">
                        <Form.Label>Sous-catégorie</Form.Label>
                        <Form.Control
                            as="select"
                            value={article.scategorieID}
                            onChange={(e) => setArticle({ ...article, scategorieID: e.target.value })}
                        >
                            <option>----Sélectionner une sous-catégorie----</option>
                            {scategories.map((scat) => (
                                <option value={scat._id} key={scat._id}>
                                    {scat.nomscategorie}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                </Row>
            </Form>
            <button className="btn btn-success btn-sm mt-3" onClick={handleAdd}>Enregistrer</button>
            <Link to="/articles" className="btn btn-danger btn-sm mt-3 ml-2">Annuler</Link>
        </div>
    );
};

export default Addarticle;
