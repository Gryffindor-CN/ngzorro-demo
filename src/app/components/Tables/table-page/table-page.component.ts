import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.scss']
})
export class TablePageComponent implements OnInit {
  @Input() current: number;
  @Input() total: number;
  @Input() pageSize: number;
  @Input() totalPage: number;
  @Output() handlePageIndexChange = new EventEmitter<number>();
  @Output() handlePageSizeChange = new EventEmitter<number>();

  selectOption = [10, 20, 30, 40, 50];
  selectedValue = 10;
  constructor() { }

  ngOnInit() {
    // this.totalPage = Math.ceil(this.total / this.pageSize) || 1;
  }

  doPageIndexChange(value: number) {

    this.handlePageIndexChange.emit(value);
  }

  doPageSizeChange() {
    this.handlePageSizeChange.emit(this.selectedValue);
    this.totalPage = Math.ceil(this.total / this.selectedValue) || 1;
  }

}
