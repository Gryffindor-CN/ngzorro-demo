import { Component, OnInit } from '@angular/core';
import timeFormat from '../../utils/timeFormat';
import moneyFormat from '../../utils/moneyFormat';
import { OrderService } from '../../services/order/order.service';
import { LoginService } from '../../services/login.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Userinfo } from '../../model/userinfo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  advSearch: boolean = false;
  total: number = 0;
  pageIndex: number = 1;
  pageSize: number = 10;
  current: number = 1;
  totalPage: number = 1;
  sortName: string | null = null;
  sortValue: string | null = null;
  loading: boolean = false;
  filters: { name: string };

  listOfData = [];
  listOfDisplayData = [];

  tableDrawer: boolean = false;
  saveButtonLoading: boolean = false;
  validateForm: FormGroup;
  selectedTab: number = 0;
  searchData = {
    number: ''
  };
  postData = {
    pageNum: this.pageIndex,
    pageSize: this.pageSize,
    suid: ''
  }

  user$: Observable<Userinfo>;

  buttonGroup = {
    primaryBtn: {
      text: '主按钮',
      onClick: () => { }
    },
    group: [
      {
        text: '按钮一',
        onClick: () => { }
      },
      {
        text: '按钮二',
        onClick: () => { }
      },
      {
        text: '按钮三',
        onClick: () => { }
      },
      {
        text: '按钮四',
        onClick: () => { }
      }
    ]
  }

  contentWrapper = [
    {
      name: '企业名称',
      value: '电视剧发送到了房间里'
    },
    {
      name: '客户账号',
      value: '电视剧发送到了房间里'
    },
    {
      name: '客户姓名',
      value: '电视剧发送到了房间里'
    },
    {
      name: '客户类型',
      value: '电视剧发送到了房间里'
    },
    {
      name: '赊欠客户',
      value: '电视剧发送到了房间里'
    },
  ]

  wrapExtraContent = [
    {
      name: '订单状态',
      value: '已完成',
      className: ['list-value']
    },
    {
      name: '订单金额',
      value: `¥ 265.00`,
      className: 'list-value money'
    }
  ]

  tabs = [
    {
      title: '详情'
    },
    {
      title: '物流'
    }
  ]

  constructor(
    private fb: FormBuilder,
    public orderService: OrderService, public loginService: LoginService,
    private store: Store<Userinfo>) {
    this.user$ = store.pipe(select('user'));
    this.user$.subscribe(value => {
      this.postData.suid = value.suid
    })
  }

  handlePageIndexChange(pageIndex: number) {
    this.current = pageIndex;
    this.postData.pageNum = pageIndex;
    this.getOrders();
  }
  handlePageSizeChange(pageSize: number) {
    this.current = 1;
    this.postData.pageSize = pageSize;
    this.getOrders();
  }

  toggleAdvSearch() {
    this.advSearch = !this.advSearch;
  }

  handleAgeSort(sort: { key: string, value: string }): void {
    this.sortName = sort.key;
    this.sortValue = sort.value;

    if (this.sortName && this.sortValue) {
      this.listOfDisplayData = this.listOfData.sort((a, b) =>
        this.sortValue === 'ascend' ? a[this.sortName!] > b[this.sortName!]
          ? 1
          : -1
          : b[this.sortName!] > a[this.sortName!]
            ? 1
            : -1);
    }
  }

  handleFilter(conditions: { number: any; }): void {
    this.loading = true;
    var _number = conditions.number;
    this.searchData = {
      number: _number
    }
    this.getOrders();
  }

  getOrders(): void {
    this.loading = true;
    this.orderService.getOrders({
      userName: window.localStorage.getItem('uname'),
      ...this.postData,
      ...this.searchData
    }).subscribe(data => {
      const { errcode, errmsg, total, orders } = data;
      if (errcode && errcode !== '0') return;
      if (total === 0) {
        this.totalPage = 0;
        this.loading = false;
        this.total = total;
        this.listOfDisplayData = [];
        return;
      }
      this.totalPage = Math.ceil(total / this.pageSize) || 1;
      this.loading = false;
      this.total = total;
      this.listOfData = orders.map((data: { createTime: any; paymentTime: any; payableTotal: any; couponPrice: any; freightPrice: any; }, i: number) => {
        return {
          key: i + 1,
          ...data,
          createTime: data.createTime ? timeFormat(data.createTime, undefined) : '-',
          paymentTime: data.paymentTime ? timeFormat(data.paymentTime, undefined) : '-',
          payableTotal: `¥${moneyFormat(data.payableTotal, 2, {})}`,
          couponPrice: `¥${moneyFormat(data.couponPrice, 2, {})}`,
          freightPrice: `¥${moneyFormat(data.freightPrice, 2, {})}`,
        }
      });
      this.listOfDisplayData = [...this.listOfData]
    },
      (err) => console.log(`err:${err}`));
  }

  openDrawer() {
    this.tableDrawer = true;
  }

  closeDrawer() {
    this.tableDrawer = false;
  }

  saveDrawer() {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    this.saveButtonLoading = true;
    setTimeout(() => {
      this.saveButtonLoading = false;
      this.tableDrawer = false;
    }, 1000)
  }

  handleTabSelect(tabIndex: number) {
    this.selectedTab = tabIndex;
  }

  ngOnInit(): void {
    this.getOrders();
    this.validateForm = this.fb.group({
      email: [null,]
    });
  }

}
