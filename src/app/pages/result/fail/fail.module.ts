import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { AppCommonModule } from '../../../common/app-common.module';
import { FailRoutingModule } from './fail-routing.module';
import { FailComponent } from './fail.component';


@NgModule({
  declarations: [FailComponent],
  imports: [
    CommonModule,
    FailRoutingModule,
    NgZorroAntdModule,
    AppCommonModule
  ]
})
export class FailModule { }
