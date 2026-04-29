import { Component, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  nueva: Lista = new Lista();
  mostrarForm = false;
  listaSeleccionada?: Lista;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    setTimeout(() =>  {this.msg = ''}, 5000);
  }

  mostrarFormulario() {
    this.mostrarForm = true;
  }

  ocultarFormulario() {
    this.mostrarForm = false;
  }

  crearLista() {
    this.listas.push(this.nueva);
    this.nueva = new Lista();
    this.mostrarForm = false;
  }

  mostrarDetalle(lista: Lista) {
    lista.visible = true;
  }

  ocultarDetalle(lista: Lista): void {
    lista.visible = false;
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
}
