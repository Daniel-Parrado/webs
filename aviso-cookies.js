const  botonAceptarCookies =  document.getElementById("boton-aceptar-cookies");
const  avisoCookies =  document.getElementById("aviso-cookies");
const  fondoAvisoCookies =  document.getElementById("fondo-aviso-cookies");

datalayer = [];

if(!localStorage.getItem("cookies-aceptadas")){
    avisoCookies.classList.add("activo");
    fondoAvisoCookies.classList.add("activo");
} else{
    datalayer.push({"Event": "Activadorcookies"});
}



botonAceptarCookies.addEventListener("click", () => {
    avisoCookies.classList.remove("activo");
    fondoAvisoCookies.classList.remove("activo");

        localStorage.setItem("cookies-aceptadas", true);

        datalayer.push({"event": "Activadorcookies"});
});