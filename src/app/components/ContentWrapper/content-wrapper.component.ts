import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-content-wrapper',
  templateUrl: './content-wrapper.component.html',
  styleUrls: ['./content-wrapper.component.scss']
})
export class ContentWrapperComponent implements OnInit {
  @Input() title: string;
  @Input() showSearchBar: boolean = false;
  @Input() buttonGroup = {
    primaryBtn: {
      text: '',
      onClick: () => { },
      disabled: false
    },
    group: []
  };
  @Input() content: Array<{ name: string, value: any }> = [];
  @Input() extraContent: Array<{ name: string, value: any, className: string }> = [];
  @Input() tabs: Array<{ title: string }> = [];
  @Output() tabSelect = new EventEmitter<number>();
  @Output() handleSearch = new EventEmitter<string>();

  searchValue: string = '';
  mainButtons = [];
  ellipsisButtons = [];
  tabBarStyle = {
    margin: 0
  }
  searchBtnLoading: boolean = false;

  constructor() { }


  ngOnInit() {
    if (!!this.buttonGroup && !!this.buttonGroup.group) {
      if (this.buttonGroup.group.length <= 3) {
        this.mainButtons = this.buttonGroup.group;
      } else {
        this.mainButtons = this.buttonGroup.group.slice(0, 2);
      }
    }
    if (this.buttonGroup && this.buttonGroup.group && this.buttonGroup.group.length > 3) {
      this.ellipsisButtons = this.buttonGroup.group.slice(2);
    }
  }

  tabSelectedChange(index: number) {
    this.tabSelect.emit(index);
  }

  doSearch() {
    this.searchBtnLoading = true;
    this.handleSearch.emit(this.searchValue);
  }

}
