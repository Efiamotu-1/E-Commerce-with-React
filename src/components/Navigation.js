import React from 'react'

 function Navigation() {
    return (
        <>
          
        <div class="container">
        <nav class="navbar navbar-expand-md bg-primary navbar-light fixed-top mb-5">
       
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
        </button> 
        <div class="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
      
            <form class="d-flex">
                <input class="form-control me-2 mr-2" type="search" placeholder="Search" aria-label="Search">
               </input>
                <button class="btn btn-primary bg-light text-primary" type="submit">Search</button>
              </form>

        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link text-white" href="#">Home</a>
            </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-expanded="false">
                      Account
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <li><a class="dropdown-item" href="#">My Account</a></li>
                      <li><a class="dropdown-item" href="#">Orders</a></li>
                      <li><a class="dropdown-item" href="#">Saved Items</a></li>
                    </ul>
                  </li>

                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-expanded="false">
                     More
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <li><a class="dropdown-item" href="#">My Account</a></li>
                      <li><a class="dropdown-item" href="#">Orders</a></li>
                      <li><a class="dropdown-item" href="#">Saved Items</a></li>
                    </ul>
                  </li>
            
        </ul>
        </div>
        
        </nav>
    </div>  
        </>
    )
}
export default Navigation