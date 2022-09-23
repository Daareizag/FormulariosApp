import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationError } from 'webpack';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  public  nombreApellidoPattern: string = '([a-zA-z]+) ([a-zA-z]+)';
  public  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

    noPuedeSerPrime(control:FormControl): ValidationError | any{
    const valor: string=control.value?.trim().toLowerCase();
    if(valor === 'prime'){
      return {
        noPrime: true
      }
    }
      return null;
   }
}
