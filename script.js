
// Creando un objeto
class Producto{
    constructor(nombre,precio,kcal){
        this.nombre=nombre.toLowerCase();
        this.precio=parseFloat(precio);
        this.kcal=parseFloat(kcal);
        this.vendido=false;
    }
    IvaDesc(){
        this.precio= (this.precio * 1.21) - (this.precio * 20)/100; 
    }
    vender(){
        this.vendido=true;
    }
    
    
    
}


const producto=[];
let condicion= true;
do{
let nombre=prompt("Ingrese el nombre del articulo");
let precio=parseFloat(prompt("Ingrese el precio del articulo"));
let kcal=parseFloat(prompt("Ingrese las calorias totales del articulo"));
producto.push(new Producto(nombre,precio,kcal));
console.log(producto);


condicion= confirm("¿Querés seguir agregando productos?")
}while(condicion != false)

let producto1 = ["hamburgueza de lenteja",400,300];
let producto2 = ["ensalada",240,190];
let nuevasCompras=producto.concat(producto2,producto1);
console.log(nuevasCompras.join("\n"));