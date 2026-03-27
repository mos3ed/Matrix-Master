    const BASE_URL = "https://fakestoreapi.com/products";

    export async function getProducts() {
    const res = await fetch(BASE_URL);
    return res.json();
    }

    export async function getProduct(id) {
    const res = await fetch(`${BASE_URL}/${id}`);
    return res.json();
    }

    export async function createProduct(data) {
    const res = await fetch(BASE_URL, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
    });
    return res.json();
    }

    export async function updateProduct(id, data) {
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
    });
    return res.json();
    }

    export async function deleteProduct(id) {
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
    });
    return res.json();
    }
