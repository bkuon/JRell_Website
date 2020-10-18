let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'img/jSmiley.png'){
        myImage.setAttribute('src', img/jSmiley2.png)
    }
    if(mySrc === 'img/jSmiley2.png'){
        myImage.setAttribute('src', img/jSmiley.png)
    }
}