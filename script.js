//  console.log("Numebr Guessing Game");

//generate random number using Math.Random() Function

let randomNum = Math.floor(Math.random() * 100 + 1);
let tries = 1;

//console.log(randomNum);


function guessNumber() {

    let a = document.getElementById("txtNum").value;
    //    console.log(a);

    if (tries >= 5) {

        alert(" Game Over..!!! Sorry you have exhausted all guesses better luck next time, Correct Number Was " + randomNum);
        //document.getElementById("txtNum").value="";
        //document.getElementById("txtNum").disabled = true;
        window.location.reload();

    }
    else if (isNaN(a) || (a >= 100) || (a <= 0)) {
        alert("Please enter a valid number between 1 to 100");
        tries++
        tries = tries
        //          console.log("try no " + tries);
    }
    else if (a < randomNum) {
        alert("Guessed Number is lower...!!");
        //     console.log("Guessed Number is lower." + a);
        tries++
        tries = tries
        //        console.log("try no " + tries);
    }
    else if (a > randomNum) {
        alert("Guessed Number is Higher...!!!");
        //       console.log("Guessed Number is Higher." + a);
        tries++
        tries = tries
        //      console.log("try no " + tries);
    }
    else if (a == randomNum) {
        alert("Congratulations!!!! You have Guessed Correct Number");
        console.log("You have Guessed Correct Number" + a);
        //document.getElementById("txtNum").value="";
        //document.getElementById("txtNum").disabled = true;
        window.location.reload();

    }

}