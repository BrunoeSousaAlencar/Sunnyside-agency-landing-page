function mudouTamanho(){
    const mudouTamanho = document.querySelector('.popup');
    if(window.innerWidth >= 768){
        mudouTamanho.style.display = 'none';
    } 
}

function clickMenu(){
    const clickMenu = document.querySelector('.popup');
    if(clickMenu.style.display === "none"){
        clickMenu.style.display = "block"
    } else{
        clickMenu.style.display = "none"
    }
}
