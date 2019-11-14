import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() loading: boolean = false;
  @Input() title: Array<{ title: string, disabled: boolean }> | string;
  @Input() bordered: boolean = false;
  @Input() hoverable: boolean = true;
  @Input() extra: string;
  @Input() bodyStyle: { [key: string]: string };
  @Output() onTabclick = new EventEmitter();
  @Output() onExtraClick = new EventEmitter();

  titleIsArray: boolean;

  constructor() {

  }

  ngOnInit() {
    this.titleIsArray = Array.isArray(this.title);

  }

  tabSelectedChange(index: number) {
    this.onTabclick.emit(index);
  }

  extraTitleClick() {
    this.onExtraClick.emit();
  }

}
