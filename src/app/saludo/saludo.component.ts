import { Component,Input ,EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent {
  @Input() mostrarSaludo: boolean = false;
  @Output() cambioMostrarSaludo = new EventEmitter<boolean>()
  personNombre: string = 'Sergio Garcia';
  claseCambiarSaludo: string = '';
  constructor() { }
  cambiarfuente(fuente: string) {
    this.claseCambiarSaludo = fuente === 'rojo' ? 'fuente-rojo' : 'fuente-verde';
  }
  ocultarSaludo() {
    this.mostrarSaludo = false;
    this.cambioMostrarSaludo.emit(this.mostrarSaludo);
  }
}
