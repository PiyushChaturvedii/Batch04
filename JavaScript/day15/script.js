// var element;

// document.getElementById('header').innerText = "<h1>Aeeron Academy</h1>";
// document.getElementById('footer').innerHTML = "<h1>Aeeron Academy</h1>";

// element = document.getElementById('footer').innerHTML;


// document.getElementById("footer").setAttribute("class", "red");

// document.getElementById("footer").setAttribute("style", "border: 10px dotted yellow");
// console.log(element);

// document.getElementById('header').removeAttribute("style")

// document.querySelector("#header").innerHTML = "Aeeron Academy"

// element = document.querySelector("#header").getAttribute("class");

// element = document.getElementsByClassName("list");
// element = document.querySelector('.list')

// element= document.querySelectorAll("#content");
// element= document.querySelector("#content");



var element;

// document.querySelector('#header').style.backgroundColor = "green";
// document.querySelector("#header").classList.add("red","xyz");
// document.querySelector('#header').className = "xyz";


// element = document.querySelector('#header').style.border;
// element = document.querySelector('#header').className;
// document.querySelector('#header').classList.remove('abc','xyz','efg','red');
// element = document.querySelector('#header').classList;

// function abc() {
//     document.getElementById("header").style.background = "gold";
// }

// // document.getElementById("header").onmouseenter = abc;

// document.getElementById('header').addEventListener("mouseenter", abc);

// document.getElementById('header').addEventListener('click', function () {
//     document.getElementById("header").style.border = "8px solid black";
// })


// console.log(element);

document.getElementById('header').addEventListener('click', abc);

document.getElementById('header').addEventListener('click', function () {
    
  this.style.border = "10px solid red";
    this.style.background = "yellow";
    
});



function abc() {
    document.getElementById('header').style.background = 'green';
}