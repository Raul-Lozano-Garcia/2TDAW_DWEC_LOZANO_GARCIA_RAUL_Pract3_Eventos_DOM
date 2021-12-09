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
        let fecha=hamburguesa["fecha de creacion"].split("-");
        document.write(`
        <img width='20%' class='${hamburguesa["tipo de carne"]} lista' src='${hamburguesa["imagen"]}'>
        <div class="cuadro">
            <div class="info">
                <img src="${hamburguesa["imagen"]}"/>
                <h2>${hamburguesa["nombre"]}</h2>
                <h3>${hamburguesa["precio"]}€</h3>
                <p>${hamburguesa["ingredientes"]}</p>
                <p>${hamburguesa["peso"]}g</p>
                <p>${hamburguesa["tipo de carne"]}</p>
                <p>${hamburguesa["lechuga"]}</p>
                <p>${fecha[2]}-${fecha[1]}-${fecha[0]}</p>
                <a href="${hamburguesa["pagina del producto"]}" target="_blank">Página oficial</a>
                <button type="button">Salir</button>
            </div>
        </div>
        `);
    }
);

