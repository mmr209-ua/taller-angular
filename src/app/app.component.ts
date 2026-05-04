import { Component, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { Lista } from './models/lista';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None,
})

export class AppComponent {
  title = 'AppListas';
  msg = "Hola, bienvenido a mi proyecto en Angular";
  listas: Lista[] = [];
  listasAbiertas = new Set<number>();
  nueva: Lista = new Lista();
  mostrarForm = false;
  listaSeleccionada?: Lista;
  filtroListas: 'todas' | 'visibles' | 'noVisibles' = 'todas';
  @ViewChild('modeloForm') form!: NgForm;
  
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    setTimeout(() =>  {this.msg = ''}, 5000);
  }

  mostrarFormulario() {
    this.listaSeleccionada = undefined;
    this.mostrarForm = true;
    this.nueva = new Lista();
  }

  ocultarFormulario() {
    this.listaSeleccionada = undefined;
    this.mostrarForm = false;
    this.nueva = new Lista();
  }

  toggleMostrarDetalles(lista: Lista) {
    if (this.listasAbiertas.has(lista.id)) {
      this.listasAbiertas.delete(lista.id);
    } else {
      this.listasAbiertas.add(lista.id);
    }
  }

  crearLista() {
    if (!this.form.valid) {
      return;
    }

    if (this.listaSeleccionada) {
      this.listaSeleccionada.nombre = this.nueva.nombre;
      this.listaSeleccionada.descripcion = this.nueva.descripcion;
      this.listaSeleccionada.color = this.nueva.color;
      this.listaSeleccionada.visible = this.nueva.visible;
    } else {
      this.nueva.id = Lista.obtenerSiguienteId();
      this.nueva.fechaCreacion = new Date();
      this.listas.push(this.nueva);
    }

    // No crear aquí otra instancia para evitar aumentar el contador dos veces
    this.listaSeleccionada = undefined;
    this.mostrarForm = false;
  }

  abrirModalEliminar(content: TemplateRef<unknown>, lista: Lista): void {
    this.listaSeleccionada = lista;
    this.modalService.open(content, { centered: true });
  }

  confirmarEliminacion(modal: { close: () => void }): void {
    if (this.listaSeleccionada) {
      this.listas = this.listas.filter((lista) => lista !== this.listaSeleccionada);
      this.listaSeleccionada = undefined;
    }
    modal.close();
  }

  modificarLista(lista: Lista): void {
    this.listaSeleccionada = lista;
    
    this.nueva = new Lista();
    this.nueva.nombre = lista.nombre;
    this.nueva.descripcion = lista.descripcion;
    this.nueva.color = lista.color;
    this.nueva.visible = lista.visible;
    
    this.mostrarForm = true;
  }

  get listasFiltradas(): Lista[] {
    if (this.filtroListas === 'visibles') {
      return this.listas.filter((lista) => lista.visible);
    }

    if (this.filtroListas === 'noVisibles') {
      return this.listas.filter((lista) => !lista.visible);
    }

    return this.listas;
  }
}

