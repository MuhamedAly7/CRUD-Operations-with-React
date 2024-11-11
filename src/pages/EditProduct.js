import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function EditProduct()
{
    const params = useParams();
    const [product, setProduct] = useState({});
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    let navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:9000/products/${params.productId}`)
        .then((response) => response.json())
        .then((data) => {
            setProduct(data);
            setTitle(data.title);
            setDescription(data.description);
            setPrice(data.price);
        })
    }, [])


    const formSubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:9000/products/${params.productId}`, {
            method: "PUT",
            headers: { 
                "Content-Type" : 'application/json'
            },
            body: JSON.stringify({
                ...product,
                title: title,
                description: description, 
                price: price})
        })
        .then((response) => response.json())
        .then(() => {
            console.log("Edited Successfully!");
            navigate('/products');
        })
    }


    return(
        <>
            <h1>Edit Product {params.productId}</h1>
            <form onSubmit={formSubmit}>

                <div className="mb-3">
                  <label htmlFor="ProductTitle" className="form-label">Title</label>
                  <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Product Title" type="text" className="form-control" id="ProductTitle" aria-describedby="Product Title"/>
                </div>

                <div className="mb-3">
                  <label htmlFor="ProductDescription" className="form-label">Description</label>
                  <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Product Description" type="text" className="form-control" id="ProductDescription" aria-describedby="Product Description"/>
                </div>

                <div className="mb-3">
                  <label htmlFor="ProductPrice" className="form-label">Price</label>
                  <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Product Price" type="number" className="form-control" id="ProductPrice" aria-describedby="Product Price"/>
                </div>

                <button type="submit" className="btn btn-primary">Edit Product</button>
            </form>
        </>
    );
}

export default EditProduct;