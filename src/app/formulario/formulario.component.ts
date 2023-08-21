import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
})
export class FormularioComponent {
  nomeCliente: string = '';

  cadastrarCliente() {
    // Lógica para cadastrar o cliente
  }
}
