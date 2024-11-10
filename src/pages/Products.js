import React from "react";

function Products()
{
    return (
        <>
            <h1>Products Page</h1>
            <button className="btn btn-success">Add New Product</button>
            <table className="table table-striped mt-2">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>product 1</td>
                        <td>150$</td>
                        <button className="btn btn-primary mx-1">Edit</button>
                        <button className="btn btn-info mx-1">View</button>
                        <button className="btn btn-danger mx-1">Delete</button>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default Products;