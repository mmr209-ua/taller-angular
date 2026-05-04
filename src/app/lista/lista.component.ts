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

  cerrar(): void {
    this.cerrarDetalle.emit();
  }

  toggleTareaAcabada(tarea: Tarea): void {
    tarea.acabada = !tarea.acabada;
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
