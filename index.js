const b = document.querySelector('button.button--no')
b.addEventListener("mouseover", moveHover)
function moveHover(){
    const i=Math.floor(Math.random()*500)+1;
    const j=Math.floor(Math.random()*500)+1;

    b.style.right =i+"px"
    b.style.top =j+"px"
}
// console.log(moveHover);

// const x= document.querySelector('button.button-yes')
function alert_yes(){
    alert("Yes! You r welcome bro!!")
}

