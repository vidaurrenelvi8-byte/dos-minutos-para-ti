function mostrar(id){

document.querySelectorAll(".pantalla").forEach(p=>{

p.classList.remove("activa");

});

document.getElementById(id).classList.add("activa");

}

document.getElementById("btnComenzar").onclick=function(){

mostrar("pagina1");

};

document.getElementById("btnPagina1").onclick=function(){

alert("En la versión 1.2 aparecerá la siguiente página ❤️");

};
