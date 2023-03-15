var display = document.getElementById('display');
var checkBox = document.getElementById('checkBox');
var key = document.getElementsByClassName('key')
var display2 = document.getElementById('display2')

function onClickNumber(number){
    onClickNumber = number;
    display.value = display.value + number;
};

checkBox.onclick = function () {
    var randomNumb = Math.floor(Math.random() * 10);
    console.log(randomNumb);
    console.log(parseInt(display.value))
    if ((parseInt(display.value)) === randomNumb) {
        display2.value = ("Tebrikler Doğru sayı :" + randomNumb + " idi");
        console.log("Tebrikler");
        
    } else
        display2.value = ("Tekrar deneyin Sayı : " + randomNumb + " idi");
        console.log("Tekrar deneyin");
};


