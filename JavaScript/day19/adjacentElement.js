// var newElement = document.createElement("h2");
// var newText = document.createTextNode("This is just text.")

// newElement.appendChild(newText)

var target = document.getElementById('test');

// target.insertAdjacentElement("beforebegin", newElement);
// target.insertAdjacentElement("afterbegin", newElement);


var newElement = "<h2> This is JavaScript</h2>";
var newtext = " This is JavaScript";

// target.insertAdjacentHTML("afterend", newElement);
// target.insertAdjacentHTML("beforeend", newElement);
target.insertAdjacentText("beforeend", newtext);