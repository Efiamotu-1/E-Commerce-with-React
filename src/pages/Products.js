import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Navigation from "../components/reusable/Navigation";

function Products() {
  let data = [
    {
      product:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/72/245656/1.jpg?0874",
      description:
        'QUBO Big1 - 4500mAh Big Battery, 6.26"WaterDrop Screen, 1GB+16GB Memory, 5MP+8MP Camera, Fingerprint,Android 10 Smartphone',
      brand: "Brand: QUBO | Similar products from QUBO",
      price: "₦ 30,990",
      oldPrice: " ₦ 58,822",
      shipping: "+ shipping from ₦ 180 to LEKKI-AJAH (SANGOTEDO)",
      variation: "VARIATION AVAILABLE",
    },
  ];

  return (
    <>
      <Navigation />

      <Container>
        <Row>
          <Col md={8} className="bg-light mt-3">
            {data.map((products) => {
              return (
                <div className="d-flex mt-3 mb-3">
                  <Col>
                    <img src={products.product} alt="..."></img>
                  </Col>

                  <div className="ms-3 justify-content-end">
                    <p>{products.description}</p>
                    <p>{products.brand}</p>
                    <hr></hr>
                    <p>{products.price}</p>
                    <p>
                      <strike>{products.oldPrice}</strike>
                    </p>
                    <small>{products.shipping}</small>
                    <hr></hr>
                    <p>{products.variation}</p>
                    <button className="btn btn-outline-primary">GRADIENT</button>
                    <div>
                      <input
                        type="button"
                        name="submit"
                        value="ADD TO CART"
                        id=""
                        className="mt-3 btn btn-block btn-primary"
                      ></input>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Products;

// This is used for connecting to a server, don't for get boss
// useEffect(() => {
//   getCategories();
// }, [])

// const getCategories = async()=>{
//   try {
//     const data = await fetch("http//:localhost:2001");
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }

// }
