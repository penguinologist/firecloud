import { Validators } from '@angular/forms';
import { isNumeric } from 'rxjs/util/isNumeric'

export var ALPHA_CHARACTER_PATTERN: any = /[A-Za-z]/;
export var TWO_DIGIT_NUMBER_PATTERN: any = /^\d+\.\d{2}$/;
export var FOUR_DIGIT_NUMBER_PATTERN: any = /^\d+\.\d{4}$/;
export var US_PHONE_NUMBER_PATTERN: any = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
export var EMAIL_ADDRESS_PATTERN: any = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export class CustomValidators {
   public twoDigitDecimalNumber = Validators.pattern(TWO_DIGIT_NUMBER_PATTERN);
   public fourDigitDecimalNumber = Validators.pattern(FOUR_DIGIT_NUMBER_PATTERN);
   public alphaCharacter = Validators.pattern(ALPHA_CHARACTER_PATTERN);
   public usPhoneNumber = Validators.pattern(US_PHONE_NUMBER_PATTERN);
   public emailAddress = Validators.pattern(EMAIL_ADDRESS_PATTERN);

    public number(control: any) {
        if (isNumeric(control.value)) {
            return null;
        }
        else {
            return {'numeric': true};
        }
    }
}
