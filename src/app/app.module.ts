import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { NgZorroAntdModule, NZ_I18N, zh_CN, } from 'ng-zorro-antd';
import { LayoutModule } from './pages/layout/layout.module';
import { SystemModule } from './pages/system/system.module';
import { InquireModule } from './pages/inquire/inquire.module';
import { ServiceModule } from './pages/service/service.module';
import { WelcomeModule } from './pages/welcome/welcome.module';
import { AdvanceModule } from './pages/advance/advance.module';
import { ResultModule } from './pages/exception/result.module';
import { LoginModule } from './pages/login/login.module';
import { FormsModule, } from '@angular/forms';
import { HomeModule } from './pages/home/home.module';
import { SettingsModule } from './pages/account/settings/settings.module';
import { SuccessModule } from './pages/result/success/success.module';
import { FailModule } from './pages/result/fail/fail.module';

import { StoreModule } from '@ngrx/store';
import { userReducer } from './store/user/reducer';

import { AppComponent } from './app.component';

import { CookieService } from 'ngx-cookie-service';
import { LoginService } from './services/login.service';
import { OrderService } from './services/order/order.service';
import { RouterService } from './services/router/router.service';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { HttpConfigInterceptor } from './interceptor/httpconfig.interceptor';

import { HighlightDirective } from './directives/highlight.directive';

registerLocaleData(zh);

@NgModule({
  declarations: [ // 该应用所拥有的组件
    AppComponent,
    HighlightDirective
  ],
  imports: [ // 导入BrowserModule以获取浏览器特有的服务，比如DOM渲染、无害化处理和位置
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    SystemModule,
    AdvanceModule,
    InquireModule,
    ServiceModule,
    WelcomeModule,
    ResultModule,
    SuccessModule,
    FailModule,
    FormsModule,
    LoginModule,
    HomeModule,
    SettingsModule,
    NgZorroAntdModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ user: userReducer })
  ],
  providers: [ // 各种服务供应商，当直接把服务列在这里时，它们是全应用范围的。
    { provide: NZ_I18N, useValue: zh_CN },
    LoginService,// 在NgModule的@NgModule()装饰器中配置注入器
    OrderService,
    CookieService,
    RouterService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent] // 根组件，Angular 创建它并插入 index.html 宿主页面。
})
export class AppModule {

}
