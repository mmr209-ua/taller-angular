import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Lista } from '../models/lista';
import { Tarea } from '../models/tarea';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  @Input() lista!: Lista;
  @Output() cerrarDetalle = new EventEmitter<void>();

  filtroTareas: 'todas' | 'acabadas' | 'noAcabadas' = 'todas';
  mostrarFormularioNuevaTarea = false;
  nuevaTareaNombre = '';

  cerrar(): void {
    this.cerrarDetalle.emit();
  }

  toggleTareaAcabada(tarea: Tarea): void {
    tarea.acabada = !tarea.acabada;
  }

  abrirFormularioNuevaTarea(): void {
    this.mostrarFormularioNuevaTarea = true;
  }

  cancelarNuevaTarea(): void {
    this.mostrarFormularioNuevaTarea = false;
    this.nuevaTareaNombre = '';
  }

  agregarTarea(): void {
    const nombre = this.nuevaTareaNombre.trim();

    if (!nombre) {
      return;
    }

    this.lista.tareas.push(new Tarea(nombre));
    this.nuevaTareaNombre = '';
    this.mostrarFormularioNuevaTarea = false;
  }

  eliminarTarea(tarea: Tarea): void {
    this.lista.tareas = this.lista.tareas.filter((t) => t !== tarea);
  }

  get tareasFiltradas(): Tarea[] {
    if (this.filtroTareas === 'acabadas') {
      return this.lista.tareas.filter(t => t.acabada);
    }
    if (this.filtroTareas === 'noAcabadas') {
      return this.lista.tareas.filter(t => !t.acabada);
    }
    return this.lista.tareas;
  }
}
