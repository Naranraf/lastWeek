import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ProductDetail = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios
            .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`)
            .then(resp => { console.log(resp.data) })
            .catch(err => console.log(err))
        setProduct(resp.data)

    })





    return (
        <div>
            <h1>{product.title}</h1>
        </div>
    );
};

export default ProductDetail;