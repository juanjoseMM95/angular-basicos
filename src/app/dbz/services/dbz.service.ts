import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  private _personajes: Personaje[] = [
    {nombre: 'Goku', poder: 15000},
    {nombre: 'Vegeta', poder: 7500}
  ];

  constructor() { 
  }

  get personajes():Personaje[]{
    return [...this._personajes];
  }
  
  agregarPersonaje(personaje: Personaje){
    this._personajes.push(personaje);
  }

}

