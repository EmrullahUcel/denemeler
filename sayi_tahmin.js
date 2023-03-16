var display = document.getElementById('display');
var checkBox = document.getElementById('checkBox');
var key = document.getElementsByClassName('key');
var display2 = document.getElementById('display2');
var score = [];


function onClickNumber(number) {
    display.value = number;
};

checkBox.onclick = function () {
    var randomNumb = Math.floor(Math.random() * 10);
    console.log(randomNumb);

    if ((parseInt(display.value)) === randomNumb) {
        display2.value = "Tebrikler Doğru sayı :" + randomNumb + " idi";
        console.log("Tebrikler");
        display.value = "";

    } else
        display2.value = "Tekrar deneyin Sayı : " + randomNumb + " idi";
        console.log("Tekrar deneyin");
        display.value = "";
};


