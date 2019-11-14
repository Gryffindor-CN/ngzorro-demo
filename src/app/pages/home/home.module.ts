import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { BasicComponent } from '../../components/Forms/basic/basic.component';
import { AdvanceComponent } from '../../components/Forms/advance/advance.component';
import { TablePageComponent } from '../../components/Tables/table-page/table-page.component';
import { TableVirtualComponent } from '../../components/Tables/table-virtual/table-virtual.component';
import { TableDrawerComponent } from '../../components/Tables/table-drawer/table-drawer.component';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { IconsProviderModule } from '../../icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { AppCommonModule } from '../../common/app-common.module';

@NgModule({
  declarations: [
    HomeComponent,
    BasicComponent,
    AdvanceComponent,
    TablePageComponent,
    TableVirtualComponent,
    TableDrawerComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AppCommonModule,
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule
  ]
})
export class HomeModule { }
