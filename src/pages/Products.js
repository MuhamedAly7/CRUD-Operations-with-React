import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Products.css";
import Swal from "sweetalert2";

function Products()
{
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = () => {
        fetch('http://localhost:9000/products')
        .then((response) => response.json())
        .then((data) => setProducts(data))
    }

    const deleteProduct = (product) => {
        Swal.fire({
            title: `are you sure to delete ${product.title}?`,
            showCancelButton: true
        }).then((data) => {
            if(data.isConfirmed)
            {
                fetch(`http://localhost:9000/products/${product.id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type" : 'application/json',
                    }
                })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Deleted successfully:", data);
                    getProducts();
                })
            }
        })
    }

    return (
        <>
            <h1>Products Page</h1>
            <Link className="btn btn-success" to={'/products/add'}>Add New Product</Link>
            <table className="table table-striped mt-2 products-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                        {products.map((product) => {
                            return (
                                <>
                                    <tr key={product.id}>
                                        <td>{product.id}</td>
                                        <td>{product.title}</td>
                                        <td>{product.description ? product.description.slice(0, 20) : ""}...</td>
                                        <td>{product.price}$</td>
                                        <Link className="btn btn-primary mx-1 btn-sm" to={`/product/${product.id}`}>Edit</Link>
                                        <Link className="btn btn-info mx-1 btn-sm" to={`/products/${product.id}`}>View</Link>
                                        <button className="btn btn-danger mx-1 btn-sm" onClick={() => {
                                            deleteProduct(product);
                                        }}>Delete</button>
                                    </tr>
                                </>
                            );
                        })}
                </tbody>
            </table>
        </>
    );
}

export default Products;