console.log("Hello");
var fetchbtn = document.getElementById('fetch');
fetchbtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler() {
    console.log("Clicked fetch button");

    const xhr = new XMLHttpRequest(); //init XHR obj

    xhr.open('GET', 'shubham.txt', true); //open the obj
    // POST - send data also with prerequisti   GET- only fetch  
    //true - asychronous

    xhr.onprogress = function () {
        console.log("onprogress");
    };

    xhr.onload = function () {
        console.log(this.responseText);
    };

    xhr.send();
}
