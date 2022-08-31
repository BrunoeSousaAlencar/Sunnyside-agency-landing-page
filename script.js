function clickMenu(){
    const clickMenu = document.querySelector('.popup');
    if(clickMenu.style.display === "none"){
        clickMenu.style.display = "block"
    } else{
        clickMenu.style.display = "none"
    }
}