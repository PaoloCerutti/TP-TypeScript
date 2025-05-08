import './style.css'
import { Usuario } from './types/usuario';
import { UsuarioClass } from './models/UsuarioClass';

//Ejercicio 2
const usuarios: Usuario[] = [
  {
  id: 1,
  nombre: "Mateo",
  edad: 22,
  email: "mateo@gmail.com",
  activo: true,
},
{
  id: 2,
  nombre: "Martín",
  edad: 35,
  email: "martin@gmail.com",
  activo: false,
},
{
  id: 3,
  nombre: "Sofía",
  edad: 28,
  email: "sofia@gmail.com",
  activo: true,
}
]
// Filtrar usuarios activos
const usuariosActivos = usuarios.filter(usuario => usuario.activo);

console.log("Usuarios activos:", usuariosActivos);

//Ejercicio 3

const usuario4 = new UsuarioClass(4, "Joaquin", 40, "joaquin@correo.com", true);
const usuario5 = new UsuarioClass(5, "Lucas", 55, "lucas@correo.com", false);

console.log("Usuario 4:", usuario4);
console.log("Usuario 5:", usuario5);

// Cambiar estado de activo
usuario4.toggleActivo();
usuario5.toggleActivo();

console.log("Usuario 4 (después de toggle):", usuario4);
console.log("Usuario 5 (después de toggle):", usuario5);

//Ejercicio 4
import { AdminUsuario } from './models/UsuarioClass';

const admin = new AdminUsuario(
  6,
  "Claudia",
  38,
  "claudia@admin.com",
  true,
  ["GESTION_USUARIOS", "VER_REPORTES", "EDITAR_PRODUCTOS"]
);

console.log("Admin:", admin);
// Ejercicio 5: Arrays y Métodos de Arrays

type Producto = {
  id: number;
  nombre: string;
  precio: number;
  stock: number;
};

const productos: Producto[] = [
  { id: 1, nombre: "Pizza", precio: 1200, stock: 5 },
  { id: 2, nombre: "Empanada", precio: 300, stock: 0 },
  { id: 3, nombre: "Hamburguesa", precio: 1000, stock: 10 },
  { id: 4, nombre: "Bebida", precio: 500, stock: 2 },
];

// .map(): obtener nombres
const nombresProductos = productos.map(producto => producto.nombre);
console.log("Nombres de productos:", nombresProductos);

// .filter(): productos con stock > 0
const productosDisponibles = productos.filter(producto => producto.stock > 0);
console.log("Productos disponibles:", productosDisponibles);

// Ejercicio 6: Métodos .sort(), .push(), .pop()

// Ordenar productos por precio (de menor a mayor)
const productosOrdenados = [...productos].sort((a, b) => a.precio - b.precio);
console.log("Productos ordenados por precio:", productosOrdenados);

// Agregar un nuevo producto
const nuevoProducto: Producto = {
  id: 5,
  nombre: "Helado",
  precio: 800,
  stock: 3
};

productos.push(nuevoProducto);
console.log("Productos después de agregar:", productos);

// Eliminar el último producto
const productoEliminado = productos.pop();
console.log("Producto eliminado:", productoEliminado);
console.log("Productos finales:", productos);

// Ejercicio 7:
import { getRandomItem } from "./utils/getRandomItem";

// Probar con un array de números
const numeros = [10, 20, 30, 40, 50];
console.log("Número aleatorio:", getRandomItem(numeros));

// Probar con un array de strings
const palabras = ["manzana", "banana", "uva", "kiwi"];
console.log("Palabra aleatoria:", getRandomItem(palabras));

// Probar con un array de usuarios (usamos el array `usuarios` del ejercicio anterior)
console.log("Usuario aleatorio:", getRandomItem(usuarios));

// Ejercicio 8:
import { CajaClass } from './models/Caja';

// Probar con un número
const cajaNumero = new CajaClass<number>(123);
cajaNumero.mostrarContenido();

// Probar con un string
const cajaTexto = new CajaClass<string>("Hola mundo");
cajaTexto.mostrarContenido();

// Probar con un objeto (por ejemplo, un usuario)
const cajaUsuario = new CajaClass<Usuario>({
  id: 7,
  nombre: "Lucía",
  edad: 29,
  email: "lucia@gmail.com",
  activo: true
});
cajaUsuario.mostrarContenido();

// Ejercicio 9:
import { obtenerDatos } from './services/api';

async function mostrarDatos() {
  console.log("Cargando datos...");
  const datos = await obtenerDatos();
  console.log("Datos obtenidos:", datos);
}

mostrarDatos();

// Ejercicio 10:
/** 
async function obtenerUsuariosExternos() {
  try {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!respuesta.ok) throw new Error("Error en la solicitud");
    
    const usuarios = await respuesta.json();
    console.log("Usuarios de la API externa:", usuarios);
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
  }
}
  

obtenerUsuariosExternos();
*/
// Ejercicio 11:

async function obtenerUsuariosExternos() {
  try {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!respuesta.ok) throw new Error("Error en la solicitud");
    
    const usuarios = await respuesta.json();
    console.log("Usuarios de la API externa:", usuarios);
    renderizarUsuariosEnDOM(usuarios);
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
  }
}
//obtenerUsuariosExternos();

function renderizarUsuariosEnDOM(usuarios: any[]): void {
  const lista = document.getElementById("lista-usuarios");

  if (!lista) return;

  lista.innerHTML = ""; // Limpiar contenido anterior

  usuarios.forEach(usuario => {
    lista.innerHTML += `<li><strong>${usuario.name}</strong> - ${usuario.email}</li>`;
  });
}
//Ejercicio 12:
document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("btn-cargar-usuarios");

  if (boton) {
    boton.addEventListener("click", () => {
      obtenerUsuariosExternos();
    });
  }
});
