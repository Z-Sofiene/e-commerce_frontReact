import {Link} from "react-router-dom";
import React from "react";

const Viewscategories = ({scategories, handleDelete}) => {
    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                    <div className="container-fluid">
                        <Link className="btn btn-outline-light" to="/categories/add">
                            Add Category
                        </Link>
                    </div>
                </nav>
            </div>
            <div className="py-4">
                <table className="table border shadow">
                    <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Sub Categoru</th>
                        <th scope="col">View</th>
                        <th scope="col">Modifier</th>
                        <th>Supprimer</th>
                    </tr>
                    </thead>
                    <tbody>
                    {scategories.map((scat, index) => (
                        <tr key={scat._id}>
                            <td><img src={scat.imagescat} width={80} height={80}/></td>
                            <td>{scat.nomscategorie}</td>
                            <td>
                                <Link
                                    className="btn btn-primary mx-2"
                                    to={`/caticle/view/${scat._id}`}
                                >
                                    Consulter
                                </Link>
                            </td>
                            <td>
                                <Link
                                    className="btn btn-outline-primary mx-2"
                                    to={`/scategories/edit/${scat._id}`}
                                >
                                    Modifier
                                </Link>
                            </td>
                            <td>
                                <button
                                    className="btn btn-danger mx-2"
                                    onClick={() => handleDelete(scat._id)}
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
export default Viewscategories;