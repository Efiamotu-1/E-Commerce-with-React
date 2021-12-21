import React from 'react'

function Carousel() {
    return (
        <>
          <div id="carouselExampleIndicators" class="carousel slide mt-2" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>


      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://rukminim1.flixcart.com/flap/1688/280/image/b2199b040513b1ae.jpg?q=50" data-tkid="M_a9ccf05a-22c2-4f48-9c4e-cee156205ebd_2.XFBIIRZYQES6" class="" alt="...">
          </img>
        </div>
        <div class="carousel-item">
          <img src="https://rukminim1.flixcart.com/flap/1688/280/image/3510acb9d34b51dc.jpg?q=50" class="" alt="...">
          </img>
        </div>
        <div class="carousel-item">
          <img src="https://rukminim1.flixcart.com/flap/1688/280/image/a11b99e85190ffa2.jpg?q=50" class="" alt="...">
          </img>
        </div>
        <div class="carousel-item">
          <img src="https://rukminim1.flixcart.com/flap/1688/280/image/0cf3cc3e7cbf6531.jpg?q=50" class="" alt="...">
         </img>
        </div>
      </div>

      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>  

    {/* <script type="text/javascript" src="../js/jquery-3.3.1.slim.min.js"></script>
    <script type="text/javascript" src=""></script> */}
        </>
    )
}
export default Carousel