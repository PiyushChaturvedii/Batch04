var target1 = document.getElementById('list-1').firstElementChild;
var target2 = document.getElementById('list-2').children[1];

var equal = target1.isEqualNode(target2);

console.log(equal);