const shoes = JSON.parse(localStorage.getItem('shoes'));
function printProduct() {
    for (let i = 0; i < shoes.length; i++) {
        document.getElementById('shop-row').innerHTML += `
    <div class="col-lg-4 col-sm-6">
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
}

printProduct();
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

let srcBtn = document.getElementById('srcIcon');
srcBtn.addEventListener('click', () => {
    let srchContent = document.getElementById('srch-content');
    let result = shoes.find((val) => {
        return val.name === srchContent.value;
    })
    if (srchContent.value == "") {
        srchContent.value = "Empty!!";
    } else {
        if (result != undefined) {
            document.getElementById('shop-row').innerHTML = `
        <div class="col-lg-4 col-sm-6">
            <div class="arrival-content text-center">
                <div class="arr-img shadow">
                    <div class="arrival-hover ">
                        <div class="hover-icon me-2 d-flex justify-content-center align-items-center">
                            <a href="about.html"><i onclick="aboutPro(${result.id})" class="bi bi-eye" style="font-size:35px;"></i></a>
                        </div>
                        <div class="hover-icon ms-2 d-flex justify-content-center align-items-center">
                            <i class="bi bi-shop-window" style="font-size:35px;"></i>
                        </div>
                    </div>
                    <img src="${result.image}" alt="" width="100%">
                    <div class="arrival-rate">
                        <h1>$${result.rate}</h1>
                    </div>
                </div>
                <div class="arr-info mt-2">
                    <h3>${result.name}</h3>
                    <button class="slide-btn btn fw-semibold px-5 py-2 rounded-4 mt-2"
                            style="font-size: 22px;" onclick="add(${result.id})">
                            Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `
        } else {
            document.getElementById('shop-row').innerHTML = "";
            printProduct();
            alert('Not Found!..')
        }
    }
})

function listValue(shoes) {
    let srcData = "";
    shoes.forEach((val) => {
        srcData += `<option value="${val.name}">${val.name}</option>`
    });
    document.getElementById('myList').innerHTML = srcData;
}

listValue(shoes);

const saveToLocalstorage = () => {
    localStorage.setItem('myShoes', JSON.stringify(myShoes));
}

function aboutPro(index) {
    let abtIndx = index;
    console.log(abtIndx)
    localStorage.setItem('abtIndx', JSON.stringify(abtIndx))
}