import { Component, OnInit } from '@angular/core';
import { moneyFormat } from '../../utils/moneyFormat';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {
  content = [
    {
      name: '1',
      value: '详情页字段排列方式为横向排布，每一行显示3列数据'
    },
    {
      name: '2',
      value: '当需要对字段进行分块时，每一个小的字段块底部使用分隔线进行区分'
    },
    {
      name: '3',
      value: '当字段值为金额时，遵循统一的金额显示方式，即金额前带‘￥’符号统一显示千分位，使用逗号分隔开，并且保留两位小数'
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

  data = [
    { name: '开票时间', value: 1547690791860, type: 'time' },
    { name: '开票金额', value: 2928, type: 'money' },
    { name: '开票公司', value: '菜鸟仓库', },
    { name: '状态', value: '已取货', },
    { name: '常用快递', value: '顺风快递', },
    { name: '用户姓名', value: '付晓晓', },
    { name: '开票图片', value: 'https://ngrx.io/assets/images/badge.svg', type: 'img' },
    { name: '开票信息', value: [26776546688272, 26776546688272, 26776546688272, 26776546688272, 26776546688272, 26776546688272,], type: 'array' },
    { name: '开票图片', value: ['https://ngrx.io/assets/images/badge.svg', 'https://ngrx.io/assets/images/badge.svg', 'https://ngrx.io/assets/images/badge.svg'], type: 'img-multiple' },
  ]

  listOfData = [
    {
      key: '123456',
      name: '矿泉水 550ml',
      age: 12421432143214321,
      address: moneyFormat(2, 2, {}),
      amount: 2,
      price: moneyFormat(2, 2, {})
    },
    {
      key: '123456',
      name: '矿泉水 550ml',
      age: 12421432143214321,
      address: moneyFormat(2, 2, {}),
      amount: 2,
      price: moneyFormat(2, 2, {})
    },
    {
      key: '123456',
      name: '矿泉水 550ml',
      age: 12421432143214321,
      address: moneyFormat(2, 2, {}),
      amount: 2,
      price: moneyFormat(2, 2, {})
    }
  ];

}
