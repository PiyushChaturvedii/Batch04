// var a = 0;
// var id = setInterval(Anni, 50);

// function Anni() {
//     a = a + 10;
//     if (a == 200) {
//         clearInterval(id)
//     } else {
        
//         var target = document.getElementById("test");
//         // target.style.marginLeft = a + 'px';
//         target.style.width = a + 'px';
//         console.log(a);
//     }

// }

var id = setTimeout(function() {
    var target = document.getElementById('test');
    target.style.width = "500px"
}, 3000);

// function Anni() {
//     var target = document.getElementById('test');
//     target.style.width = "500px"
//     console.log("Hello");
// }

function stopAnni() {
    clearTimeout(id)
}