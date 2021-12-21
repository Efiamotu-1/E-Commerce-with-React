import React, { useEffect, useState } from 'react'
import Carousel from '../components/Carousel'
import Navigation from '../components/Navigation'


function HomePage() {
  const [categories, setCategories] =  useState([]);
  useEffect(() => {
    getCategories();
  }, [])

  const getCategories = async()=>{
    try {
      const data = await fetch("http//:localhost:2001");
      console.log(data );
    } catch (error) {
      console.log(error);
    }
      

  }

    return (
        <>
          <Navigation />  
        <br></br>
          <div class="container-fluid mt-5">
      <div class="row d-flex justify-content-between">
        {
          categories.map(category=>{
            return (
              <div class="col-1">
                <div>
                  <img
                  src={category.image}
                  height="55px" className="rounded-circle" alt=""></img>

                  <a href="" class="text-dark">{category.name}</a>
                </div>
              </div>
            )
          })
        }
        
        {/* <div class="col-1">
          <div>
            <img
            src="https://rukminim1.flixcart.com/flap/128/128/image/e09286c6edd281d0.png?q=100"
            height="55px" className="rounded-circle" alt=""></img>

            <a href="" class="text-dark">Phones</a>
          </div>
        </div>

        <div class="col-1">
          <div>
            <img
            src="https://rukminim1.flixcart.com/flap/128/128/image/e7d30211bbb602cc.png?q=100"
            height="55px" class="rounded-circle" alt=""></img>

            <a href="" class="text-dark">Fashion</a>
          </div>
        </div>

        <div class="col-1">
          <div>
            <img
            src="https://rukminim1.flixcart.com/flap/128/128/image/c5a1aae989f3aac4.png?q=100"
            height="55px" class="rounded-circle" alt=""></img>

            <a href="" class="text-dark">Electronics</a>
          </div>
        </div>

        <div class="col-1">
          <div>
            <img
            src="https://rukminim1.flixcart.com/flap/128/128/image/6214910e86384399.png?q=100"
            height="55px" class="rounded-circle" alt=""></img>

            <a href="" class="text-dark">Home</a>
          </div>
        </div>

        <div class="col-1 d-fle align-items-center">
          <div>
            <img
            src="https://rukminim1.flixcart.com/flap/128/128/image/5126ce89b897c8e9.png?q=100"
            height="55px" class="rounded-circle" alt=""></img>

            <a href="" class="text-dark text-center">Travel</a>
          </div>
        </div>

        <div class="col-1">
          <div>
            <img
            src="https://rukminim1.flixcart.com/flap/128/128/image/fe2a5da6f688d660.png?q=100"
            height="55px" class="rounded-circle" alt=""></img>

            <a href="" class="text-dark">Appliances</a>
          </div>
        </div>

        <div class="col-1">
          <div>
            <img
            src="https://rukminim1.flixcart.com/flap/128/128/image/2a284788d550ac21.png?q=100"
            height="55px" class="rounded-circle" alt=""></img>

            <a href="" class="text-dark">Furniture</a>
          </div>
        </div>
        <div class="col-1">
          <div>
            <img
            src="https://rukminim1.flixcart.com/flap/128/128/image/a2fccf3370909581.png?q=100"
            height="55px" class="rounded-circle" alt=""></img>

            <a href="" class="text-dark text-center">Beauty</a>
          </div>
        </div>
        <div class="col-1">
          <div>
            <img
            src="https://rukminim1.flixcart.com/flap/128/128/image/19b4a157cd8e8ff7.png?q=100"
            height="60px" class="rounded-circle" alt=""></img>

            <a href="" class="text-dark">Grocery</a>
          </div>
        </div> */}
      </div>
    </div>

        <Carousel />

        {/* <div class="container-fluid mt-2">
          <div bg-light>
            <h3>Top selling Items</h3>
            <div class="row">
              <div class="col-3">
                <div class="">
                  <img src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/72/245656/1.jpg?0874" class="card-img-top" alt="...">
                  </img>
                  <div class="card-body">
                    <h5 class="card-title">QUBO Big 1 - 4500mAh</h5>
                    <p class="card-text">#30,990</p>
                    <small class="text-muted"> <strike>#52,450</strike> </small>
                
                  </div>
                </div>
              </div>

              <div class="col-3">
                <div class="">
                  <img src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/63/142576/1.jpg?3347" class="card-img-top" alt="...">
</img>
                  <div class="card-body">
                    <h5 class="card-title">Mens 2021 Carbon Board Shoe</h5>
                    <p class="card-text">#5,499</p>
                    <small class="text-muted"> <strike>#12,600</strike> </small>
                
                  </div>
                 
                </div>
              </div>

              <div class="col-3">
                <div class="">
                  <img src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/31/677026/1.jpg?5990" class="card-img-top" alt="...">
</img>
                  <div class="card-body">
                    <h5 class="card-title">Infinix Hot 11</h5>
                    <p class="card-text">#85,499</p>
                    <small class="text-muted"> <strike>#112,600</strike> </small>
                
                  </div>
                </div>
              </div>

              <div class="col-3">
                <div class="">
                  <img src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/05/053252/1.jpg?4350" class="card-img-top" alt="...">
</img>
                  
                  <div class="card-body">
                    <h5 class="card-title">Genenva 2 in 1 full steel</h5>
                    <p class="card-text">#3,600</p>
                    <small class="text-muted"> <strike>#5,200</strike> </small>
                
                  </div>
                </div>
              </div>
          </div>
          </div>
      
        </div> */}


        </>
    )
}
export default HomePage