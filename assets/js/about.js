
// const shoes = [
//     { id: 0, image: 'assets/images/p-1.png', rate: 69, name: 'Running Trainers', color: 'BLUE' },
//     { id: 1, image: 'assets/images/p-2.png', rate: 79, name: 'Golden Goose', color: 'BLACK' },
//     { id: 2, image: 'assets/images/p-3.png', rate: 59, name: 'Felted Sneakers', color: 'RED' },
//     { id: 3, image: 'assets/images/p-4.png', rate: 45, name: 'Classic Timberland', color: 'BROWN' },
//     { id: 4, image: 'assets/images/p-5.png', rate: 50, name: 'Running Trainers', color: 'BROWN' },
//     { id: 5, image: 'assets/images/p-6.png', rate: 90, name: 'Golden Goose', color: 'YELLOW' },
//     { id: 6, image: 'assets/images/p-7.png', rate: 99, name: 'Felted Sneakers', color: 'WHITE' },
//     { id: 7, image: 'assets/images/p-8.png', rate: 88, name: 'Classic Timberland', color: 'BLUE' },
// ]
const shoes = JSON.parse(localStorage.getItem('shoes'));
const abtIndx = JSON.parse(localStorage.getItem('abtIndx'));
function displayAbout() {
    let myAbout = `
    <div class="container">
        <div class="row py-5 align-items-center px-2">
            <div class="col-lg-4">
                <div class="about-img">
                    <img class="shadow" src=${shoes[abtIndx].image} alt="" width="100%">
                </div>
            </div>
            <div class="col-lg-7 ms-lg-5 mt-4">
                <div class="about-info">
                    <h1>
                    ${shoes[abtIndx].name}
                    </h1>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non commodi, voluptate,
                        perferendis soluta repellendus, expedita neque sed nobis at possimus in nulla vitae
                        exercitationem ipsam! Similique molestias ducimus voluptatum voluptatem!
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non commodi, voluptate,
                        perferendis soluta repellendus, expedita neque sed nobis at possimus in nulla vitae
                        exercitationem ipsam! Similique molestias ducimus voluptatum voluptatem!
                    </p>
                    <h4 class="fw-semibold">Price: $${shoes[abtIndx].rate}</h4>
                    <h4 class="py-2 fw-semibold">Color: ${shoes[abtIndx].color}</h4>
                </div>
            </div>
        </div>
    </div>
`

    document.getElementById('about').innerHTML = myAbout;
}
displayAbout()

