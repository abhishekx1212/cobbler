let footer = `
    <div class="container">
        <div class="row gy-4 px-2">
            <div class="col-lg-3 col-sm-6">
                <div class="footer-content-1">
                    <img class="footer-img" src="assets/images/logo-dark.png" alt="" width="100%">
                    <p class="fw-semibold mt-4">
                        Welcome to Cobbler, your go-to destination for exquisite footwear & exceptional
                        craftsmanship. With a passion for quality and timeless style, we pride ourselves with this.
                    </p>
                </div>
            </div>
            <div class="col-lg-2 col-sm-6 offset-lg-1 ps-sm-5 ps-lg-0">
                <div class="footer-content-2">
                    <h3>Categories</h3>
                    <nav class="d-flex flex-column">
                        <a href="" class="mt-3">Classics</a>
                        <a href="" class="mt-2">Modern</a>
                        <a href="" class="mt-2">Sport</a>
                        <a href="" class="mt-2">Comfort</a>
                    </nav>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
                <div class="footer-content-2">
                    <h3>Essential Links</h3>
                    <nav class="d-flex flex-column">
                        <a href="" class="mt-3">Home</a>
                        <a href="" class="mt-2">Cart</a>
                        <a href="" class="mt-2">Shop</a>
                        <a href="" class="mt-2">Product Detail</a>
                    </nav>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6 ps-sm-5 ps-lg-0">
                <div class="footer-content-3">
                    <h3>Subscribe to our Newsletter</h3>
                    <input type="email" class="form-control footer-form mt-3" placeholder="Your Email">
                    <div class="footer-button mt-3">
                        <button class="btn shadow">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-12">
                <div class="footer-copy text-center">
                    <span class="fw-semibold" style="font-size: 17px;">
                        ©2023 All rights are reserved by <span
                            style="color: rgba(75, 111, 211, 0.938);">TRIGON</span>
                    </span>
                </div>
            </div>
        </div>
    </div>
`
document.getElementById('footer').innerHTML = footer;