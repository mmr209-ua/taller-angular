import { Tarea } from './tarea';

export class Lista {
    nombre: string;
    descripcion: string;
    color: string;
    visible: boolean;
    fechaCreacion: Date;
    id!: number;
    tareas: Tarea[] = [];
    private static contadorId = 0; 

    static obtenerSiguienteId(): number {
        return Lista.contadorId++;
    }

    constructor() {
        this.nombre="";
        this.descripcion="";
        this.color="#FFFFFF";
        this.visible=true;
        this.fechaCreacion = new Date();
        this.tareas = [
            new Tarea("Tarea 1"),
            new Tarea("Tarea 2"),
            new Tarea("Tarea 3")
        ];
    }
}
