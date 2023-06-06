import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductsThunk,filterCategoryThunk  } from "../store/slices/products.slice";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useState } from "react";
import ListGroup from 'react-bootstrap/ListGroup';


const Home = () => {
  const storeProducts = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([])

  useEffect(() => {
    dispatch(getProductsThunk());
    axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/categories`)
      .then(resp => setCategories(resp.data))
      .catch(err => console.log(err))
      console.log(categories)
  }, [dispatch]);

  return (
    <div>

      <Row className="pt-5" xs={1} md={2} lg={3}>
        <Col lg={3} md={4}>
          {/* ----------------------aqui se usa la logica del  filterCategoryThunk------------------------ */}
          <ListGroup>
            {
              categories.map(category =>(
                <ListGroup.Item 
                key={category.id}
                onClick={()=> dispatch(filterCategoryThunk(category.id))}
                variant="secondary"
                >
                {category.name}
              </ListGroup.Item>
                )
              )
            }
          </ListGroup>

          {/* ------------------------------------------------ */}

        </Col>
        <Col lg={9} md={8}>

          <h1>Productos</h1>
          <Row xs={1} md={2} lg={3}>
            {storeProducts.map((product) => (
              <Col key={product.id}>
                <div className="mb-3">
                  <Card style={{ width: "20rem", height: "45rem" }} className="w-100">
                    <Card.Img variant="top" src={product.images[0].url}
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "contain",
                        paddingBottom:"auto"
                      }} />
                    <Card.Body>
                      <Card.Text>
                        <strong>{product.brand}</strong>
                      </Card.Text>
                      <br />
                      <Card.Title>
                        <strong>
                          <h4>{product.title}</h4>
                        </strong>
                      </Card.Title>
                      <Card.Text>
                        <br />
                        <strong>
                          Price: <br />
                        </strong>
                        {product.price}
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
