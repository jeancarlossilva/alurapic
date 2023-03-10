import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform/platform-detector.service';
import { AuthService } from './../../core/auth/auth.service';

@Component({
  templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit, AfterViewInit {

  loginForm!: FormGroup;

  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement> = {} as ElementRef<HTMLInputElement> ;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService) {

  }

  ngAfterViewInit(): void {
    this.platformDetectorService.isPlatformBrowser() &&
     this.userNameInput.nativeElement.focus();
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });


  }

  login() {
    const userName = this.loginForm.get('userName')?.value;
    const password = this.loginForm.get('password')?.value;

    this.authService.authenticate(userName, password).subscribe(
      res => {
        this.router.navigate(['user', userName]);
      },
      err => {
        console.log(err);
        this.loginForm.reset();
        this.platformDetectorService.isPlatformBrowser() &&
         this.userNameInput.nativeElement.focus();
      },
      () => {}
    )
  }

}
