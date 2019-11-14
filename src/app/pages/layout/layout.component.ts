import { Component, OnInit } from '@angular/core';
import { Siders } from '../../constants/sider';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  isCollapsed = false;
  menus = Siders;

  handleToggle() {
    this.isCollapsed = !this.isCollapsed;
  }
  constructor() { }

  ngOnInit() {
  }

}
