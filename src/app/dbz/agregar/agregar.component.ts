import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})

export class AgregarComponent {

  @Input() i_nuevo: Personaje = {nombre:'', poder:0};

  constructor(private dbzService:DbzService){}

  //@Output() o_nuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(){
    if(this.i_nuevo.nombre.trim().length === 0){
      return;
    }
    this.dbzService.agregarPersonaje(this.i_nuevo);
    //this.o_nuevoPersonaje.emit(this.i_nuevo);
    this.i_nuevo= {nombre:'',poder: 0}
  }

}
