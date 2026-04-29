import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Lista } from '../models/lista';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  @Input() lista!: Lista;
  @Output() cerrarDetalle = new EventEmitter<void>();

  tareas = [
    'Comprar pan',
    'Preparar el trabajo',
    'Revisar pendientes'
  ];

  cerrar(): void {
    this.cerrarDetalle.emit();
  }
}
