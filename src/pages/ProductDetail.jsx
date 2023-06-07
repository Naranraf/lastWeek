import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [rate, setRate] = useState({})
    const decrement = () => {
        if (rate > 1) {
            setRate(rate - 1)
        }
    }



    useEffect(() => {
        axios
            .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/1`)
            .then((resp) => {
                setProduct(resp.data.category.id);
                console.log(resp.data);
            })
            .catch((err) => console.log(err));
    }, [id]);

    return (
        <div>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <Button
                variant="secondary"
                onClick={() => decrement()(rate - 1)}
            >-</Button>
            <h4>numero</h4>
            <Button variant="secondary"
                onClick={() => setRate(rate + 1)}
            >+</Button>
        </div>
    );
};

export default ProductDetail;
