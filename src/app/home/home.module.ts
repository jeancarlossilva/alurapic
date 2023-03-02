import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './signin/signin.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VMessageModule } from './../shared/components/vmessage/vmessa.module';
import { SignUpComponent } from './signup/signup.component';
import { HomeRoutingModule } from './home.routing.module';
import { SignUpService } from './signup/signup.service';

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    HomeComponent
  ],
  imports: [
     CommonModule,
     FormsModule,
     ReactiveFormsModule,
     VMessageModule,
     RouterModule,
     HomeRoutingModule
  ],
  providers: [SignUpService]
})
export class HomeModule{

}
