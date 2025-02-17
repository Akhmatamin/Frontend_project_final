
    let answer = prompt("Are you Alatoshnik?");

    if (answer === null || answer.trim() === "" || answer==="No" || answer==="no" || answer==="нет") {
        alert("You are not allowed!")
        window.location.href = "https://www.google.com"; 
    } else {
        alert("You are welcome!!");
    }


