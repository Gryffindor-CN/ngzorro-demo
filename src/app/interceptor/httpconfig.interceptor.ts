import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { LoginService } from '../services/login.service';
import { RouterService } from '../services/router/router.service';
import { Router } from '@angular/router';

import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable()

export class HttpConfigInterceptor implements HttpInterceptor {

    constructor(private message: NzMessageService,
        private router: Router,
        private loginService: LoginService,
        private routerService: RouterService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token: string = localStorage.getItem('token');

        if (token) {
            request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
        }

        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }

        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    const { errcode, errmsg } = event.body;
                    if (errcode) {
                        switch (errcode) {
                            case '10012': {
                                this.message.create('error', '用户名或密码错误');
                                break;
                            }
                            case 'sys.1011': {
                                // 用户未登录
                                this.loginService.logout();
                                this.router.navigate(['login']);
                                break
                            }
                            default: {
                                this.message.create('error', errmsg);
                            }
                        }
                    }

                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                this.routerService.state = error.status;
                this.router.navigate(['error',], { skipLocationChange: true });
                return throwError(error);
            })
        );
    }
}