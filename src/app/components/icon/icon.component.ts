import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NzIconService } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {
  @Input() type: string; // 图标类型
  @Input() theme: string = 'outline'; // 图片主题风格
  @Input() size: number | string = 12;
  @Input() spin: boolean = false; // 是否有旋转
  @Input() twotoneColor: string; // 仅适用双色图标，仅对当前icon生效
  @Input() rotate: number = 0; // 图标旋转角度
  @Output() tap = new EventEmitter<void>(); // 点击事件


  constructor(private _iconService: NzIconService) {
    this._iconService.fetchFromIconfont({
      scriptUrl: 'https://at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'
    });
  }

  handleTap() {
    this.tap.emit();
  }

  ngOnInit() {

  }

}
