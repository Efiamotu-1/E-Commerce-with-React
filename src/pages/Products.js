import React from "react";
import Navigation from "../components/Navigation";

function Products() {
  return (
    <>
      <Navigation />

      <div class="container mt-5 p-5">
        <div class="row d-flex">
          <div class="col-8 bg-light mr-3">
            <div class="d-flex mt-3 mb-3">
              <div class="col-5">
                <img
                  src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/72/245656/1.jpg?0874"
                  alt="..."
                ></img>
              </div>

              <div class="ml-5">
                     <p>QUBO Big1 - 4500mAh Big Battery, 6.26"WaterDrop Screen, 1GB+16GB Memory, 5MP+8MP Camera, Fingerprint,Android 10 Smartphone</p>
                    <p>Brand: QUBO | Similar products from QUBO</p><hr></hr>
                    <p>₦ 30,990</p>
                    <p><strike> ₦ 58,822</strike></p>
                    <small>+ shipping from ₦ 180 to LEKKI-AJAH (SANGOTEDO)</small><hr></hr>
                    <p>VARIATION AVAILABLE</p>
                    <button class="btn btn-outline-primary">GRADIENT</button>
                    <input type="button" name="submit" value="ADD TO CART" id="" class=" mt-3 btn btn-block btn-primary">
                </input>
                </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Products;
