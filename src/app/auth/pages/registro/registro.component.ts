import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/validators/validators.service';
import { EmailValidatorsService } from '../../../shared/validators/email-validators.service';
import { nombreApellidoPattern } from '../../../shared/validators/validators';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  mensaje:string='';

    miFormulario: FormGroup = this.fb.group({
        nombre: ['', [Validators.required, Validators.pattern(this.validationService.nombreApellidoPattern)]],
        email: ['', [Validators.required, Validators.pattern(this.validationService.emailPattern)],[this.emailValidator]],
        username: ['', [Validators.required, this.validationService.noPuedeSerPrime]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        password2: ['', [Validators.required]],
      }, {
        validators: [this.validationService.camposIguales('password', 'password2')]
      })


    emailErrorMsg(campo:string):string {
    const errors = this.miFormulario.get(campo)?.errors;
    if(errors?.required){
      return 'El Email es obligatorio'
    }else if(errors?.pattern){
      return 'El Email no cumple con la estructura requerida'
    }else if (errors?.emailTomado){
      return 'El Email ya esta en uso'
    }else if (errors?.noIguales ){
      return 'Las contraseñas no coinciden'
    }else if (errors?.noIguales ){
      return 'Las contraseñas no coinciden'
    }
    return '';
  }



  constructor(private fb: FormBuilder,
              private validationService: ValidatorsService,
              private emailValidator: EmailValidatorsService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Diego Areiza',
      email: 'test1@test.com',
      username: 'DtoPrax',
      password: '123456',
      password2: '123456'
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
