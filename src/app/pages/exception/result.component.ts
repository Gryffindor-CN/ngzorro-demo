import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterService } from '../../services/router/router.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  status: string | number;
  title: string;
  subTitle: string;

  constructor(private router: Router,
    private routerService: RouterService) {

  }

  ngOnInit() {
    this.status = this.routerService.state;

    if (this.status === undefined) {
      this.status = '404';
      this.title = '404';
      this.subTitle = '抱歉，您访问的页面不存在！';
      return;
    }
    switch (this.status) {
      case 404:
        this.status = '404';
        this.title = '404';
        this.subTitle = '抱歉，您访问的页面不存在！';
        break;
      case 403:
        this.status = '403';
        this.title = '403';
        this.subTitle = '抱歉，你无权访问该页面！';
        break;
      case 500:
        this.status = '500';
        this.title = '服务器发生错误';
        this.subTitle = '系统繁忙，请稍后再试！'
        break;
      case 503:
        this.status = '500';
        this.title = '服务器发生错误';
        this.subTitle = '系统繁忙，请稍后再试！'
        break;
      case 504:
        this.status = '500';
        this.title = '网络连接错误';
        this.subTitle = '无法连接互联网，请检查您的网络！'
        break;
    }
  }

  backToInHome() {
    this.router.navigate(['home']);
  }

}
