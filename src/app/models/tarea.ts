export class Tarea {
    nombre: string;
    acabada: boolean;

    constructor(nombre: string = "") {
        this.nombre = nombre;
        this.acabada = false;
    }
}
