var element;

document.getElementById('header').addEventListener("click", xyz);



function xyz() {


  // document.getElementById('header').classList.add('red');

  // document.getElementById('header').classList.remove("green","abc")
  
  // var a= document.getElementById('header').classList.length;

  // document.getElementById('header').classList.toggle("green");

  // var a = document.getElementById('header').classList.item(3);
  // var a = document.getElementById('header').classList;
  var a = document.getElementById('header').classList.contains("green");
  console.log(a);
}

