var index = 0;


// document.getElementById("image").addEventListener('click',changeColors)

function changeColors() {
    var colors = ["red", "green", "blue","black","#6E9ACF"]
    
    document.getElementsByTagName("body")[0].style.background = colors[index++];

    if (index > colors.length-1) {
        index = 0;
    }

}







