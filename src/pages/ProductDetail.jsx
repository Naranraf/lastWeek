import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';


const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [rate, setRate] = useState(0)
    const decrement = () => {
        if (rate > 1) {
            setRate(rate - 1)
        }
    }



    useEffect(() => {
        axios
            .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/1`)
            .then((resp) => {
                setProduct(resp.data);
            })
            .catch((err) => console.log(err));
    }, [id]);




    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.img} />
                <Card.Body>
                    <Card.Title>
                        {product.title}
                    </Card.Title>
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                    <Card.Text>
                        {product.price}
                    </Card.Text>
                    <Button
                        variant="secondary"
                        onClick={() => decrement()(rate - 1)}
                    >-
                    
                    </Button>
                    <h4>{rate}</h4>
                    <Button variant="secondary"
                        onClick={() => setRate(rate + 1)}
                    >+
                    </Button>
                    
                </Card.Body>
            </Card>





        </div>
    );
};

export default ProductDetail;
