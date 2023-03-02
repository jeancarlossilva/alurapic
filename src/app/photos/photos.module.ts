import { NgModule } from '@angular/core';
import { PhotoModule } from './photo/photo.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoLisModule } from './photo-list/photo-list.module';


@NgModule({
  imports: [
    PhotoModule,
    PhotoFormModule,
    PhotoLisModule
  ],
  exports: [],
  declarations: [

  ],
  providers: [],
})

export class PhotosModule {

}
