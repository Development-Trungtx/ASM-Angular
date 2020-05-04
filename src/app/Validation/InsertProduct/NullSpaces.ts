import {AbstractControl} from '@angular/forms';
import {ValidatorFn} from '@angular/forms';

export const spacesNull = (): ValidatorFn => {
  return (control: AbstractControl): { [key: string]: string } => {
    const result = /^\s*$/.test(control.value);
    // console.log(`Null Spaces: ${result}`);
    return result != true ? null : {'errors' : 'Do not enter a space'};
  };
};
