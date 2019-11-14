import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../../../model/menu';

@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.scss']
})
export class SiderComponent implements OnInit {
  @Input() isCollapsed: boolean;
  @Input() menus: Array<Menu>;

  _menus: Array<Menu> = [];
  constructor() {

  }
  ngOnInit() {
    this._menus = this.menus;
  }

}
