    import React, { useState } from "react";
    import { useNavigate, Link } from "react-router-dom";

    function ProductNew() {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        fetch("https://fakestoreapi.com/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            title,
            price,
            description,
            category: "general",
        }),
        })
        .then(() => {
            alert("Product created (FakeStoreAPI does not save it)");
            navigate("/products");
        })
        .catch(() => navigate("/products"));
    }

    return (
        <div className="container">
        <h1>New product</h1>

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

            <button type="submit">Create</button>
        </form>

        <div className="link-row">
            <Link to="/products">Go back</Link>
        </div>
        </div>
    );
    }

    export default ProductNew;
