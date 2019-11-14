import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-inquire',
  templateUrl: './inquire.component.html',
  styleUrls: ['./inquire.component.css']
})
export class InquireComponent implements OnInit {
  title = [
    { title: 'tab1' },
    { title: 'tab2', disabled: true },
    { title: 'tab3' }]
  extra = 'extra';
  tab: number = 1;
  content = [
    {
      name: '1',
      value: '卡片样式分为以下三种：1.顶部显示title,右边显示功能按钮，底部为卡片内容；2.不显示title,只有卡片内容部分；3.顶部为页签，控制卡片的显示内容'
    }
  ];

  constructor(private message: NzMessageService, ) {
  }

  tabclick(index: number) {
    this.tab = index + 1;
  }
  extraclick() {
    this.message.create('success', `extra`);
  }
  ngOnInit() {
  }

}
