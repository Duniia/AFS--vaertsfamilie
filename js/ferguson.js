// Her er forsøgt at sætte videoerne til at afspille automatisk
// når videoen er i wiewport. (Desværre kunne vi ikke få
// det til at virke)



let players = document.getElementsByClassName("iframes")

// STEP 1 - onscroll kør function playVideo
window.addEventListener('scroll', function playVideo(players){

    console.log('hey');
// Lav function playVideo
// Hvis iframe er i view - kør video
// Hvis iframe ikke er i view - stop video
    
    for(let i = 0; i < players.length; i++){
        console.log(players[i]);
        if(elementInViewport(players[i])){
            console.log(players[i]);
        }
    }
});

function elementInViewport(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    while(el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
    }

    return (
        top >= window.pageYOffset &&
        left >= window.pageXOffset &&
        (top + height) <= (window.pageYOffset + window.innerHeight) &&
        (left + width) <= (window.pageXOffset + window.innerWidth)
    );
}