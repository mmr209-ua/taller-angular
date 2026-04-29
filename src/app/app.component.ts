import { Component } from '@angular/core';
import { Lista } from './models/lista';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'AppListas';
  msg = "Hola, bienvenido a mi proyecto en Angular";
  listas: Lista[] = [];
  nueva: Lista = new Lista();
  mostrarForm = false;

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
}
