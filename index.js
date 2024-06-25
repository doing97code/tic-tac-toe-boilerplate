const id1 = document.getElementById("1");
const id2 = document.getElementById("2");
const id3 = document.getElementById("3");

const id4 = document.getElementById("4");
const id5 = document.getElementById("5");
const id6 = document.getElementById("6");

const id7 = document.getElementById("7");
const id8 = document.getElementById("8");
const id9 = document.getElementById("9");

const boxes = document.querySelectorAll('.box');
const result = document.getElementById("result");
const message = document.getElementById("message");
const restartButton = document.getElementById("button");


let user1 = true;
let user2 = false;
let total = 0;

function initial() {
    boxes.forEach(box => {
        box.innerHTML = ''; // Clear the box content
        box.addEventListener('click', function(event) {
            if (box.innerHTML == '') {
                if (user1) {
                    box.innerHTML = "X";
                    user1 = false;
                    user2 = true;
                } else if (user2) {
                    box.innerHTML = "O";
                    user2 = false;
                    user1 = true;
                }
                total++;
            } else {
                alert("won't change");
            }
            if (total > 4) {
                setTimeout(checkresult, 500);
            }
        }, { once: true }); // Ensure the box can only be clicked once
    });
    result.style.visibility = "hidden"; 
    message.innerHTML = ''; 
    user1 = true;
    user2 = false;
    total = 0;
}

function checkresult() {
    if (id1.innerHTML === id5.innerHTML && id5.innerHTML === id9.innerHTML && id1.innerHTML !== '') {
        message.innerHTML = id1.innerHTML + " Won";
        result.style.visibility = "visible";
    } else if (id1.innerHTML === id4.innerHTML && id4.innerHTML === id7.innerHTML && id1.innerHTML !== '') {
        message.innerHTML = id1.innerHTML + " Won";
        result.style.visibility = "visible";
    } else if (id1.innerHTML === id2.innerHTML && id2.innerHTML === id3.innerHTML && id1.innerHTML !== '') {
        message.innerHTML = id1.innerHTML + " Won";
        result.style.visibility = "visible";
    } else if (id4.innerHTML === id5.innerHTML && id5.innerHTML === id6.innerHTML && id4.innerHTML !== '') {
        message.innerHTML = id4.innerHTML + " Won";
        result.style.visibility = "visible";
    } else if (id7.innerHTML === id8.innerHTML && id8.innerHTML === id9.innerHTML && id7.innerHTML !== '') {
        message.innerHTML = id7.innerHTML + " Won";
        result.style.visibility = "visible";
    } else if (id2.innerHTML === id5.innerHTML && id5.innerHTML === id8.innerHTML && id2.innerHTML !== '') {
        message.innerHTML = id2.innerHTML + " Won";
        result.style.visibility = "visible";
    } else if (id3.innerHTML === id6.innerHTML && id6.innerHTML === id9.innerHTML && id3.innerHTML !== '') {
        message.innerHTML = id3.innerHTML + " Won";
        result.style.visibility = "visible";
    } else if (id3.innerHTML === id5.innerHTML && id5.innerHTML === id7.innerHTML && id3.innerHTML !== '') {
        message.innerHTML = id3.innerHTML + " Won";
        result.style.visibility = "visible";
    } else if (total === 9) {
        message.innerHTML = "TIED";
        result.style.visibility = "visible";
    }
}


restartButton.addEventListener('click', initial);

// basically when page is starting , it loads at first
initial();


