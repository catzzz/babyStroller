const menuCheck = document.getElementById("navi-toggle");

//  close close Menu;
function closeMenu(e) {
   
    if(menuCheck){
        menuCheck.checked = !menuCheck.checked;
    }

}