import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PhotoComponent } from './photo.component';


@NgModule({
  imports: [CommonModule, HttpClientModule],
  exports: [PhotoComponent],
  declarations: [PhotoComponent],
  providers: [],
})
export class PhotoModule { }
