// document.querySelector("#inner").addEventListener('click',function () {
//   alert("Inner Div");
// })



// document.querySelector("#outer").addEventListener('click',function () {
//   alert("Outer Div");
// })


document.getElementById('outer').addEventListener('mouseleave', abc);
document.getElementById('outer').addEventListener('click', xyz);


function abc() {
  document.getElementById('outer').style.background = "green";
}

function xyz() {
  alert("hello")
 document.getElementById('outer').removeEventListener('mouseleave',abc)
}

