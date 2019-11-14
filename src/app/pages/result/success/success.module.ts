import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { SuccessRoutingModule } from './success-routing.module';
import { SuccessComponent } from './success.component';
import { AppCommonModule } from '../../../common/app-common.module';

@NgModule({
  declarations: [SuccessComponent],
  imports: [
    CommonModule,
    SuccessRoutingModule,
    NgZorroAntdModule,
    AppCommonModule
  ]
})
export class SuccessModule { }
