import { NumericDictionary, StringIterator } from "lodash";

class Producto{
    name:string;
    price:number;
    constructor(name:string, price:number){
        this.name = name;
        this.price = price;
    }
    getPrice(){
        return this.price
    }
}

class ProductoAlimenticio extends Producto {
    fechaCaducidad: Date;
    constructor(name:string, price:number, fechaCaducidad:Date) {
      super(name, price);
      this.fechaCaducidad = fechaCaducidad;
    }
  
    checkCaducidad():boolean {
      const hoy = new Date();
      // [Completa la lógica para obtener si el producto está vencido]
      return ((this.fechaCaducidad < hoy)? true:false);
    }
  }
  
class ProductoCongelado extends ProductoAlimenticio {
    temperaturaRecomendada: number;
    private margen: number;
    constructor(name: string, price: number, fechaCaducidad: Date, temperaturaRecomendada: number, margen: number = 5) {
      super(name, price, fechaCaducidad);
      this.margen = margen;
      this.temperaturaRecomendada = temperaturaRecomendada;
      // [Tu código: Guarda  el dato temperaturaRecomendada]
      
    }
    estaAlmacenadoCorrectamente(temperaturaActual: number): boolean {
        let EAC:boolean = (this.temperaturaRecomendada + 5 > temperaturaActual && this.temperaturaRecomendada -5 < temperaturaActual);
        return(EAC);
      // [Calcula si el producto está bien conservado contemplando 
      // el temperaturaRecomendada y el margen]
    }
}
// Creación de la instancia
const fecha= new Date("2024-12-31");


const helado = new ProductoCongelado("Helado de Vainilla", 2.99, fecha, -18);

// Temperatura actual de almacenamiento
const temperaturaActual = -2; // Supongamos que esta es la temperatura actual

// Verificar si el producto está almacenado correctamente
const estaAlmacenadoCorrectamente = helado.estaAlmacenadoCorrectamente(temperaturaActual);
console.log("¿Está almacenado correctamente?:", estaAlmacenadoCorrectamente ? "Sí" : "No");

// Verificar si el producto está caducado
const esCaducado = helado.checkCaducidad();
console.log("¿El producto está caducado?:", esCaducado ? "Sí" : "No");
