export class Lista {
    nombre: string;
    descripcion: string;
    color: string;
    visible: boolean;
    fechaCreacion: Date;
    id!: number;
    private static contadorId = 0; 

    static obtenerSiguienteId(): number {
        return Lista.contadorId++;
    }

    constructor() {
        this.nombre="";
        this.descripcion="";
        this.color="#FFFFFF";
        this.visible=false;
        this.fechaCreacion = new Date();
    }
}
