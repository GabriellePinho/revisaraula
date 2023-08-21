import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-texto-negrito',
  template: '<p [style.font-weight]="fontWeight">{{ texto }}</p>',
})
export class TextoNegritoComponent {
  @Input() texto: string = '';
  @Input() fontWeight: string = 'bold';
}
