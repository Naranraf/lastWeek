import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector, useDispatch } from "react-redux";
import { getNewsThunk } from "../store/slices/news.slice";
import { useEffect } from "react";

const Home = () => {

  const dispatch = useDispatch();
  // const newsList = useSelector((state) => state.news);

 

  useEffect(() => {
    dispatch(getNewsThunk());
  }, []);

  return (
    <div>
      {/* <Row>
        <Col md={4} lg={3}>
          Filtrados
        </Col>
        <Col md={8} lg={9}>
          <h1>Productos</h1>
          <Row xs={1} md={2} lg={3}>
            {newsList?.map((news) => (
              <Col className="mb-3" key={news.id}>
                <Card className="w-100">
                  <Card.Img variant="top" src="{news.image}" /> 
                  
                  <Card.Body>
                    <Card.Title>{news.headline}</Card.Title>
                 
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Ver detalle </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row> */}
    </div>
  );
};

export default Home;
