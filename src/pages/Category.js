import React from "react";
import {Row, Container } from "react-bootstrap";
import Navigation from "../components/reusable/Navigation";
function Category() {


  return (
    <>
      <Navigation />
      <div className="mt-3 mb-3 justify-content-center d-flex pt-5">
        <h1 className="display-4">Mobile Phones</h1>
      </div>
      <Container className="mt-5">
        <Row>
          <div>

          </div>
        </Row>
      </Container>
    </>
  );
}
export default Category;
