import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdvanceRoutingModule } from './advance-routing.module';
import { AdvanceComponent } from './advance.component';

import { IconsProviderModule } from '../../icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { AppCommonModule } from '../../common/app-common.module';

@NgModule({
  declarations: [AdvanceComponent],
  imports: [
    FormsModule,
    CommonModule,
    AdvanceRoutingModule,
    IconsProviderModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    AppCommonModule
  ]
})
export class AdvanceModule { }
