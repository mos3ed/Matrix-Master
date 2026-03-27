    import React, { useEffect, useState } from "react";
    import { Link, useNavigate } from "react-router-dom";

    function ProductsList() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);

    return (
        <div className="container">
        <h1>Products</h1>

        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price ($)</th>
                <th>Actions</th>
            </tr>
            </thead>

            <tbody>
            {products.map((p) => (
                <tr key={p.id}>
                <td>{p.title}</td>
                <td>{p.description}</td>
                <td>{p.price}</td>
                <td>
                    <button onClick={() => navigate(`/products/show/${p.id}`)}>
                    Show
                    </button>
                    <button onClick={() => navigate(`/products/edit/${p.id}`)}>
                    Edit
                    </button>
                    <button
                    onClick={() => {
                        if (window.confirm("Delete product?")) {
                        fetch(`https://fakestoreapi.com/products/${p.id}`, {
                            method: "DELETE",
                        }).then(() =>
                            setProducts(products.filter((x) => x.id !== p.id))
                        );
                        }
                    }}
                    >
                    Delete
                    </button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>

        <Link to="/products/new">Add product</Link>
        </div>
    );
    }

    export default ProductsList;
