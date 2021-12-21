import React from "react";
import Navigation from "./Navigation";



function ResetPassword() {
    return (
        <>
        <Navigation />
           <div class="text-center">
        <h4 class="display-4 mt-5 p-5 ">Reset Password</h4>

    </div>
    <div class="container w-50">
        <div class="justify-content-center bg-light d-flex ">
            <form action="" class="form-group w-75 mt-3 mb-3 justify-content-center">
 
              
                <div>
         
                <input type="email" name="name" id="" class="form-control mb-3 mt-3" placeholder="E-mail">
                </input>
                </div>

                
                <div class="text-center">
                    <input type="submit" name="password-" value="Reset Password" class="btn btn-primary mt-3 mb-3">
                </input>
                </div>

                <div class="text-center">
                    <input type="submit" name="login-page" value="Return To Login" class="btn btn-outline-primary mt-3 mb-3">
               </input>
                </div>

            </form>
           
        </div>
    
    </div> 
        </>
    )
}
export default ResetPassword