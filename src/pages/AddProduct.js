import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct()
{
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    let navigate = useNavigate();

    const formSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:9000/products", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({title: title, price: price})
        })
        .then((response) => response.json())
        .then(() => {
            console.log("Added Successfully!");
            navigate('/products');
        })
    };

    return (
        <>
            <h1>Add Product</h1>
            <form onSubmit={formSubmit}>
                <div className="mb-3">
                  <label htmlFor="ProductTitle" className="form-label">Title</label>
                  <input onChange={(e) => setTitle(e.target.value)} placeholder="Product Title" type="text" className="form-control" id="ProductTitle" aria-describedby="Product Title"/>
                </div>

                <div className="mb-3">
                  <label htmlFor="ProductPrice" className="form-label">Price</label>
                  <input onChange={(e) => setPrice(e.target.value)} placeholder="Product Price" type="number" className="form-control" id="ProductPrice" aria-describedby="Product Price"/>
                </div>

                <button type="submit" className="btn btn-primary">Add Product</button>
            </form>
        </>
    );
}

export default AddProduct;