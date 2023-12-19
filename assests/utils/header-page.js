function renderHeaderPage(){
    const elHeader = document.getElementById('header-page-main');
    elHeader.innerHTML = `
    <nav class="top-nav "> <!-- Thanh menu-->
    <div class="container-fluid ">
      <div class="row align-items-center justify-content-between">
        <div class="content d-flex  justify-content-between">
          <div class="header-left d-flex align-items-center" >
            <div class="logo">
              <a href=""><img src="https://preview.colorlib.com/theme/furn/assets/img/logo/logo.png" alt="" /></a>
            </div>
            <div class="menu">
              <nav>
                <ul class=" " >
                  <li><a href="index.html">Home</a></li>
                  <li><a href="products.html">Product</a></li>
                  <li><a href="">About</a></li>
                  <li class="subnav-page" >
                    <a href="">Page</a>
                    <ul class="subnav1">
                      <li><a href="">Login</a></li>
                      <li><a href="">Card</a></li>
                      <li><a href="">Categories</a></li>
                      <li><a href="">Checkout</a></li>
                      <li><a href="">Product Details</a></li>
                    </ul>
                  </li>
                  <li class="subnav-blog">
                    <a href="">Blog</a>
                    <ul class="subnav2">
                      <li><a href="">Blog</a></li>
                      <li><a href="">Blog Details</a></li>
                      <li><a href="">Elements</a></li>
                    </ul>
                  </li>
                  <li><a href="">Contact</a></li>
                </ul>
              </nav>
            </div>
          </div>
          <div class="header-right  ">
              <div class="search">
                  <ul>
                      <li>
                          <form action="#">
                            <input type="text" name="Search" placeholder="Search products" >
                            <i class="fa-solid fa-magnifying-glass"></i>
                          </form>
                      </li>
                      <li>
                        <a href="">My Account</a>
                      </li>
                      <li>
                          <div class="card-tor">
                              <img src="https://preview.colorlib.com/theme/furn/assets/img/icon/card.svg" alt="">
                              <span>0</span>
                          </div>
                      </li>
                  </ul>
              </div>
          </div>
        </div>
      </div>
    </nav>
    `
}
renderHeaderPage()