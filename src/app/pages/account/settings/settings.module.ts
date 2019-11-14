import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconsProviderModule } from '../../../icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { SettingsRoutingModule } from './settings-routing.module';

import { SettingsComponent } from './settings.component';
import { AppCommonModule } from '../../../common/app-common.module';


@NgModule({
  declarations: [SettingsComponent],
  imports: [
    FormsModule,
    CommonModule,
    SettingsRoutingModule,
    IconsProviderModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    AppCommonModule,
  ]
})
export class SettingsModule { }
