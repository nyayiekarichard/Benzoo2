let allitems = [
    {
        name: "Mercedes-Benz A-Class",
        price: "2,200,000",
        model: "A200",
        year: 2018,
        mileage: "20,000 km",
        status: "Available",
        image: "Assets/A class.jpeg"
    },
    {
        name: "Mercedes-Benz C-Class",
        price: "3,850,000",
        model: "C300",
        year: 2020,
        mileage: "10,000 km",
        status: "Sold",
        image: "Assets/C class22.jpeg"
    },
    {
        name: "Mercedes-Benz E-Class",
        price: "6,300,000",
        model: "E350",
        year: 2019,
        mileage: "15,000 km",
        status: "Available",
        image: "Assets/E class.jpeg"
    },
    {
        name: "Mercedes-Benz S-Class",
        price: "8,600,000",
        model: "S450",
        year: 2021,
        mileage: "5,000 km",
        status: "Sold",
        image: "Assets/S class 1.jpg"
    },
    {
        name: "Mercedes-Benz GLA",
        price: "5,400,000",
        model: "GLA250",
        year: 2021,
        mileage: "12,000 km",
        status: "Available",
        image: "Assets/gla 2.jpeg"
    },
    {
        name: "Mercedes-Benz GLC",
        price: "9,600,000",
        model: "GLC300",
        year: 2022,
        mileage: "8,000 km",
        status: "Sold",
        image: "Assets/Glc 1.jpeg"
    },
    {
        name: "Mercedes-Benz GLE",
        price: "12,300,000",
        model: "GLE450",
        year: 2023,
        mileage: "3,000 km",
        status: "Available",
        image: "Assets/gle 1.jpeg"
    },
    {
        name: "Mercedes-Benz GLS",
        price: "11,450,000",
        model: "GLS580",
        year: 2023,
        mileage: "4,000 km",
        status: "Sold",
        image: "Assets/gls 2.jpeg"
    },
    {
        name: "Mercedes-Benz CLA",
        price: "4,500,000",
        model: "CLA250",
        year: 2019,
        mileage: "18,000 km",
        status: "Available",
        image: "Assets/cla.jpeg"
    },
    {
        name: "Mercedes-Benz SLK",
        price: "8,450,000",
        model: "SLK350",
        year: 2020,
        mileage: "7,000 km",
        status: "Available",
        image: "Assets/slk.jpeg"
    },
    {
        name: "Mercedes-Benz E350 Coupe",
        price: "4,600,000",
        model: "E350",
        year: 2018,
        mileage: "25,000 km",
        status: "Sold",
        image: "Assets/e coupe.jpeg"
    },
    {
        name: "Mercedes-Benz G-Wagon",
        price: "15,300,000",
        model: "G63 AMG",
        year: 2022,
        mileage: "2,000 km",
        status: "Available",
        image: "Assets/g wagon.jpeg"
    }
];

let itemsElement = document.querySelector(".product-grid");

function display(arrayofitems) {
    let output = "";
    for (let i = 0; i < arrayofitems.length; i++) {
        output += `
        <div class="product-item">
            <img src="${arrayofitems[i].image}" alt="${arrayofitems[i].name}">
            <h2>${arrayofitems[i].name}</h2>
            <p>Model: ${arrayofitems[i].model}</p>
            <p>Year: ${arrayofitems[i].year}</p>
            <p>Mileage: ${arrayofitems[i].mileage}</p>
            <p>Price: Ksh ${arrayofitems[i].price}</p>
            <span class="tag ${arrayofitems[i].status.toLowerCase()}">${arrayofitems[i].status}</span>
        </div>`;
    }
    itemsElement.innerHTML = output;
}

display(allitems);

let searchElement = document.querySelector(".search-input");

searchElement.addEventListener("input", function (event) {
    let searcheditems = [];
    for (let i = 0; i < allitems.length; i++) {
        if (allitems[i].name.toLowerCase().includes(event.target.value.toLowerCase())) {
            searcheditems.push(allitems[i]);
        }
    }
    display(searcheditems);
});
