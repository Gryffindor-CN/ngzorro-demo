import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IconComponent } from '../components/icon/icon.component';
import { ContentWrapperComponent } from '../components/ContentWrapper/content-wrapper.component';
import { CardComponent } from '../components/Card/card.component';
import { FooterToolBarComponent } from '../components/footer-tool-bar/footer-tool-bar.component';

import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { NzIconModule, NZ_ICON_DEFAULT_TWOTONE_COLOR } from 'ng-zorro-antd/icon';

@NgModule({
  imports: [
    CommonModule,
    NzIconModule,
    FormsModule,
    NgZorroAntdModule
  ],
  exports: [
    CommonModule,
    NzIconModule,
    IconComponent,
    CardComponent,
    ContentWrapperComponent,
    FooterToolBarComponent,
  ],
  declarations: [
    IconComponent,
    CardComponent,
    ContentWrapperComponent,
    FooterToolBarComponent,
  ],
  providers: [
    { provide: NZ_ICON_DEFAULT_TWOTONE_COLOR, useValue: '#1CC7A4' }, // 不提供的话，即为 Ant Design 的主题蓝色
  ],
})
export class AppCommonModule { }
