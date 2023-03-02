import { AbstractControl } from '@angular/forms';
import { SignUpService } from './signup.service';
import { Injectable } from '@angular/core';

import { debounceTime, first, map, switchMap } from 'rxjs';

@Injectable()
export class UserNotTakenValidatorService {

  constructor(private singUpSerivce: SignUpService){

  }

  checkUserNameTaken(){
    return (control: AbstractControl) => {
      return control.valueChanges
         .pipe(debounceTime(300))
         .pipe(switchMap(userName=>{
            return this.singUpSerivce.checkUserNameTaken(userName);
         }))
         .pipe(map(isTaken => isTaken ? {userNameTaken: true} : null))
         .pipe(first());
    }
  }

}
