//  console.log("Numebr Guessing Game");

//generate random number using Math.Random() Function

let randomNum = Math.floor(Math.random() * 100 + 1);
let tries = 1;

console.log(randomNum);


function guessNumber() {

    let a = document.getElementById("txtNum").value;
    //   console.log(a);

    if (a == randomNum) {
        alert("Congratulations!!!! You have Guessed Correct Number");
        //document.getElementById("txtNum").value="";
        //document.getElementById("txtNum").disabled = true;
        window.location.reload();

    }

    else if (tries >= 5) {

        alert(" Game Over..!!! Sorry you have exhausted all guesses better luck next time, Correct Number Was " + randomNum);
        //document.getElementById("txtNum").value="";
        //document.getElementById("txtNum").disabled = true;
        window.location.reload();

    }
    else if (isNaN(a) || (a > 100) || (a <= 0)) {
        alert("Please enter a valid number between 1 to 100");
        tries++
        tries = tries
    }
    else if (a < randomNum) {
        alert("Guessed Number is lower...!!");
        tries++
        tries = tries
    }
    else if (a > randomNum) {
        alert("Guessed Number is Higher...!!!");
        tries++
        tries = tries
    }
}