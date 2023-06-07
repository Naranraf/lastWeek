import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import { filterCategoryThunk } from '../store/slices/products.slice';
const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const dispatch = useDispatch()
    const [rate, setRate] = useState(0);
    const allProducts = useSelector(state => state.products)
    console.log(allProducts)

    const decrement = () => {
        if (rate > 1) {
            setRate(rate - 1);
        }
    };

    useEffect(() => {
        axios
            .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`)
            .then((resp) => {
                setProduct(resp.data);
                dispatch(filterCategoryThunk(resp.data.category.id))
            })
            .catch((err) => console.log(err));
    }, [id]);



    const sameProductValidation = allProducts.filter(products => products.id !== Number(id));
// para que no sea vea el producto en la misma pagina
    
   


    return (
        <div >
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        {product.images && product.images[0] &&
                            (
                                <Card.Img variant="top" src={product.images[0].url} />
                            )
                        }
                        <Card.Body
                            style={{
                                height: "auto",
                                justifyContent: "center",
                                alignItems: "center",
                                padding: "10px",
                                width: "100%",
                                height: "auto",
                                objectFit: "contain",
                                paddingBottom: "auto"
                            }}>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>{product.description}</Card.Text>
                            <Card.Text>{product.price}</Card.Text>
                            <Button variant="secondary" onClick={() => decrement()}>
                                -
                            </Button>
                            <h4>{rate}</h4>
                            <Button variant="secondary" onClick={() => setRate(rate + 1)}>
                                +
                            </Button>
                            <Button
                                variant='secondary'
                                className='primary '
                            >
                                Agregar a favoritos
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {
                sameProductValidation.map(products => (

                    <ListGroup>
                        <ListGroup.Item
                            key={products.id}
                            variant=""
                            style={
                                {
                                    width: "200px",
                                }
                            }>
                            {products.title}
                        </ListGroup.Item>
                        <img src={products.images[0].url}
                            alt=""
                            style={
                                {
                                    width: "200px",
                                }
                            } />
                    </ListGroup>

                ))
            }


        </div>
    );
};

export default ProductDetail;
