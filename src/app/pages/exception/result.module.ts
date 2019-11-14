import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultRoutingModule } from './result-routing.module';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { IconsProviderModule } from '../../icons-provider.module';

import { ResultComponent } from './result.component';


@NgModule({
  declarations: [ResultComponent],
  imports: [
    CommonModule,
    IconsProviderModule,
    ResultRoutingModule,
    NgZorroAntdModule
  ]
})
export class ResultModule { }
