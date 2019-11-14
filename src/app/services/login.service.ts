import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { catchError } from 'rxjs/operators'
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { login, logout } from '../store/user/actions';
import { Userinfo } from '../model/userinfo';

const client_id = 'c1eb8gr6-16yc-4dw3-ab69-77c9658b9d6f'
const client_secret = 'd834ju78-6017-4ewd-t4w8-1s6g9y5h438b'

@Injectable({
  providedIn: 'root' //
})
// @Injectable() // 在服务本身的@Injectable()装饰器中配置注入器
export class LoginService {
  isLoggedIn = false;
  username: string;

  user$: Observable<Userinfo>;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  async _login(uname: string, pwd: string) {
    const { code } = await this.oauthorize({ username: uname, password: pwd }).toPromise();
    const { access_token, username, timeout } = await this.getToken(code).toPromise();
    if (access_token && username && timeout) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
    const { suid } = await this.getSuid(access_token).toPromise();

    this.store.dispatch(login(new Userinfo(username, access_token, suid)));
    return { access_token, username, timeout };

  }

  oauthorize(data: { username: string, password: string, }) {
    return this.http.post<any>(
      `/oauth/oauth/oauthorize?username=${data.username}&password=${data.password}&redirect_uri=${location.href}&client_id=${client_id}&response_type=code`,
      {},
      {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*'
        })
      }
    )
  }

  getToken(code: any) {
    return this.http.post<any>(
      `/oauth/oauth/accesstoken?code=${code}&redirect_uri=http://localhost:4200/home&client_id=${client_id}&client_secret=${client_secret}&grant_type=authorization_code`,
      {},
      {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/x-www-form-urlencoded'
        })
      }
    );
  }

  getSuid(access_token: string) {
    return this.http.get<any>(
      `/oauth/oauth/suid/get?token=${access_token}`
    );
  }

  logout(): void {
    this.isLoggedIn = false;
    this.redirectUrl = '';
    window.localStorage.removeItem('uname');
    window.localStorage.removeItem('session');
    this.store.dispatch(logout());
  }
  constructor(private http: HttpClient,
    private cookieService: CookieService,
    private store: Store<Userinfo>
  ) {
    this.user$ = store.pipe(select('user'));
  }
}
