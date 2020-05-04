import {FormGroup} from '@angular/forms';

export function checkPriceSale(price: string, priseSale: string, numberPrice: string) {
  return (formGroup: FormGroup) => {
    const checkPrice = formGroup.controls[price];
    const checkPriseSale = formGroup.controls[priseSale];
    const checkNumberPrice = formGroup.controls[numberPrice];

    if (checkPriseSale.errors && !checkPriseSale.errors.checkPriceSale) {
      return;
    }
    const total = checkPrice.value - checkPriseSale.value;
    if (total < 0) {
      checkPriseSale.setErrors({checkPriceSale: true});
    } else {
      checkPriseSale.setErrors(null);
    }

    if (checkNumberPrice.errors && !checkNumberPrice.errors.checkPositiveNumberPrice) {
      return;
    }
    if (checkNumberPrice.value < 0) {
      checkNumberPrice.setErrors({checkPositiveNumberPrice: true});
    } else {
      checkNumberPrice.setErrors(null);
    }

    if (checkPrice.errors && !checkPrice.errors.checkPositivePrice) {
      return;
    }
    if (checkPrice.value < 0) {
      checkPrice.setErrors({checkPositivePrice: true});
    } else {
      checkPrice.setErrors(null);
    }

    if (checkPriseSale.errors && !checkPriseSale.errors.checkPositivePriseSale) {
      return;
    }
    if (checkPriseSale.value < 0) {
      checkPriseSale.setErrors({checkPositivePriseSale: true});
    } else {
      checkPriseSale.setErrors(null);
    }
  };
}
