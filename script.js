//Iverson(HouYanchao)
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
