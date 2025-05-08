// src/types/usuario.ts

// Definición de la interfaz Usuario
export interface Usuario {
    id: number;
    nombre: string;
    edad: number;
    email: string;
    activo: boolean;
  }
  
  // Definición del type UsuarioType
  export type UsuarioType = {
    id: number;
    nombre: string;
    edad: number;
    email: string;
    activo: boolean;
  };
  
  /*
  Diferencia entre interface y type en TypeScript:
  
  - Las **interfaces** están pensadas principalmente para definir la forma de los objetos y son más extensibles. 
    Permiten herencia y declaración incremental.
  
  - Los **types** también pueden definir la forma de objetos, pero además pueden representar uniones, intersecciones y tipos primitivos.
    No se pueden reabrir como las interfaces.
  
  En general, `interface` se usa para objetos estructurados y `type` para estructuras más complejas o combinadas.
  */
  