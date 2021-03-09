
import {Observable} from "rxjs";
import { FormControl } from "@angular/forms";

export class MyValidators {

  static restrictedEmails (control: FormControl): {[key: string]: boolean} {
    if (['admin@gmail.com', 'test@gmail.com'].includes(control.value)) {
      return { 'restrictedEmail': true }
    }

    return null;
  }

  static uniqEmails (control: FormControl): Promise<any> | Observable<any> {
    return new Promise(resolve => {
      setTimeout(() => {
        if (control.value === 'async@gmail.com') {
          resolve({uniqEmail: true})
        } else {
          resolve(true)
        }
      }, 1000)
    });
  }
}
