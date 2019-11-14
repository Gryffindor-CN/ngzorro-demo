import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InquireComponent } from './inquire.component';

const routes: Routes = [
  {
    path: '',
    component: InquireComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InquireRoutingModule { }
