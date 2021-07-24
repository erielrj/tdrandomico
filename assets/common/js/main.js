function openMenu() {
    const sidemenu = document.querySelector('.container aside');
    sidemenu.style.left = '0';
    toggleOverlay(false);
}

function closeMenu() {
    const sidemenu = document.querySelector('.container aside');
    sidemenu.style.left = '-70vw';
    toggleOverlay();
}

function toggleOverlay(close = true) {
    const overlay = document.querySelector("#overlay");

    if(overlay.getAttribute('class')){
        overlay.setAttribute('class', '');
    }

    if(!close){
        overlay.setAttribute('class', 'overlay');
    }
}