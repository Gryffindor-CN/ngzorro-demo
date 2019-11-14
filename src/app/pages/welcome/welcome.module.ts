import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { NgZorroAntdModule, } from 'ng-zorro-antd';
import { WelcomeComponent } from './welcome.component';
import { AppCommonModule } from '../../common/app-common.module';

@NgModule({
  imports: [WelcomeRoutingModule, NgZorroAntdModule, FormsModule, ReactiveFormsModule, FormsModule, AppCommonModule],
  declarations: [WelcomeComponent,
  ],
  exports: [WelcomeComponent]
})
export class WelcomeModule {

}
