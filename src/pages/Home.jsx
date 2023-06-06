import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductsThunk } from "../store/slices/products.slice";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { getProducts } from './../store/slices/products.slice';

const Home = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductsThunk());
  }, [dispatch]);



  return (
    <div>
      <Row xs={1} md={2} lg={3}>
        <Col lg={3} md={4}>
          <h1>Filtrados</h1>
        </Col>
        <Col lg={9} md={8}>
          <h1>Productos</h1>
          <Row>
            <Col >
              <Row xs={1} md={2} lg={3}>
                <Col className="mb-3">
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                  <Col />
                  <Col>
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src="holder.js/100px180" />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the
                          bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src="holder.js/100px180" />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the
                          bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src="holder.js/100px180" />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the
                          bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>

                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
