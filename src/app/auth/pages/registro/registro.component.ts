import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailPattern, nombreApellidoPattern, noPuedeSerPrime } from 'src/app/shared/validators/validators';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ["", [Validators.required, Validators.pattern(nombreApellidoPattern)]],
    email: ["", [Validators.required, Validators.pattern(emailPattern)]],
    username: ["", [Validators.required, noPuedeSerPrime]],
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Diego Areiza',
      email: 'test1@text.com',
      username: 'DtoPrax'
    })
  }

  campoNoValido(campo:string) {
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }
  submitForm(){
    console.log(this.miFormulario.value)
    this.miFormulario.markAllAsTouched();
  }

}
