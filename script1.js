//Iveron(HouYanchao)
function getCookie(name) {  
    var value = `; ${document.cookie}`;  
    var parts = value.split(`; ${name}=`);  
    if (parts.length === 2) return parts.pop().split(';').shift();  
    return null;  
}  
 // Function to check user credentials against cookies   
function checkCredentials() {  
    var usernameInput = document.getElementById("username").value;  
    var passwordInput = document.getElementById("password").value;  
   // Retrieve the username and password cookies  
    var usernameCookie = getCookie("username");  
    var passwordCookie = getCookie("password");  

  // Note: In a real-world scenario, you should not compare the input password with a stored cookie.  
    // For demonstration purposes, I'll assume you're just checking the username (not the password).  
    // If the entered username matches the username cookie  
    if (usernameInput === usernameCookie) {  
         
        window.location.href = "shopping.html";  
    } else {  
        alert("Invalid username or password.");  
    }  
}  
