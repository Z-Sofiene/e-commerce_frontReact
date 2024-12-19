import {Link} from "react-router-dom";
import React from "react";

const Viewcategories = ({categories, handleDelete}) => {
    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                    <div className="container-fluid">
                        <Link className="btn btn-outline-light" to="/categories/add">
                            Ajouter Article
                        </Link>
                    </div>
                </nav>
            </div>
            <div className="py-4">
                <table className="table border shadow">
                    <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Catégorie</th>
                        <th scope="col">View</th>
                        <th scope="col">Modifier</th>
                        <th>Supprimer</th>
                    </tr>
                    </thead>
                    <tbody>
                    {categories.map((cat, index) => (
                        <tr key={cat._id}>
                            <td><img src={cat.imagecategorie} width={80} height={80}/></td>
                            <td>{cat.nomcategorie}</td>
                            <td>
                                <Link
                                    className="btn btn-primary mx-2"
                                    to={`/caticle/view/${cat._id}`}
                                >
                                    Consulter
                                </Link>
                            </td>
                            <td>
                                <Link
                                    className="btn btn-outline-primary mx-2"
                                    to={`/caticle/edit/${cat._id}`}
                                >
                                    Modifier
                                </Link>
                            </td>
                            <td>
                                <button
                                    className="btn btn-danger mx-2"
                                    onClick={() => handleDelete(cat._id)}
                                >
                                    Supprimer
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Viewcategories;