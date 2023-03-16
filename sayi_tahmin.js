var display = document.getElementById('display');
var checkBox = document.getElementById('checkBox');
var key = document.getElementsByClassName('key');
var display2 = document.getElementById('display2');
var display3 = document.getElementById('display3');
let score = 0;


function onClickNumber(number) {
    display.value = number;
};

checkBox.onclick = function () {
    var randomNumb = Math.floor(Math.random()* 11);
    console.log(randomNumb);

    if ((parseInt(display.value)) === randomNumb) {
        display2.value = "Tebrikler Doğru sayı :" + randomNumb + " idi";
        console.log("Tebrikler");
        display.value = "";
        score = score + 10;
        console.log(score);
        display3.value = "Yeni skorunuz : " + score
    } else {
        display2.value = "Tekrar deneyin Sayı : " + randomNumb + " idi";
        console.log("Tekrar deneyin");
        display.value = "";
        score = score - 1;
        console.log(score);
        display3.value = "Yeni skorunuz : " + score
    }
};


