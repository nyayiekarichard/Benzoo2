// CRUD Operations Script
const carList = document.getElementById('car-list').getElementsByTagName('tbody')[0];

document.getElementById('create-car-form').addEventListener('submit', function(event) {
    event.preventDefault();
    addCar();
});

function addCar() {
    const make = document.getElementById('car-make').value;
    const model = document.getElementById('car-model').value;
    const year = document.getElementById('car-year').value;
    const price = document.getElementById('car-price').value;
    const accidentHistory = document.getElementById('accident-history').value;
    const image = document.getElementById('car-image').files[0];

    const newRow = carList.insertRow();

    newRow.insertCell(0).textContent = make;
    newRow.insertCell(1).textContent = model;
    newRow.insertCell(2).textContent = year;
    newRow.insertCell(3).textContent = `$${price}`;
    newRow.insertCell(4).textContent = accidentHistory;
    
    const imageCell = newRow.insertCell(5);
    const imgElement = document.createElement('img');
    imgElement.src = URL.createObjectURL(image); // Display the uploaded image
    imageCell.appendChild(imgElement);

    const actionsCell = newRow.insertCell(6);
    actionsCell.innerHTML = `
        <button onclick="editCar(this)">Edit</button>
        <button onclick="deleteCar(this)">Delete</button>
    `;

    // Clear form fields
    document.getElementById('create-car-form').reset();
}

function editCar(button) {
    const row = button.parentNode.parentNode;
    const make = prompt("Edit car make:", row.cells[0].textContent);
    const model = prompt("Edit car model:", row.cells[1].textContent);
    const year = prompt("Edit car year:", row.cells[2].textContent);
    const price = prompt("Edit car price:", row.cells[3].textContent.replace('$', ''));
    const accidentHistory = prompt("Edit accident history (Yes/No):", row.cells[4].textContent);

    if (make && model && year && price && accidentHistory) {
        row.cells[0].textContent = make;
        row.cells[1].textContent = model;
        row.cells[2].textContent = year;
        row.cells[3].textContent = `$${price}`;
        row.cells[4].textContent = accidentHistory;
    }
}

function deleteCar(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
let nextbutton=document.querySelector(".nextbutton1")
nextbutton.addEventListener("click",function(){
    window.location.href="details.html"
})
