const spin_box = document.getElementById("wrapper3");
const spinners = spin_box.children;
const delayer = 0.1;


for(let i = 0; i < spinners.length; i++){
    spinners[i].style.animationDelay = i*.2 + 's'
}

