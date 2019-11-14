import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceComponent } from './service.component';

import { ServiceRoutingModule } from './service-routing.module';
import { IconsProviderModule } from '../../icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { AppCommonModule } from '../../common/app-common.module';

@NgModule({
  declarations: [ServiceComponent],
  imports: [
    FormsModule,
    ServiceRoutingModule,
    IconsProviderModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    AppCommonModule
  ],
})
export class ServiceModule { }
