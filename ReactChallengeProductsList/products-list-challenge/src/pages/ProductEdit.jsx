    import React, { useEffect, useState } from "react";
    import { useParams, useNavigate } from "react-router-dom";

    function ProductEdit() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
            setTitle(data.title);
            setPrice(data.price);
            setDescription(data.description);
        });
    }, [id]);

    function handleSubmit(e) {
        e.preventDefault();

        fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            title,
            price,
            description,
            category: "general",
        }),
        })
        .then(() => {
            alert("Product updated (FakeStoreAPI does not save changes)");
            navigate("/products");
        })
        .catch(() => navigate("/products"));
    }

    return (
        <div className="container">
        <h1>Edit {title}</h1>

        <form className="form" onSubmit={handleSubmit}>
            <label>
            Name
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>

            <label>
            Price
            <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            </label>

            <label>
            Description
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            </label>

            <button type="submit">Update</button>
            <button type="button" onClick={() => navigate(`/products/show/${id}`)}>
            Show
            </button>
            <button type="button" onClick={() => navigate("/products")}>
            Home
            </button>
        </form>
        </div>
    );
    }

    export default ProductEdit;
