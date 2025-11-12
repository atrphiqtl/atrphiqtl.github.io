document.addEventListener("mousemove",function(e) {
    const follower = document.getElementById('inversefollow')
    follower.style.left = e.pageX + 'px';
    follower.style.top = e.pageY + 'px';
});

const change1 = document.getElementById('change')
const change_social = document.getElementById('change_social')
const cnange_book = document.getElementById('change_book')

change1.addEventListener("mouseover", function(){ 
change1.style.backgroundImage = "url('indeximg/hovercat.gif')"
change1.style.backgroundSize = "contain"
});

change1.addEventListener('mouseout', function(){ 
change1.style.backgroundImage = "none"
});

change_social.addEventListener("mouseover", function(){ 
change_social.style.backgroundImage = "url('indeximg/world_chng.gif')"
change_social.style.backgroundSize = "contain"
});

change_social.addEventListener('mouseout', function(){ 
change_social.style.backgroundImage = "none"
});

change_book.addEventListener("mouseover", function(){ 
change_book.style.backgroundImage = "url('indeximg/book.webp')"
change_book.style.backgroundSize = "contain"
});

change_book.addEventListener('mouseout', function(){ 
change_book.style.backgroundImage = "none"
});






