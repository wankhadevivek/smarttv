import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ImageComponent } from './image/image.component';

const routes: Routes = [
  {path:'image', component:ImageComponent},
  {path:'checkbox', component:CheckboxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
