document.querySelector('#header').innerHTML = `
    <div class="container-fluid py-4 px-3 px-md-5">
        <div class="row align-items-center justify-content-between">
            <div class="col-lg-3">
                <div class="header-content-1 d-flex justify-content-between align-items-center">
                    <div class="mobile-navbar d-lg-none shadow-lg">
                        <nav class="d-flex flex-column px-4 px-md-5">
                            <a href="index.html" class="fw-bold">Home</a>
                            <a href="shop.html" class="fw-bold">Shop</a>
                            <a href="" class="fw-bold">About</a>
                            <div class="d-inline-block">
                                <button style="text-decoration: none; font-size:21px; color:black" data-bs-toggle="dropdown" class="btn dropdown dropdown-toggle fw-bold">
                                    Pages
                                </button>
                                <ul class="dropdown-menu p-2">
                                    <li><a class="dropdown-item" href="">Product Details</a></li>
                                    <li><a class="dropdown-item" href="cart.html">Cart</a></li>
                                    <li><a class="dropdown-item" href="#">Checkout</a></li>
                                </ul>
                            </div>
                            <a href="#switch2" style="text-decoration: none; font-size:30px;"
                                data-bs-toggle="offcanvas"><i class="fa-solid fa-gear"></i></a>
                            <div class="offcanvas offcanvas-end px-2" id="switch2">
                                <div class="offcanvas-header ">
                                    <div class="offcanvas-title ">
                                        <h2 class="pt-4">COLOR SWITCHER</h2>
                                    </div>
                                </div>
                                <div class="offcanvas-body text-start">
                                    <div class="colors d-flex">
                                        <div class="black shadow-lg"></div>
                                        <div class="cream ms-3 shadow-lg"></div>
                                    </div>
                                    <div class="mobile-icons mt-3 ms-2">
                                        <a href="" style="text-decoration: none; font-size:35px;"><i class="bi bi-search"></i></a>
                                        <a href="cart.html" style="text-decoration: none; font-size:35px;" class="mx-3"><i
                                                class="bi bi-cart"></i></a>
                                        <a href="" style="text-decoration: none; font-size:35px;"><i class="bi bi-file-person"></i></a>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <img src="assets/images/logo.png" alt="" width="210px">
                    <a href="" style="text-decoration: none; font-size:30px;" class="d-lg-none"><i
                            class="fa-solid fa-bars"></i></a>
                </div>
            </div>
            <div class="col-lg-4 d-none d-lg-block">
                <div class="header-content-2 text-center">
                    <nav class="d-flex align-items-center justify-content-center">
                        <a href="index.html" style="text-decoration: none; font-size:21px;">Home</a>
                        <a href="shop.html" style="text-decoration: none; font-size:21px;" class="mx-xl-4 mx-3">Shop</a>
                        <a href="" style="text-decoration: none; font-size:21px;">About</a>
                        <div class="d-inline-block ms-3">
                            <button style="text-decoration: none; font-size:21px; color:white" data-bs-toggle="dropdown" class="btn dropdown dropdown-toggle">
                                Pages
                            </button>
                            <ul class="dropdown-menu p-2">
                                <li><a class="dropdown-item" href="">Product Details</a></li>
                                <li><a class="dropdown-item" href="cart.html">Cart</a></li>
                                <li><a class="dropdown-item" href="">Checkout</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
            <div class="col-lg-3 d-none d-lg-block">
                <div class="header-content-3 text-end">
                    <a href="" style="text-decoration: none; font-size:30px;"><i class="bi bi-search"></i></a>
                    <a href="cart.html" style="text-decoration: none; font-size:30px;" class="mx-4"><i
                            class="bi bi-cart"></i></a>
                    <a href="" style="text-decoration: none; font-size:30px;"><i class="bi bi-file-person"></i></a>
                    <a href="#switch" style="text-decoration: none; font-size:30px;" class="ms-4"
                        data-bs-toggle="offcanvas"><i class="fa-solid fa-gear"></i></a>
                    <div class="offcanvas offcanvas-end text-start px-2" id="switch">
                        <div class="offcanvas-header ">
                            <div class="offcanvas-title ">
                                <h2 class="pt-4">COLOR SWITCHER</h2>
                            </div>
                        </div>
                        <div class="offcanvas-body text-start">
                            <div class="colors d-flex">
                                <div class="black shadow-lg"></div>
                                <div class="cream ms-3 shadow-lg"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`