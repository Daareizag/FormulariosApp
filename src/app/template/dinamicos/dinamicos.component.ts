import { Component } from '@angular/core';

interface Persona {
  nombre: string;
  favorito: Favorito[]
}

interface  Favorito {
  id:number;
  nombre: string
}



@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent{

persona: Persona = {
  nombre: 'Diego',
  favorito: [
    {id: 1, nombre: 'Metal Gear'},
    {id: 2, nombre: 'Mario Bros'}
  ]}

  eliminar(index: number ){
    this.persona.favorito.splice(index, 1)
  }

  guardar() {
    console.log('formulario posteado')
  }

}
