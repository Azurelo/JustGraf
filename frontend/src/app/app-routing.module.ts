import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GraffitiFormComponent } from './components/graffiti-form/graffiti-form.component';

const routes: Routes = [
  { path: '', component: GalleryComponent },
  { path: 'submit', component: GraffitiFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
