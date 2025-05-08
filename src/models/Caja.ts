// Ejercicio 8:
export interface Caja<T> {
    contenido: T;
  }
  
  // Clase que implementa la interfaz
  export class CajaClass<T> implements Caja<T> {
    contenido: T;
  
    constructor(contenido: T) {
      this.contenido = contenido;
    }
  
    mostrarContenido(): void {
      console.log("Contenido:", this.contenido);
    }
  }