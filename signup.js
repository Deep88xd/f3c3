const signupForm = document.getElementById("submit-form");
const error = document.getElementById("error");

error.style.fontSize = "18px";
error.style.color = "#625BF7";
error.style.fontWeight = "700";

let usernameInput = document.querySelector("#username");
let userEmail = document.querySelector("#email");
let userPassword = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirmPassword");
let submit = document.querySelector("#submit-form");
let errordiv = document.querySelector("#error");

submit.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission
  var usernameValue = username.value;
  var passwordValue = userPassword.value;
  var confirmPasswordValue = confirmPassword.value;
  var userEmailValue = userEmail.value;

  if (passwordValue !== confirmPasswordValue) {
    errordiv.innerHTML = "Passwords do not match!";
    return false; // Prevent form submission
  } else {
    // Clear any previous error message
    var errorDiv = document.getElementById("error");
    errorDiv.innerHTML = "";
    const token = generateRandomToken(10); // Generates a random token of length 10

    // Store credentials in localStorage
    localStorage.setItem(
      "credentials",
      JSON.stringify({
        username: usernameValue,
        email: userEmailValue,
        password: passwordValue,
        confirmPassword: confirmPasswordValue,
        tokenvalue: token,
      })
    );

    setTimeout(() => {
      window.location.href = "profile.html";
    }, 2000);

    return false; // Prevent form submission until the redirect occurs
  }
});

function generateRandomToken(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let token = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    token += characters.charAt(randomIndex);
  }

  return token;
}

function getCredentials() {
  // Get the 'credentials' item from local storage
  var storedCredentials = localStorage.getItem("credentials");

  // Check if 'credentials' item exists in local storage
  if (storedCredentials) {
    // If it exists, parse the stored JSON string back into an object
    var credentials = JSON.parse(storedCredentials);

    // Extract the username and password values from the parsed object
    var usernameValue = credentials.username;
    var passwordValue = credentials.password;

    // Return the username and password as an array
    return [usernameValue, passwordValue];
  } else {
    // If 'credentials' item is not found in local storage, return null
    return null;
  }
}







// signupForm.addEventListener('submit', function (event) {
//   event.preventDefault();

//   const username = document.getElementById('username').value.trim();
//   const email = document.getElementById('email').value.trim();
//   const password = document.getElementById('password').value;
//   const confirmPassword = document.getElementById('confirmPassword').value;

//   if(!username || !email || !password || !confirmPassword){
//     error.innerText = 'Error: All fields are mandatory!'
//     error.style.fontSize = '18px'
//     error.style.color = '#625BF7'
//     error.style.fontWeight = '700'
//     return;
//   }

//   //chech password is matched or not
//   if (password !== confirmPassword) {
//     error.textContent = 'Passwords do not match. Please try again.';
//     return;
//   }

//   //check password is strong or not
//   if (!isPasswordStrong(password)) {
//     error.textContent = 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.';
//     error.style.fontSize = '12px';
//     error.style.color = '#dc3545'
//     return;
//   }

//   // Generate a random 16-byte access token
//   const accessToken = generateRandomToken();

//   // Store user details in local storage
//   const user = {
//     username: username,
//     email: email,
//     accessToken: accessToken,
//     password: password
//   };

//   localStorage.setItem('user', JSON.stringify(user));//we have to send any object in JSON format

//   error.textContent = 'Signup successful! Redirecting to your profile...';
//   error.style.color = '#198754'
//   setTimeout(() => {
//     //after 2 sec it will be redirected to profile.html file
//     window.location.href = 'profile.html';
//   }, 2000);
// });

// //strong password checker function
// function isPasswordStrong(password) {
//   // Strong password regex with minimum 8 characters, uppercase, lowercase, numbers, and special characters
//   const strongPasswordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/;
//   return strongPasswordRegex.test(password);
// }

// //random token generator function
// function generateRandomToken() {
//   const tokenLength = 16;
//   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   let randomToken = '';

//   for (let i = 0; i < tokenLength; i++) {
//     const randomIndex = Math.floor(Math.random() * characters.length);
//     randomToken += characters[randomIndex];
//   }

//   return randomToken;
// }
