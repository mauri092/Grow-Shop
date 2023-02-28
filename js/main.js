const productos = [
    {
        id: "iluminacion-01",
        titulo: "panel 01",
        precio: 3000,
        img: "./imagen/iluminacion/iluminacion1.jfif",
        categoria:{
            nombre: "iluminacion",
            id:"iluminacion"
        } 
    },
    {
        id: "iluminacion-02",
        titulo: "panel 02",
        precio: 3000,
        img: "./imagen/iluminacion/iluminacion2.jfif",
        categoria:{
            nombre: "iluminacion",
            id:"iluminacion"
        } 
    },
    {
        id: "iluminacion-03",
        titulo: "panel 03",
        precio: 3000,
        img: "./imagen/iluminacion/iluminacion3.jfif",
        categoria:{
            nombre: "iluminacion",
            id:"iluminacion"
        } 
    },
    {
        id: "iluminacion-04",
        titulo: "panel 04",
        precio: 3000,
        img: "./imagen/iluminacion/iluminacion4.jfif",
        categoria:{
            nombre: "iluminacion",
            id:"iluminacion"
        } ,
    },
    {
        id: "iluminacion-05",
        titulo: "panel 05",
        precio: 3000,
        img: "./imagen/iluminacion/iluminacion5.jfif",
        categoria:{
            nombre: "iluminacion",
            id:"iluminacion"
        } 
    },
    {
        id: "iluminacion-06",
        titulo: "panel 06",
        precio: 3000,
        img: "./imagen/iluminacion/iluminacion6.jfif",
        categoria:{
            nombre: "iluminacion",
            id:"iluminacion"
        } 
    },
    {
        id: "iluminacion-06",
        titulo: "panel 06",
        precio: 3000,
        img: "./imagen/iluminacion/iluminacion6.jfif",
        categoria:{
            nombre: "iluminacion",
            id:"iluminacion"
        } 
    },
    {
        id: "iluminacion-07",
        titulo: "panel 07",
        precio: 3000,
        img: "./imagen/iluminacion/iluminacion7.jfif",
        categoria:{
            nombre: "iluminacion",
            id:"iluminacion"
        } 
    },
];


const contenedorProductos = document.querySelector("#contenedor-productos");

function cargarProductos (){
    // contenedorProductos.innerHTML = "";
    productos.forEach(producto => {

        const div = document.createElement ("div");
        div.classList.add ("product");
        div.innerHTML = `
        <img class="product__img" src= "${producto.img}" alt="${producto.titulo}">
        <div class="product__description">
                <h3 class="product__title">${producto.titulo}</h3>
                <span class="product__price">${producto.precio}</span>
                <button class="product__button" id="${producto.id}">Agregar
                <i class="product__icon fa-solid fa-cart-plus"></i></button>
            </div>
            `
        contenedorProductos.append(div);
    })
    
}

cargarProductos ();

