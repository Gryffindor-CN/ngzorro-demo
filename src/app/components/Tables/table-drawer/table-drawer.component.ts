import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table-drawer',
  templateUrl: './table-drawer.component.html',
  styleUrls: ['./table-drawer.component.scss']
})

export class TableDrawerComponent implements OnInit {
  @Input() closable: boolean = true;
  @Input() visible: boolean = false;
  @Input() maskClosable: boolean = true;
  @Input() showMask: boolean = true;
  @Input() keyboard: boolean = true;
  @Input() title: string = '';
  @Input() width: number | string = 370;
  @Input() zIndex: number = 1000;
  @Input() saveText: string = '确定';
  @Input() cancelText: string = '取消';
  @Input() saveButtonLoading: boolean = false;
  @Output() onSave = new EventEmitter<any>();
  @Output() onClose = new EventEmitter<MouseEvent>();

  _width: number | string;

  constructor() {
  }

  ngOnInit() {
  }

  closeDrawer(e: MouseEvent) {
    this.onClose.emit();
  }

  saveDrawer() {

    this.onSave.emit();
  }

}
