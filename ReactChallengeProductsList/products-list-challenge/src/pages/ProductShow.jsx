    import React, { useEffect, useState } from "react";
    import { useParams, Link } from "react-router-dom";

    function ProductShow() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }, [id]);

    if (!product) return <div className="container">Loading...</div>;

    return (
        <div className="container">
        <h1>{product.title}</h1>

        <p><strong>Name:</strong> {product.title}</p>
        <p><strong>Price:</strong> ${product.price}</p>
        <p><strong>Description:</strong> {product.description}</p>

        <div className="link-row">
            <Link to="/products">Back</Link> |{" "}
            <Link to={`/products/edit/${product.id}`}>Edit</Link>
        </div>
        </div>
    );
    }

    export default ProductShow;
