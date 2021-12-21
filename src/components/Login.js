import React from "react";
import { Link } from "react-router-dom";

import Image from '../asset/PASSPORT.jpg'
import Navigation from "./Navigation";

export default function Login() {
    return (
        <>
        <Navigation />
        {/* <div className="justify-content-center mt-5">
<img src={Image} alt=".../"/>
            
        </div> */}
  <div class="text-center">
      <h4 class="display-4 mt-5 p-5">Login</h4>
    </div>
           <div class="container w-50">
        <div class="justify-content-center bg-light d-flex ">
            <form action="" class="form-group w-50 mt-3 mb-3 justify-content-center">
                <div>
         
                <input type="email" name="name" id="" class="form-control mb-3 mt-3" placeholder="E-mail">
                </input>
                </div>
                <div>

                <input type="password" name="password" id="" class="form-control" placeholder="Password">
                </input>
                </div>
                <div class="text-center">
                    <Link to="/register"> <input type="submit" name="submit" value="Login" class="btn btn-primary mt-3 mb-3">
                    
                    </input></Link>
                   
                </div>
        <hr></hr>

            </form>
           
        </div>
        <div class="d-flex justify-content-center bg-light">
            
               <p className="text-primary">Forgot Password?</p>
           
        </div>
    </div> 
    
        </>
    )
}
