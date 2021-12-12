"use strict"
const hamburguesas=document.querySelectorAll("img.lista");
const botones=document.querySelectorAll("button");
const cuadro_modal=document.querySelector(".cuadro");
const salir_modal=document.querySelector(".cuadro [type=button]");
const info=document.querySelector(".info");

const contador=[];

botones.forEach(
    (boton)=>{
        boton.addEventListener("click",
            ()=>{

                //SI SOLO HAY UN FILTRO ACTIVO
                if(boton.classList.contains("off")){
                    boton.classList.remove("off");
                    boton.classList.add("on");
                    contador.push('filtro')
                }else if(boton.classList.contains("on")){
                    boton.classList.remove("on");
                    boton.classList.add("off");
                    contador.pop();
                }         

                hamburguesas.forEach(
                    (hamburguesa)=>{
                        //SI NO HAY NINGUNO SELECCIONADO MUESTRO TODOS
                        if(contador.length===0){
                            hamburguesa.classList.remove("ocultar");
                        }

                        //SI HAY UN FILTRO ACTIVO (QUIERE DECIR QUE SI NO HAY NINGUNO ENTRARÍA ARRIBA) 
                        else if(contador.length===1){

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
        const fecha=datos[index]['fecha de creacion'].split("-");
        cuadro_modal.classList.add("ver");
        info.children[0].src=datos[index]['imagen'];   
        info.children[1].innerText=datos[index]['nombre'];  
        info.children[2].innerText=datos[index]['precio']+"€";  
        info.children[3].innerText=datos[index]['ingredientes'];
        info.children[4].innerText=datos[index]['peso']+"g";  
        info.children[5].innerText=datos[index]['tipo de carne'];   
        info.children[6].innerText=datos[index]['lechuga'];  
        info.children[7].innerText=fecha[2]+'-'+fecha[1]+'-'+fecha[0];
        info.children[8].href=datos[index]['pagina del producto'];  
    }
}

hamburguesas.forEach(
    (imagen,indice)=>{
        imagen.addEventListener("click", mostrarDatos(indice));

        salir_modal.addEventListener("click",
        ()=>{
            cuadro_modal.classList.remove("ver");
        });

        cuadro_modal.addEventListener("click",
        ()=>{
            cuadro_modal.classList.remove("ver");
        });

        info.addEventListener("click",
        (evento)=>{
            evento.stopPropagation();
        });
    }
);
