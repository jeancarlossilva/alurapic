import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { UserNotTakenValidatorService } from './uset-not-taken.validator.service';
import { Router } from '@angular/router';
import { SignUpService } from './signup.service';
import { NewUser } from './new-user';

@Component({
  templateUrl: 'signup.component.html',
  providers: [UserNotTakenValidatorService]
})
export class SignUpComponent implements OnInit, AfterViewInit  {

  signupForm!: FormGroup;

  @ViewChild('emailInput') emailInput!: ElementRef<HTMLInputElement>;

    constructor(
      private formBuilder: FormBuilder,
      private userNotTakenValidatorSerivce: UserNotTakenValidatorService,
      private signUpService: SignUpService,
      private router: Router) {}

  ngAfterViewInit(): void {
    this.emailInput.nativeElement.focus();
  }

    ngOnInit(): void {
        this.signupForm = this.formBuilder.group({
            email: ['',
                [
                    Validators.required,
                    Validators.email
                ]
            ],
            fullName: ['',
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(40)
                ]
            ],
            userName: ['',
                [
                    Validators.required,
                    lowerCaseValidator,
                    Validators.minLength(2),
                    Validators.maxLength(30)
                ],
                this.userNotTakenValidatorSerivce.checkUserNameTaken()
            ],
            password: ['',
                [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(14)
                ]
            ]
        });


    }

    signup() {
      const newUser = this.signupForm.getRawValue() as NewUser;
      this.signUpService
        .signup(newUser)
        .subscribe(
          () => {
            this.router.navigate([''])
          },
          err => {console.log(err)}
        )

    }

}


