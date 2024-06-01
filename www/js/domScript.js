document.getElementById("fn_show_me").addEventListener("click", myFunction);
function myFunction() {
    var inputValue = document.getElementById("fn_show_my_value").value;
    console.log("Task 1:", inputValue);
}


document.getElementById("fn_hide_me").addEventListener("click", toggleText);
function toggleText() {
    var toggleButton = document.getElementById("fn_hide_me");
    var input = document.getElementById("fn_hide_my_value");
    if (input.type === "text") {
        input.type = "password";
        toggleButton.innerHTML = "SHOW";
    } else {
        input.type = "text";
        toggleButton.innerHTML = "HIDE";
    }
}

window.addEventListener('click', function(event) {
    var clickedElement = event.target;
    var placeDiv = document.getElementById('place');
    var boxPlaceDiv = document.getElementById('box-place');

    if (clickedElement === placeDiv) {
        console.log(true);
    } if (clickedElement === boxPlaceDiv) {
        console.log(false);
    }
});

const categoriesList = document.getElementById('categories');
const categoryItems = categoriesList.querySelectorAll('li.item');
console.log('Count categories:', categoryItems.length);
categoryItems.forEach(function(categoryItem) {
    const categoryTitle = categoryItem.querySelector('h2').textContent;
    const categoryElements = categoryItem.querySelectorAll('li');
    console.log('Category:', categoryTitle);
    console.log('Item in category:', categoryElements.length);
});


const form = document.querySelector('.login-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const emailValue = form.elements.email.value.trim();
    const passwordValue = form.elements.password.value.trim();
    if (emailValue === '' || passwordValue === '') {
        alert('All form fields must be filled in');
    } else {
        const formData = {
            email: emailValue,
            password: passwordValue
        };
        console.log(formData);
        form.reset();
    }
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 1677215).toString(16).padStart(6, 0)}`;
}
const colorSpan = document.querySelector('.color');
const changeColorButton = document.querySelector('.change-color');
const body = document.body;

changeColorButton.addEventListener('click', function() {
    const randomColor = getRandomHexColor();
    body.style.backgroundColor = randomColor;
    colorSpan.textContent = randomColor;
});

function createBoxes(amount) {
    const boxesContainer = document.querySelector('#boxes');

    boxesContainer.innerHTML = '';

    let size = 30;
    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        boxesContainer.appendChild(box);
        size += 10;
    }
}
function destroyBoxes() {
    const boxesContainer = document.querySelector('#boxes');
    boxesContainer.innerHTML = '';
}
document.querySelector('[data-create]').addEventListener('click', () => {
    const amount = Number(document.getElementById('countBoxToCreate').value);

    // Перевіряємо, чи введено число в межах від 1 до 100
    if (amount >= 1 && amount <= 100) {
        createBoxes(amount);
    } else {
        alert('Please enter a number between 1 and 100.');
    }
});

document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);
