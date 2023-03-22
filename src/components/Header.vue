<template>
   <div class="web-header"> 
   <nav class="navbar navbar-expand-lg nav-custome">
  <a class="navbar-brand logo-top" href="#"><img src="../assets/images/workshires.png"></a>
  <div class=" navbar-collapse" id="navbarNavDropdown1">
 <form class="form-inline serch-custom">
<div class="p-1 bg-light rounded rounded-pill shadow-sm">
            <div class="input-group top-serch-custome">
               <div class="input-group-append">
                <button id="button-addon1" type="submit" class="btn btn-outline-info my-2 my-sm-0"><i class='bx bx-search'></i></button>
              </div>
              <input type="search" placeholder="searching for?" aria-describedby="button-addon1" class="form-control">
              <div class="input-group-append">
                <button id="button-addon1" type="submit" class="btn btn-outline-success"> Search</button>
              </div>
            </div>
          </div>
  
  </form>
    <ul class="navbar-nav navbar-ax">
      <li class="nav-item active">
        <a class="nav-link homeicn" href="#"><span><i class='bx bxs-category'></i></span> &nbsp; <span> Marketplace</span> </a>
      </li>
     
      <li class="nav-item">
        <router-link to="/admin-login" class="nav-link">Project</router-link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
          Freelance
        </a>
        <ul class="dropdown-menu">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </ul>
      </li>
    </ul>  
  </div>
 <ul class="navbar-nav d-flexbase">
      <li class="nav-item active">
        <a class="nav-link homeicn" href="#"><span><i class='bx bx-cart'></i></span> &nbsp; <span> Become a Seller </span></a>
      </li>
     
      <li class="nav-item">
        <a class="nav-link" href="#">Sign in</a>
      </li>
      <li class="nav-item pr-0">
       <router-link to = "/register-form" class="btn btn-primary join-us">Join</router-link>
        
       
        
      </li>
    </ul>

</nav>



<nav class="navbar navbar-expand-lg navbar-light  bottom-nave">
 

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown2" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse  justify-content-center" id="navbarNavDropdown2">
    <ul class="navbar-nav market-place">
      <li class="nav-item active">
        <a class="nav-link homeicn" href="#"> <span><i class='bx bxs-home'></i></span> &nbsp; <span>Home </span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Grapics & Designing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Digital marketing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Writing & Transaction</a>
      </li>
        <li class="nav-item">
        <a class="nav-link" href="#">Video & Animation</a>
      </li>
        <li class="nav-item">
        <a class="nav-link" href="#">Music & Audio</a>
      </li>
    </ul>
  </div>
</nav>
</div>
</template>

<script>
export default {
  name: "Header"
}
</script>