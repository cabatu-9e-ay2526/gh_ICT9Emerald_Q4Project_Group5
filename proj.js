function checkLogin(){

    let username = document.getElementById("username").value;
    let password = document.getElementById("pass").value;

    if(username === "" || password === ""){

        alert("Please fill out all fields.");

    }

    else if(username == "admin" && password == "1234"){

        alert("Login Successful!");

        window.location.href = "dashboard.html";

    }

    else{

        alert("Incorrect Username or Password");

    }

}


function clearForm(){

    document.getElementById("username").value = "";
    document.getElementById("pass").value = "";

}

function submitTask(){

    alert("Task Submitted!");

}

function changePassword(){

    alert("Password change feature coming soon.");

}

function showQuote(){

    let quotes = [

        "Success starts with hard work.",
        "Dream big and dare to fail.",
        "Education is the key to success.",
        "Believe in yourself."

    ];

    let random = Math.floor(Math.random() * quotes.length);

    document.getElementById("quoteDisplay").innerHTML = quotes[random];

}
