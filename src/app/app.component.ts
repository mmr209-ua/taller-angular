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
  mostrarFormulario = false;

  ngOnInit(): void {
    setTimeout(() =>  {this.msg = ''}, 5000);
  }

  nuevaLista() {
    this.mostrarFormulario = true;
  }
}
