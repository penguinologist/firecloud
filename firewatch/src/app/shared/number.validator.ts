/* Copyright (c) 2017 . All Rights Reserved. */

import { isNumeric } from 'rxjs/util/isNumeric'

export class NumberValidators {

    static numericValidator(control: any) {
        if (isNumeric(control.value)) {
            return null;
        }
        else {
            return {'Numeric': true};
        }
    }
}