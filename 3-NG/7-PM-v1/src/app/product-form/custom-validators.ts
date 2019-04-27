import { AbstractControl } from '@angular/forms';

let badWords = ["shit"]

export function badWord(control: AbstractControl): { [key: string]: any } | null {
    var value = control.value;
    if (badWords.includes(value)) {
        return { bad: true }
    } else {
        return null;
    }
};
