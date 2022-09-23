import { FormControl } from "@angular/forms";

export const nombreApellidoPattern: string = '([a-zA-z]+) ([a-zA-z]+)';
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

export const noPuedeSerPrime=(control:FormControl)=>{
  const valor: string=control.value?.trim().toLowerCase();
  if(valor === 'prime'){
    return {
      noPrime: true
    }
  }
    return null;
 }
