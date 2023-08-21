import { Component } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
})
export class ClientesComponent {
  clientes = [
    { nome: 'Cliente 1' },
    { nome: 'Cliente 2' },
    // ...
  ];
}
