import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {


  miFormulario: FormGroup = this.fb.group({
    nombre: ["",[Validators.required, Validators.minLength(3)]],
    favorito: this.fb.array([
      ['metal geal', Validators.required],
      ['dead strange', Validators.required]], Validators.required)
  })
  nuevoFavorito: FormControl = this.fb.control("", Validators.required);
  get favoritosArr() {
    return this.miFormulario.get('favorito') as  FormArray;
  }
  constructor(private fb: FormBuilder) { }
  campoEsObligatorio() {
    return this.miFormulario.controls.nombre.invalid&& this.miFormulario.controls.nombre.touched;
  }

  agregarFavorito() {
    if(this.miFormulario.invalid){return;}
    this.favoritosArr.push(new FormControl(this.nuevoFavorito.value, Validators.required))
    this.nuevoFavorito.reset()
  }

  borrar(i:number) {
    this.favoritosArr.removeAt(i);
  }

  guardar() {
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }



}
