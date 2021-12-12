"use strict"

//SACO UN ARRAY CON LAS CATEGORÍAS
const categorias=[];

datos.forEach(
    (item)=>{
        categorias.push(item["tipo de carne"]);
    }
);



//DESPUÉS ELIMINO LAS REPETIDAS
const categoriasSinRepetir=categorias.filter(
    (item,pos)=>{
        return categorias.indexOf(item)===pos;
    }
)



//PINTO LAS CATEGORIAS
document.write("<ul class='categorias'>");
categoriasSinRepetir.forEach(
    (item)=>{
        document.write(`<li><button class="off" type="button">${item}</button></li>`);
    }
);
document.write("</ul>");



// MOSTRAR TODAS LAS HAMBURGUESAS SIN FILTRAR Y CREO UN DIV OCULTO CON LA INFO DE LA HAMBURGUESA
datos.forEach(
    (hamburguesa)=>{
        document.write(`<img width='20%' class='${hamburguesa["tipo de carne"]} lista' src='${hamburguesa["imagen"]}'>`);
    }
);

document.write(`<div class="cuadro">
                    <div class="info">
                        <img src=""/>
                        <h2></h2>
                        <h3></h3>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <a href="" target="_blank">Página oficial</a>
                        <button type="button">Salir</button>
                    </div>
                </div>`);