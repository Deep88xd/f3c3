const userdetails = document.getElementById('user-details');
const logoutButton = document.getElementById('logoutButton');


const credentials = JSON.parse(localStorage.getItem('credentials'));

console.log(credentials)

/// Create a new paragraph element with line breaks using <br> elements
const paragraphContent = `username: ${credentials.username}<br>
                          Email: ${credentials.email}<br>
                          Token: ${credentials.tokenvalue}<br>
                          Password: ${credentials.password}
                          `;
const paragraphElement = document.createElement("p");
paragraphElement.innerHTML = paragraphContent;

// Append the paragraph element to the 'user-details' div
userdetails.appendChild(paragraphElement);


// Function to handle the "Logout" button click event
function handleLogout() {
    // Clear local storage
    localStorage.clear();
    
    // Redirect the user to the signup page
    window.location.href = "index.html"; // Replace "signup.html" with your actual signup page URL
  }
  
  // Add an event listener to the "Logout" button
  
  logoutButton.addEventListener("click", handleLogout);





