//Iverson(HouYanchao)
//Iverson(HouYanchao)
/*create*/
function setCookie(name, value, days) {  
    var date = new Date();  
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));  
    var expires = "; expires=" + date.toUTCString();  
    document.cookie = name + "=" + (value || "") + expires + "; path=/";  
}  
  
function createAccount() {  
    var username = document.getElementById("username").value;  
    var password = document.getElementById("password").value;  
  
   
    setCookie("username", username, 7);  
   
    setCookie("password", password, 7);  
  var redirectUrl = 'login.html';
   
    alert("Account created and credentials saved in cookies.");  
setTimeout(function() {  
        window.location.href = redirectUrl;  
    }, 0); 
}

/*22*/
let cart = [];  
  
function addToCart608(courseName, price) {  
    const quantity = document.getElementById(`${courseName}-quantity`).value;  
    if (quantity > 0) {  
        cart.push({ name: courseName, price: price, quantity: quantity });  
        displayCart608();  
         
    } else {  
        alert('error');  
    }  
}  
  
function displayCart608() {  
    const cartItemsElement = document.getElementById('cart-items');  
    cartItemsElement.innerHTML = '';  
    cart.forEach(item => {  
        const cartItemElement = document.createElement('div');  
        cartItemElement.classList.add('cart-item');  
        cartItemElement.innerHTML = `  
            <h3>${item.name}</h3>  
            <p>unit price: ${item.price}</p>  
            <p>quantity: ${item.quantity}</p>  
            <p>Price: ${item.price * item.quantity}</p>  
            <button id="remove" onclick="removeFromCart608('${item.name}')">Remove</button>  
        `;  
        cartItemsElement.appendChild(cartItemElement);  
    });  
}  
  
function removeFromCart608(courseName) {  
    cart = cart.filter(item => item.name !== courseName);  
    displayCart608();  
    calculateTotalPrice608();  
}  
function clearCart608() {  
    cart = [];  
    displayCart608();   
    document.getElementById('totalPrice').textContent = '0';  
}  
  
function calculateTotalPrice608() {  
    let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);  
    document.getElementById('totalPrice').textContent = total.toFixed(2);  
}  
document.getElementById('calculate-total-price-button').addEventListener('click', calculateTotalPrice608);

  

window.onload = function() {  
    displayCart608();  
   
};
/*course*/
function course() {  
    window.location.href = 'createpage.html'; 
    // This is a placeholder for your JavaScript code.  
// You'll need to write functions to handle form validation, shopping cart functionality, etc.  
}
// Example: Function to handle form submission  
function handleFormSubmission608(event) {  
event.preventDefault(); // Prevent the form from submitting normally  
// Your code to validate the form and process the data here  
console.log('Form submitted!');  
}  

// Attach the function to the form's submit event  
document.querySelector('#registration-form').addEventListener('submit', handleFormSubmission608);

/*aboutus*/
 // This is a placeholder for your JavaScript code.  
// You'll need to write functions to handle form validation, shopping cart functionality, etc.  
  
// Example: Function to handle form submission  
function handleFormSubmission(event) {  
    event.preventDefault(); // Prevent the form from submitting normally  
    // Your code to validate the form and process the data here  
    console.log('Form submitted!');  
}  
  
// Attach the function to the form's submit event  
document.querySelector('#registration-form').addEventListener('submit', handleFormSubmission);


/*index*/
 // This is a placeholder for your JavaScript code.  
// You'll need to write functions to handle form validation, shopping cart functionality, etc.  
  
// Example: Function to handle form submission  
function handleFormSubmission608(event) {  
    event.preventDefault(); // Prevent the form from submitting normally  
    // Your code to validate the form and process the data here  
    console.log('Form submitted!');  
}  
  
// Attach the function to the form's submit event  
document.querySelector('#registration-form').addEventListener('submit', handleFormSubmission608);

