var element;

// element = document.all;
// element = document.head;
// element = document.title;
// element = document.images;
// element = document.forms;
// element = document.doctype;
// element = document.URL;
// element = document.domain;
// element = document.baseURI;

// element = document.getElementById('header');

// element = document.getElementsByTagName("ul")[1];

// element = document.getElementById("header").innerHTML;
// element = document.getElementById("header").innerText;

// element = document.getElementById("content").innerHTML;
// element = document.getElementById("content").innerText;

// element = document.getElementById('header').getAttributeNode('style').value;

element = document.getElementById('header').attributes[4];

console.log(element);