import { Component, OnDestroy, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { NzTableComponent } from 'ng-zorro-antd';
import { Subject } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';

export interface VirtualDataInterface {
  index: number;
  name: string;
  age: number;
  address: string;
}
@Component({
  selector: 'app-table-virtual',
  templateUrl: './table-virtual.component.html',
  styleUrls: ['./table-virtual.component.less']
})
export class TableVirtualComponent implements OnDestroy {
  @ViewChild('virtualTable', { static: false }) nzTableComponent: NzTableComponent;
  private destroy$ = new Subject();
  @Input() loading: boolean;
  @Input() data = [];
  @Input() pageSize: number;
  @Output() handleAgeSort = new EventEmitter<{ key: string, value: string }>();
  @Output() handleDrawerOpen = new EventEmitter<void>();
  @Output() handleStateFilter = new EventEmitter<string[]>();

  listOfState = [{ text: '待确认', value: 'unConfirm' },
  { text: '已确认', value: 'confirmed' },
  { text: '待支付', value: 'unpaid' },
  { text: '处理中', value: 'processing' },
  { text: '商品装箱', value: 'encasement' },
  { text: '商品出库', value: 'outbound' },
  { text: '待发货', value: 'wait_delivery' },
  { text: '待收货', value: 'wait_receive' },
  { text: '已完成', value: 'finish' },
  { text: '已取消', value: 'cancel' },
  ]
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  sort(sort: { key: string, value: string }): void {
    this.handleAgeSort.emit(sort);
  }

  filter(listOfSearchState: string[], ): void {
    this.handleStateFilter.emit(listOfSearchState);
  }


  openDrawer() {
    this.handleDrawerOpen.emit();
  }
}
