
export type Dato = {
    id: number;
    nombre: string;
  };
  
  export function obtenerDatos(): Promise<Dato[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, nombre: "Dato 1" },
          { id: 2, nombre: "Dato 2" },
          { id: 3, nombre: "Dato 3" }
        ]);
      }, 3000); // 3 segundos
    });
  }