// JavaScript Login Validation Test

function validateLogin(username, password) {

    if (username === "admin" && password === "12345") {
        console.log("Login Successful");
    } else {
        console.log("Invalid Username or Password");
    }

}

// Intentional syntax error below
function calculateTotal(a, b) {
    let total = a + b
    console.log("Total: " + total))
}

validateLogin("admin", "12345");
calculateTotal(10, 20);
