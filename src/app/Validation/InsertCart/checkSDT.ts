import {AbstractControl} from '@angular/forms';
import {ValidatorFn} from '@angular/forms';

export const checkSDT = (): ValidatorFn => {
  return (control: AbstractControl): { [key: string]: string } => {
    const result = /(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3,4})/.test(control.value);
    // console.log(`Null Spaces SDDT: ${result}`);
    return result != false ? null : {'checkNuSDT' : 'sdtttttt'};
  };
};
