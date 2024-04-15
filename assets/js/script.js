
const shoes = [
    { id: 0, image: 'assets/images/p-1.png', rate: 69, name: 'Sports Blue', color: 'BLUE' },
    { id: 1, image: 'assets/images/p-2.png', rate: 79, name: 'Classic Black', color: 'BLACK' },
    { id: 2, image: 'assets/images/p-3.png', rate: 59, name: 'Modern Red', color: 'RED' },
    { id: 3, image: 'assets/images/p-4.png', rate: 45, name: 'Classic Brown', color: 'BROWN' },
    { id: 4, image: 'assets/images/p-5.png', rate: 50, name: 'Modern Brown', color: 'BROWN' },
    { id: 5, image: 'assets/images/p-6.png', rate: 90, name: 'Modern Yellow', color: 'YELLOW' },
    { id: 6, image: 'assets/images/p-7.png', rate: 99, name: 'Sports White', color: 'WHITE' },
    { id: 7, image: 'assets/images/p-8.png', rate: 88, name: 'Modern Blue   ', color: 'BLUE' },
]

localStorage.setItem('shoes', JSON.stringify(shoes));

for (let i = 0; i < shoes.length; i++) {
    document.getElementById('row-1').innerHTML += `     
        <div class="swiper-slide">
            <div class="arrival-content">
                <div class="arr-img shadow">
                    <div class="arrival-hover ">
                        <div class="hover-icon me-2 d-flex justify-content-center align-items-center">
                            <a href="about.html"><i onclick="aboutPro(${i})" class="bi bi-eye" style="font-size:35px;"></i></a>
                        </div>
                        <div class="hover-icon ms-2 d-flex justify-content-center align-items-center">
                            <i class="bi bi-shop-window" style="font-size:35px;"></i>
                        </div>
                    </div>
                    <img src="${shoes[i].image}" alt="" width="100%">
                    <div class="arrival-rate">
                        <h1>$${shoes[i].rate}</h1>
                    </div>
                </div>
                <div class="arr-info mt-3">
                    <h3>${shoes[i].name}</h3>
                    <button class="slide-btn btn fw-semibold px-5 py-2 rounded-4 mt-2"
                        style="font-size: 22px;" onclick="add(${i})">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>   
    `

    document.getElementById('row-2').innerHTML += `
    <div class="col-xl-3 col-lg-4 col-sm-6">
        <div class="arrival-content text-center">
            <div class="arr-img shadow">
                <div class="arrival-hover ">
                    <div class="hover-icon me-2 d-flex justify-content-center align-items-center">
                        <a href="about.html"><i onclick="aboutPro(${i})" class="bi bi-eye" style="font-size:35px;"></i></a>
                    </div>
                    <div class="hover-icon ms-2 d-flex justify-content-center align-items-center">
                        <i  class="bi bi-shop-window" style="font-size:35px;"></i>
                    </div>
                </div>
                <img src="${shoes[i].image}" alt="" width="100%">
                <div class="arrival-rate">
                    <h1>$${shoes[i].rate}</h1>
                </div>
            </div>
            <div class="arr-info mt-2">
                <h3>${shoes[i].name}</h3>
                <button class="slide-btn btn fw-semibold px-5 py-2 rounded-4 mt-2"
                        style="font-size: 22px;" onclick="add(${i})">
                        Add to Cart
                </button>
            </div>
        </div>
    </div>
    `
}

let myShoes = JSON.parse(localStorage.getItem('myShoes'))
const add = (id) => {

    if (myShoes === null) {
        myShoes = [];
    }
    const cartShoe = {
        id: shoes[id].id,
        image: shoes[id].image,
        name: shoes[id].name,
        rate: shoes[id].rate,
        color: shoes[id].color,
        quantity: 1
    }

    const currentIndex = myShoes.findIndex((idx) => {
        return idx.id === cartShoe.id;
    })

    if (currentIndex != -1) {
        myShoes[currentIndex].quantity += 1;
    } else {
        myShoes.push(cartShoe);
    }

    saveToLocalstorage();
}

const saveToLocalstorage = () => {
    localStorage.setItem('myShoes', JSON.stringify(myShoes));
}

function aboutPro(index) {
    let abtIndx = index;
    console.log(abtIndx)
    localStorage.setItem('abtIndx', JSON.stringify(abtIndx))
}



