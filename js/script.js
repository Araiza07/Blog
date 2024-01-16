document.getElementById("icon-menu").addEventListener("click", mostar_menu);

function mostar_menu(){
    document.getElementById("move-content").classList.toggle('move-cotainer-all')
    document.getElementById("show-menu").classList.toggle('show-lateral')
}