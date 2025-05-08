// src/models/UsuarioClass.ts
import { Usuario } from "../types/usuario";

export class UsuarioClass implements Usuario {
  id: number;
  nombre: string;
  edad: number;
  email: string;
  activo: boolean;

  constructor(
    id: number,
    nombre: string,
    edad: number,
    email: string,
    activo: boolean
  ) {
    this.id = id;
    this.nombre = nombre;
    this.edad = edad;
    this.email = email;
    this.activo = activo;
  }

  toggleActivo(): void {
    this.activo = !this.activo;
  }
}
// Ejercicio 4: Clase extendida
export class AdminUsuario extends UsuarioClass {
  permisos: string[];

  constructor(
    id: number,
    nombre: string,
    edad: number,
    email: string,
    activo: boolean,
    permisos: string[]
  ) {
    super(id, nombre, edad, email, activo); // llama al constructor de UsuarioClass
    this.permisos = permisos;
  }
}