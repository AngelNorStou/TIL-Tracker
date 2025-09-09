import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TilFormComponent } from './til/til-form/til-form';

import { TilListComponent } from './til/til-list/til-list';


export const routes: Routes = [
  { path: '', component: TilListComponent },
  { path: 'add', component: TilFormComponent },
  { path: '**', redirectTo: '' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}