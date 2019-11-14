import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InquireRoutingModule } from './inquire-routing.module';
import { AppCommonModule } from '../../common/app-common.module';

import { InquireComponent } from './inquire.component';

@NgModule({
  declarations: [InquireComponent],
  imports: [
    CommonModule,
    InquireRoutingModule,
    AppCommonModule
  ]
})
export class InquireModule { }
