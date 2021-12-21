import React from "react";
import Navigation from "./Navigation";

function Register() {
    return (
        <>
        <Navigation />
         <div class="text-center">
        <h4 class="display-4 mt-5 p-5 ">Create Account</h4>

    </div>

    <div class="container w-50">
        <div class="justify-content-center bg-light d-flex ">
            <form action="" class="form-group w-75 mt-3 mb-3 justify-content-center">
              
                <div>
         
                    <input type="text" name="first-name" id="" class="form-control mb-3 mt-3" placeholder="First Name">
                    </input>
                 </div>

                 <div>
         
                    <input type="text" name="last-name" id="" class="form-control mb-3 mt-3" placeholder="Last Name">
                    </input>
                 </div>
              
                <div>
         
                <input type="email" name="name" id="" class="form-control mb-3 mt-3" placeholder="E-mail">
                </input>
                </div>
                <div>

                <input type="password" name="password" id="" class="form-control mb-3 mt-3" placeholder="Password">
                </input>
                </div>

                <div>

                    <input type="tel" name="number" id="" class="form-control mb-3 mt-3" placeholder="Phone Number">
                    </input>
                </div>

                <div className="d-flex align-items-start">
                    <input type="checkbox" name="terms" id="" className="mr-2">
                    </input>
                   <p> I accept the terms and conditions</p>

                </div>

                
                <div class="text-center">
                    <input type="submit" name="submit" value="Create" class="btn btn-primary mt-3 mb-3">
                    </input>
                </div>

            </form>
           
        </div>
    
    </div>
        </>
    )
}
export default Register