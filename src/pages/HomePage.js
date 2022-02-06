// import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card} from "react-bootstrap";
import Slider from "../components/reusable/Carousel";
import Navigation from "../components/reusable/Navigation";

const listOfCategories = [
  {
    image:
      "https://rukminim1.flixcart.com/flap/128/128/image/e09286c6edd281d0.png?q=100",
    name: "Phones",
  },
  {
    image:
      "https://rukminim1.flixcart.com/flap/128/128/image/e7d30211bbb602cc.png?q=100",
    name: "Fashion",
  },
  {
    image:
      "https://rukminim1.flixcart.com/flap/128/128/image/c5a1aae989f3aac4.png?q=100",
    name: "Electronics",
  },
  {
    image:
      "https://rukminim1.flixcart.com/flap/128/128/image/6214910e86384399.png?q=100",
    name: "Home",
  },
  {
    image:
      "https://rukminim1.flixcart.com/flap/128/128/image/5126ce89b897c8e9.png?q=100",
    name: "Travel",
  },
  {
    image:
      "https://rukminim1.flixcart.com/flap/128/128/image/fe2a5da6f688d660.png?q=100",
    name: "Appliances",
  },
  {
    image:
      "https://rukminim1.flixcart.com/flap/128/128/image/2a284788d550ac21.png?q=100",
    name: "Furniture",
  },
  {
    image:
      "https://rukminim1.flixcart.com/flap/128/128/image/a2fccf3370909581.png?q=100",
    name: "Beauty",
  },
  {
    image:
      "https://rukminim1.flixcart.com/flap/128/128/image/19b4a157cd8e8ff7.png?q=100",
    name: "Grocery",
  },
  {
    image:
      "https://e7.pngegg.com/pngimages/833/426/png-clipart-shopping-cart-icon-shopping-cart-black-design.png",
    name: "Add New",
  },
];

let singleProducts = [
  {
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/72/245656/1.jpg?0874",
    name: "QUBO Big 1 - 4500mAh",
    price: "#30,990",
    oldprice: "#52,450",
  },
  {
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/63/142576/1.jpg?3347",
    name: "Mens 2021 Carbon Board Shoe",
    price: "#5,499",
    oldprice: "#12,600",
  },
  {
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/31/677026/1.jpg?5990",
    name: "Infinix Hot 11",
    price: "#85,499",
    oldprice: "#112,600",
  },
  {
    image:
      "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/05/053252/1.jpg?4350",
    name: "Genenva 2 in 1 full steel",
    price: "#3,600",
    oldprice: "#5,200",
  },
];

function HomePage() {
  // const [categories, setCategories] = useState(listOfCategories);
  // const [products, setProduct] = useState(singleProducts);

  // const categories = [{listOfCategories}]
  // const products = [{singleProducts}]

  return (
    <>
      <Navigation />

      {/* <Link to = "/category"> */}
      <Container fluid className="mt-3">
        <Row className="d-flex justify-content-between">
          {listOfCategories.map((category) => {
            // console.log(category);
            return (
              <Col sm={3} md={1} className="d-flex justify-content-center">
                <div>
                  <img
                    src={category.image}
                    height="55px"
                    className="rounded-circle"
                    alt=""
                  ></img>

                  <p className="text-dark text-center">{category.name}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
      {/* </Link> */}

      <Slider />

      <div className="mt-2 ms-4n">
        <h3>Top selling Items</h3>
      </div>

      <Link to="/products">
        <Container fluid className=" mt-2">
          <Row>
            {
            
            singleProducts.map((product) => {
              return (
                <Col md={3}>
                  {/* <div class="">
                  <img src={product.image} class="card-img-top" alt="...">
                  </img>
                  <div class="card-body">
                    <h5 class="card-title">{product.name}</h5>
                    <p class="card-text">{product.price}</p>
                     <small class="text-muted"> <strike>{product.oldprice}</strike> </small>

                
                  </div>
                </div> */}

                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={product.image} />
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text>{product.price} </Card.Text>
                      <small class="text-muted">
                        {" "}
                        <strike>{product.oldprice}</strike>{" "}
                      </small>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })
            
            }
          </Row>
        </Container>
      </Link>
    </>
  );
}
export default HomePage;
