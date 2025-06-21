let carrito = [];

// 1. Función para agregar un producto (objeto) al carrito

const agregarProductoAlCarrito = (producto) =>{
    carrito.push(producto);
    console.log(`Producto agregado: ${producto.nombre} | Precio: $${producto.precio}`);

}


agregarProductoAlCarrito({nombre:"Laptop", precio:1000});
agregarProductoAlCarrito({nombre:"Celular", precio:2000});
agregarProductoAlCarrito({nombre:"Mouse", precio:8000});
agregarProductoAlCarrito({nombre:"Teclado", precio:11000});
console.log(carrito);

// 2. Filtrar productos con precio mayor a $1000

const filtrarProductosCaros = () =>{
    let productosFiltrados = carrito.filter(producto => producto.precio > 1000);
    productosFiltrados.forEach(producto=>{
    console.log(`Producto: ${producto.nombre} - Precio: $${producto.precio}`)
   })
}

filtrarProductosCaros();

//3.Usar map() para mostrar los nombres de esos productos caros.


const obtenerNombresDeProductosCaros = () =>{
    let nombres = carrito.filter ( producto => producto.precio >1000);
    let nombresDeProductos = nombres.map(producto => producto.nombre);
    nombresDeProductos.forEach((nombre,index)=>{
        console.log(`${index+1}. ${nombre}`);
    })
}

obtenerNombresDeProductosCaros();


//4.Usar find() para ver si hay una "Tablet" en el carrito.

const buscarTabletEnCarrito = () =>{
    let tablet = carrito.find(producto => producto.nombre === "Tablet");
    if (tablet){
        console.log(`Si, hay una tablet en el carrito: ${tablet.nombre}`);
    }else{
        console.log("No hay ninguna Tablet en el carrito")
    }
}

buscarTabletEnCarrito();