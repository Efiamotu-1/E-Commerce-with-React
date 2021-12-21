import React from 'react'
import Navigation from './Navigation'

function ChangePassword() {
    return (
        <>
        <Navigation />
            <div class="text-center">
        <h4 class="display-4 mt-5 p-5 ">Change Password</h4>

    </div>
    <div class="container w-50">
        <div class="justify-content-center bg-dark d-flex ">
            <form action="" class="form-group w-75 mt-3 mb-3 justify-content-center">
 
              
                <div>
         
                <input type="password" name="new-password" id="" class="form-control mb-3 mt-3" placeholder="New Password">
                </input>
                </div>

                <div>
         
                    <input type="password" name="confirm-password" id="" class="form-control mb-3 mt-3" placeholder="Confirm Password">
                    </input>
                    </div>

                
                <div class="text-center">
                    <input type="submit" name="password-change" value="Reset Password" class="btn btn-primary mt-3 mb-3">
                    </input>
                </div>


            </form>
           
        </div>
    
    </div>
        </>
    )
}
export default ChangePassword