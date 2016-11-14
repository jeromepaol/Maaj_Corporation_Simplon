function menuScroll () {
    
    var yPos = window.pageYOffset;
    var nav = document.getElementById('target_nav');
    var grosMenu = document.getElementById('target_big_menu')
    var miniLogo = document.getElementById('logomini');
    var miniMenu = document.getElementById('menumini');
    var petitMenu = document.getElementById('lepetitmenu');
    
     if (yPos > 158 ) {
        nav.className = 'position';
        grosMenu.className = 'disapear';
        miniLogo.className = 'logomini_appear';
        miniMenu.className = 'menumini_appear';
        petitMenu.className = 'lepetitmenu_appear';
    } 
    else {
        nav.className = '';
        grosMenu.className = '';
        miniLogo.className = 'disapear';
        miniMenu.className = 'disapear';
        petitMenu.className = 'disapear';
    } 
     
    if (window.matchMedia("(max-width: 745px)").matches && yPos < 158) {
        miniLogo.className = 'logomini_appear';
        miniMenu.className = 'menumini_appear';
        petitMenu.className = 'lepetitmenu_appear';
    } 
}

window.addEventListener('scroll',menuScroll);
window.addEventListener('resize',menuScroll);
 