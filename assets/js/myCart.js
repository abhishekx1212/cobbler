const myShoes = JSON.parse(localStorage.getItem('myShoes'));
function printTable1() {
    let cartdata = "";
    let cartData2 = "";
    let totalVal = 0;
    if (myShoes) {
        for (let i = 0; i < myShoes.length; i++) {
            totalVal += myShoes[i].rate * myShoes[i].quantity;
            cartdata += `
                         <div class="col-12">
                            <div class="cart-table shadow">
                                <table class="table">
                                    <tbody>
                                        <tr>
                                            <td rowspan="2" class="col-2">
                                                <img src="${myShoes[i].image}" alt="" width="98px" height="120px"
                                                    class="">
                                            </td>
                                            <td colspan="2">
                                                <h5>Type: ${myShoes[i].name}</h5>
                                            </td>
                                            <td class="text-center">
                                                <h5>Price</h5>
                                            </td>
                                            <td class="text-center">
                                                <h5>Quantity</h5>
                                            </td>
                                            <td class="text-center">
                                                <h5>Sub Total</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="2" class="table-index fw-semibold">COLOR: ${myShoes[i].color}</td>
                                            <td class="text-center table-index fw-semibold">$${myShoes[i].rate}</td>
                                            <td class="">
                                                <div class="qty-data d-flex justify-content-center align-items-center">
                                                    <button class="decrease shadow" onclick="decreaseQ(${i})">
                                                        <h3>-</h3>
                                                    </button>
                                                    <div class="qty-num mx-2">${myShoes[i].quantity}</div>
                                                    <button class="increase shadow" onclick="increaseQ(${i})">
                                                        <h3>+</h3>
                                                    </button>
                                                </div>
                                            </td>
                                            <td class="text-center table-index fw-semibold">$${myShoes[i].rate * myShoes[i].quantity}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
        `
        }
        for (let i = 0; i < myShoes.length; i++) {
            cartData2 += `
                <div class="col-12 d-md-none">
                    <div class="mobile-card shadow-lg py-3">
                        <div class="mobile-img text-center">
                            <img src="${myShoes[i].image}" alt="" class="">
                        </div>
                        <div class="mobile-content text-center mt-3">
                            <h1>Type: ${myShoes[i].name}</h1>
                            <div class="mobile-cart-details">
                                <div class="row px-4 align-items-center">
                                    <div class="col-6">
                                        <ul class="p-0 text-start">
                                            <li>Color:</li>
                                            <li>Price:</li>
                                            <li>Quantity:</li>
                                            <li>Sub Total:</li>
                                        </ul>
                                    </div>
                                    <div class="col-6">
                                        <ul class="p-0 userside-details text-end">
                                            <li>${myShoes[i].color}</li>
                                            <li>$${myShoes[i].rate}</li>
                                            <li>
                                                <div class="mobile-buttons d-flex justify-content-end">
                                                    <button class="decrease shadow" onclick="decreaseQ(${i})"><h3>-</h3></button>
                                                    <div class="qty-num mx-2 d-flex justify-content-center align-items-center">${myShoes[i].quantity}</div>
                                                    <button class="increase shadow" onclick="increaseQ(${i})"><h3>+</h3></button>
                                                </div>
                                            </li>
                                            <li>$${myShoes[i].rate * myShoes[i].quantity}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               `
        }
    }

    document.querySelector('#cart-row').innerHTML = cartdata;
    document.querySelector('#cart-row-2').innerHTML = cartData2;

    let total2 = document.querySelector('#subTotal').innerHTML = `$${totalVal}`;
    let shipFee = document.querySelector('#shippingFee').innerHTML = `$${(totalVal * 5) / 100}`;
    let tax = document.querySelector('#tax').innerHTML = `$${(totalVal * 12) / 100}`
    let discount = document.querySelector('#discount').innerHTML = `$${(totalVal * 3) / 100}`
    let grandTotal = totalVal + (totalVal * 5) / 100 + (totalVal * 12) / 100 - (totalVal * 3) / 100;
    document.querySelector('#grandTotal').innerHTML = `$${grandTotal.toFixed(2)}`;
}

function decreaseQ(data) {
    if (myShoes[data].quantity == 1) {
        myShoes.splice(data, 1)
        saveToLocalStorage();
        printTable1();
    } else {
        myShoes[data].quantity -= 1;
        saveToLocalStorage();
        printTable1();
    }
}

function increaseQ(data) {
    myShoes[data].quantity += 1;
    saveToLocalStorage();
    printTable1();
}

function clearAll() {
    myShoes.splice(0, myShoes.length);
    saveToLocalStorage();
    printTable1();
}

printTable1();

const saveToLocalStorage = () => {
    localStorage.setItem('myShoes', JSON.stringify(myShoes));
}