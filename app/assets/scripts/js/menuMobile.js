console.log(document.querySelector("#menu-mobile"));
document.getElementById("menu-mobile").onclick = function() {
        var menu = document.querySelector(".menu");
        var veu = document.querySelector(".veu");
        if (menu.classList.contains("menu-closed")) {
                veu.classList.add("sombra");
                 menu.classList.remove("menu-closed");
                 menu.classList.add("menu-open");
        }
        else {
            veu.classList.remove("sombra");
            menu.classList.remove("menu-open");
            menu.classList.add("menu-closed");
        }

    }

document.querySelector(".veu").onclick = function(){
    var veu = document.querySelector(".veu");
     var menu = document.querySelector(".menu");
      veu.classList.remove("sombra");
            menu.classList.remove("menu-open");
            menu.classList.add("menu-closed");

}
