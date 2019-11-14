import { Component, OnInit, Input } from '@angular/core';
import { detailsGrid } from '../../../constants/grid';
import { timeFormat } from '../../../utils/timeFormat';
import { moneyFormat } from '../../../utils/moneyFormat';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  xlGrid = detailsGrid.xl;
  lgGrid = detailsGrid.lg;
  mdGrid = detailsGrid.md;
  smGrid = detailsGrid.sm;
  xsGrid = detailsGrid.xs;

  types: Array<string> = ['text', 'time', 'money', 'img', 'link']

  @Input() data: Array<{ name: string, value: string, type: string }> = [];
  @Input() border: boolean = false;
  @Input() title: string;


  constructor() {
  }

  ngOnInit() {

  }

  timeFormat(time: number) {
    return timeFormat(time, undefined);
  }

  moneyFormat(money: number | string) {
    return moneyFormat(money, 2, {});
  }

}
