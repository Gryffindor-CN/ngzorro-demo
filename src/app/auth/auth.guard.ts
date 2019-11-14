import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { Title } from '@angular/platform-browser';
import { Siders } from '../constants/sider';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  redirectUrl: string;
  siders = [];
  constructor(private router: Router,
    private loginService: LoginService,
    private titleService: Title) { }

  // 路由守卫
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    var path = route.routeConfig.path;
    this.siders = Siders;
    const nextRoute = ['', 'home', 'welcome', 'system', 'inquire', 'service', 'result/success', 'result/fail', 'advance', 'account/settings'];
    let isLogin = this.loginService.isLoggedIn;
    let url: string = state.url;
    let storageUname = null;
    storageUname = window.localStorage.getItem('uname');
    // for (let i = 0, l = this.siders.length; i < l; i++) {
    //   if (this.siders[i].children !== undefined) {
    //     for (let j = 0, l = this.siders[i].children.length; j < l; j++) {
    //       if (path === this.siders[i].children[j].name) {
    //         this.titleService.setTitle(this.siders[i].children[j].text);
    //         break;
    //       }
    //     }
    //   } else {
    //     if (path === this.siders[i].name) {
    //       this.titleService.setTitle(this.siders[i].text);
    //       break;
    //     }
    //   }
    // }


    // if (nextRoute.indexOf(path) >= 0) {
    //   if (storageUname !== '' && storageUname != null) {
    //     this.loginService.isLoggedIn = true;
    //     this.loginService.username = storageUname;
    //     return true;
    //   }
    //   if (!isLogin) {
    //     this.loginService.redirectUrl = url;
    //     // 未登录，跳转到login
    //     this.router.navigate(['login']);
    //     return false;
    //   }
    //   return true;
    // }
    // if (path === 'login') {
    //   if (!isLogin) {
    //     if (this.loginService.redirectUrl == '' || this.loginService.redirectUrl == undefined) this.loginService.redirectUrl = 'home';
    //     return true;
    //   } else {
    //     this.router.navigate(['home']);
    //     return false;
    //   }
    // }
    return true;
  }
}