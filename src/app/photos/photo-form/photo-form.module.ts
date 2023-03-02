import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessa.module';
import { PhotoFormComponent } from './photo-form.component';
import { PhotoModule } from './../photo/photo.module';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VMessageModule,
    FormsModule,
    RouterModule,
    PhotoModule
  ],
  exports: [],
  declarations: [PhotoFormComponent],
  providers: [],
})
export class PhotoFormModule { }
