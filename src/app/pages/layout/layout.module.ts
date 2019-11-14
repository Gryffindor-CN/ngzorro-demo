import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { SiderComponent } from '../../components/Layout/sider/sider.component';
import { HeaderComponent } from '../../components/Layout/header/header.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { IconsProviderModule } from '../../icons-provider.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { AppCommonModule } from '../../common/app-common.module';

@NgModule({
  declarations: [LayoutComponent, SiderComponent, HeaderComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    AppCommonModule,
    IconsProviderModule,
    NgZorroAntdModule,
  ]
})
export class LayoutModule { }
