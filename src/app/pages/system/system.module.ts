import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system.component';
import { SummaryComponent } from '../../components/Details/summary/summary.component';

import { IconsProviderModule } from '../../icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { AppCommonModule } from '../../common/app-common.module';

@NgModule({
  declarations: [SystemComponent, SummaryComponent,],
  imports: [
    CommonModule,
    SystemRoutingModule,
    IconsProviderModule,
    NgZorroAntdModule,
    AppCommonModule
  ]
})
export class SystemModule { }
