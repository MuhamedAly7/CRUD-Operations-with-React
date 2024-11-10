import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails()
{
    const params = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`http://localhost:9000/products/${params.productId}`)
        .then((response) => response.json())
        .then((data) => setProduct(data))
    });
    return (
        <>
        {product ? 
            <>
            <h1>Product Details #{params.productId}</h1>
            <img src={product.image} alt="..." height={500}/>
            <p><strong>Description</strong><br/>{product.description}</p>
            <h3><strong>Category: </strong>{product.category}</h3>
            <h4><strong>Price: </strong>{product.price}$</h4>
            </>
            : <h1> Product #{params.productId} Not Available </h1>
        }
        </>
    );
}

export default ProductDetails;