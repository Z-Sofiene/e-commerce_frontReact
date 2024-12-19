import {Link} from "react-router-dom";
import React from "react";

const Viewarticles = ({articles, handleDelete}) => {
    return (
        <>
            <p></p>
            <p>
                <Link className="btn btn-outline-light bg-success" to="/articles/add">
                    <i className="fas fa-plus-circle"></i> <b>Add Article</b>
                </Link>
            </p>
            <div className="py-4">
                <center><h1><b><u>List of Articles</u></b></h1></center>
                <div className="row">
                    {articles.map((art) => (
                        <div className="col-md-4 mb-4" key={art._id}>
                            <div className="card shadow-sm h-100">
                                <div
                                    className="card-img-container"
                                    style={{
                                        height: "360px",
                                        overflow: "hidden",
                                    }}
                                >
                                    <img
                                        src={art.imageart}
                                        className="card-img-bottom"
                                        alt={art.designation}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "fill",
                                        }}
                                    />
                                </div>
                                <div
                                    className="card-body d-flex flex-column"
                                    style={{ minHeight: "250px" }}
                                >
                                    <h5 className="card-title">{art.designation}</h5>
                                    <p className="card-text flex-grow-1">
                                        <strong>Référence:</strong> {art.reference}
                                        <br />
                                        <strong>Quantité Stock:</strong> {art.qtestock}
                                        <br />
                                        <strong>Prix:</strong> {art.prix} DT
                                    </p>
                                    <div className="d-flex justify-content-between">
                                        <Link
                                            className="btn btn-primary"
                                            to={`/article/view/${art._id}`}
                                        >
                                            <i className="fas fa-eye"></i> Consulter
                                        </Link>
                                        <Link
                                            className="btn btn-outline-primary"
                                            to={`/article/edit/${art._id}`}
                                        >
                                            <i className="fas fa-edit"></i> Modifier
                                        </Link>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => handleDelete(art._id)}
                                        >
                                            <i className="fas fa-trash"></i> Supprimer
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>

    )
}
export default Viewarticles;