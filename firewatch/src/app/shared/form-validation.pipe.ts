import { Validators } from '@angular/forms';
import { ALPHA_CHARACTER_PATTERN, TWO_DIGIT_NUMBER_PATTERN, FOUR_DIGIT_NUMBER_PATTERN, US_PHONE_NUMBER_PATTERN, EMAIL_ADDRESS_PATTERN } from './custom-validator';

export class FormValidation {
    form: any;

    validateForm() {
        Object.keys(this.form.controls).forEach(field => {
          const control = this.form.get(field);
          control.markAsTouched({ onlySelf: true });
        });
    }

    isValidField(field: string) {
        if(this.form.get(field)) {
          return !this.form.get(field).valid && this.form.get(field).touched;
         } else {
          return false;
         }
    }

    errorMessage(field: string) {
       if( this.form.get(field).errors.required) {
           return 'This Field is Required.';
       }

       if( this.form.get(field).errors.minlength) {
           let requiredLength = this.form.get(field).errors.minlength.requiredLength;
           let actualLength = this.form.get(field).errors.minlength.actualLength;
           if (requiredLength == 1) {
               return `This field has a minimum number of ${requiredLength} character. You entered ${actualLength}.`
           }
           else if (requiredLength > 1) {
               return `This field has a minimum number of ${requiredLength} characters. You entered ${actualLength}.`
           }

       }

       if( this.form.get(field).errors.maxlength) {
           let requiredLength = this.form.get(field).errors.maxlength.requiredLength;
           let actualLength = this.form.get(field).errors.maxlength.actualLength;
           if (requiredLength == 1) {
               return `This field has a maximum number of ${requiredLength} character. You entered ${actualLength}.`
           }
           else if (requiredLength > 1) {
               return `This field has a maximum number of ${requiredLength} characters. You entered ${actualLength}.`
           }

       }

       if( this.form.get(field).errors.numeric) {
           return "This field can only contain Numbers."
       }

       if( this.form.get(field).errors.pattern.requiredPattern == ALPHA_CHARACTER_PATTERN) {
           return "This field can only contain alpha numeric character."
       }

       if( this.form.get(field).errors.pattern.requiredPattern == TWO_DIGIT_NUMBER_PATTERN) {
           return "This field can only contain numbers with two decimal places."
       }

       if( this.form.get(field).errors.pattern.requiredPattern == FOUR_DIGIT_NUMBER_PATTERN) {
           return "This field can only contain numbers with four decimal places."
       }

       if( this.form.get(field).errors.pattern.requiredPattern == US_PHONE_NUMBER_PATTERN) {
           return "Invalid Phone Number please use one of the following format (123) 456-7890   (123)456-7890   123-456-7890   123.456.7890   123456789   +3163636363   075-63546725";
       }

       if( this.form.get(field).errors.pattern.requiredPattern == EMAIL_ADDRESS_PATTERN) {
           return "Invalid email address format. Please use example@domainname.com format."
       }

       return 'Invalid Format'

    }

    constructor(form: any) {
        this.form = form;
    }
}
