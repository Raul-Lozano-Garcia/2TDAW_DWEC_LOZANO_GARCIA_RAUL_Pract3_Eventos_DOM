"use strict"
const hamburguesas=document.querySelectorAll("img.lista");
const botones=document.querySelectorAll("button");
const cuadro_modal=document.querySelectorAll(".cuadro");
const salir_modal=document.querySelectorAll(".cuadro [type=button]");
const info=document.querySelectorAll(".info");

let c=0;

botones.forEach(
    (boton)=>{
        boton.addEventListener("click",
            ()=>{

                //SI SOLO HAY UN FILTRO ACTIVO
                if(boton.classList.contains("off")){
                    boton.classList.remove("off");
                    boton.classList.add("on");
                    c++;
                }else if(boton.classList.contains("on")){
                    boton.classList.remove("on");
                    boton.classList.add("off");
                    c--;
                }         

                hamburguesas.forEach(
                    (hamburguesa)=>{
                        //SI NO HAY NINGUNO SELECCIONADO MUESTRO TODOS
                        if(c===0){
                            hamburguesa.classList.remove("ocultar");
                        }

                        //SI HAY UN FILTRO ACTIVO (QUIERE DECIR QUE SI NO HAY NINGUNO ENTRARÍA ARRIBA) 
                        else if(c===1){

                            //SI EL BOTON ESTÁ EN ON
                            if(boton.classList.contains("on")){
                                if(hamburguesa.classList.contains(boton.innerText)){
                                    hamburguesa.classList.remove("ocultar");
                                }else if(!hamburguesa.classList.contains(boton.innerText)){
                                    hamburguesa.classList.add("ocultar");
                                }
                            }

                            //SI EL BOTON ESTÁ EN OFF
                            else if(boton.classList.contains("off") && hamburguesa.classList.contains(boton.innerText)){
                                hamburguesa.classList.add("ocultar");
                            }

                        }
                        //SI HAY MAS DE UN FILTRO ACTIVO      
                        else{

                            //SI EL BOTON ESTÁ EN ON
                            if(hamburguesa.classList.contains(boton.innerText) && boton.classList.contains("on")){
                                hamburguesa.classList.remove("ocultar");
                            }
                            
                            //SI EL BOTÓN ESTÁ EN OFF
                            else if(hamburguesa.classList.contains(boton.innerText) && boton.classList.contains("off")){
                                hamburguesa.classList.add("ocultar");
                            }
                        }     
                });
            });
    }
);

const mostrarDatos=(index)=>{
    return()=>{
        cuadro_modal[index].classList.add("ver");
    }
}

hamburguesas.forEach(
    (imagen,indice)=>{
        imagen.addEventListener("click", mostrarDatos(indice));

        salir_modal[indice].addEventListener("click",
        ()=>{
            cuadro_modal[indice].classList.remove("ver");
        });

        cuadro_modal[indice].addEventListener("click",
        ()=>{
            cuadro_modal[indice].classList.remove("ver");
        });

        info[indice].addEventListener("click",
        (evento)=>{
            evento.stopPropagation();
        });
    }
);

