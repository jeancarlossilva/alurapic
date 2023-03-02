import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FilterByDescription } from './filter-by-description.pipe';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotoListComponent } from './photo-list.component';
import { PhotosComponent } from './photos/photos.component';
import { PhotoModule } from './../photo/photo.module';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { SearchComponent } from './search/search.component';
import { DarkenOnHouverModule } from 'src/app/shared/directives/darken-on-houver/darkne-on-houver-.module';


@NgModule({
  imports: [CommonModule, PhotoModule, CardModule, DarkenOnHouverModule],
  exports: [],
  declarations: [PhotoListComponent, PhotosComponent, LoadButtonComponent, FilterByDescription, SearchComponent],
  providers: [],
})
export class PhotoLisModule { }
