import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './card.component';


@NgModule({
  imports: [CommonModule],
  exports: [CardComponent],
  declarations: [CardComponent],
  providers: [],
})
export class CardModule { }
