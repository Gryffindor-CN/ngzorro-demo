import { Component, OnInit } from '@angular/core';
import { advanceForm } from '../../constants/grid';
import { NzMessageService } from 'ng-zorro-antd/message';
import { debounce } from '../../utils/debounce';
import { RecordService } from '../../services/record/record.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-advance',
  templateUrl: './advance.component.html',
  styleUrls: ['./advance.component.scss']
})
export class AdvanceComponent implements OnInit {
  grid = advanceForm;
  editCache: { [key: string]: any } = {};
  listOfData: any[] = [];
  tableLoading: boolean = false;
  options: { oid: number, text: string }[] = [];
  validateFirst: FormGroup;
  validateSecond: FormGroup;
  subBtnLoading = false;
  content = [
    {
      name: '1',
      value: '高级表单常用于一次性输入和提交大批量数据的业务场景'
    },
    {
      name: '2',
      value: '每组表单控件使用卡片组件进行包裹，每一组卡片组件向下外边距为24px'
    },
    {
      name: '3',
      value: '每组表单控件一般包含三个或以上的表单元素，一行最多放置三个表单元素，表单标签和控件上下排列；必填表单和非必填表单用（选填）区分，带有（选填）的为非必填字段，不带则为必填字段'
    },
    {
      name: '4',
      value: '由于此类页面表单元素较多，因此功能按钮位于悬浮在底部的横块的右侧，方便用户操作'
    },
    {
      name: '5',
      value: '表单元素失焦、点击保存、提价等功能按钮时，会对表单元素进行合法性进行或必填校验，不符合规则的表单元素出现红色的错误提示'
    },
  ];
  debounceOnInput = debounce((e: MouseEvent, value: string, id: number) => {
    this.onInput(e, value, id);
  }, 500);
  constructor(private fb: FormBuilder, private message: NzMessageService,
    private recordService: RecordService,
  ) {
  }

  updateEditCache(): void {
    this.listOfData.forEach(item => {
      const __validatForm = `validateForm_${item.id}`;
      this.editCache[item.id] = {
        edit: false,
        new: false,
        __validateForm: this.fb.group({
          name: [item.name, [Validators.required]],
          number: [item.number, [Validators.required, this.numberFormatValidator]],
        }),
        data: { ...item }
      };
    });
  }
  deleteRow(id: number) {
    const index = this.listOfData.findIndex(item => item.id === id);
    this.listOfData.splice(index, 1);
  }
  addRow() {
    this.listOfData.push({
      id: `${this.listOfData.length}`,
      name: '',
      age: '',
      number: '',
      address: ''
    });
    this.updateEditCache();
    this.editCache[this.listOfData.length - 1].edit = true;
    this.editCache[this.listOfData.length - 1].new = true;
  }
  startEdit(id: string): void {
    this.editCache[id].edit = true;
  }
  savaNew(id: string): void {
    for (const i in this.editCache[id].__validateForm.controls) {
      this.editCache[id].__validateForm.controls[i].markAsDirty();
      this.editCache[id].__validateForm.controls[i].updateValueAndValidity();
    }
    if (this.editCache[id].__validateForm.status === 'INVALID') return;
    this.tableLoading = true;
    setTimeout(() => {
      this.tableLoading = false;
      this.editCache[id].new = false;
      this.editCache[id].edit = false;
      this.saveEdit(id);
    }, 1000);
  }
  cancelEdit(id: string): void {
    const index = this.listOfData.findIndex(item => item.id === id);
    this.editCache[id] = {
      data: { ...this.listOfData[index] },
      edit: false
    };
  }
  saveEdit(id: string): void {
    for (const i in this.editCache[id].__validateForm.controls) {
      this.editCache[id].__validateForm.controls[i].markAsDirty();
      this.editCache[id].__validateForm.controls[i].updateValueAndValidity();
    }
    if (this.editCache[id].__validateForm.status === 'INVALID') return;
    const index = this.listOfData.findIndex(item => item.id === id);
    Object.assign(this.listOfData[index], this.editCache[id].data,
      { name: this.editCache[id].__validateForm.value.name, number: this.editCache[id].__validateForm.value.number });
    this.editCache[id].edit = false;
  }
  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.listOfData.push({
        id: `${i}`,
        name: `Edrward ${i}`,
        age: 32,
        number: `0000${i}`,
        address: `London Park no. ${i}`
      });
    }
    this.updateEditCache();
    this.validateFirst = this.fb.group({
      number: [null, [Validators.required]],
      domain: [null, [Validators.required]],
      manager: [null, [Validators.required]],
      approve: [null, [Validators.required]],
      time: [null, [Validators.required]],
      type: [null, [Validators.required]],
    });
    this.validateSecond = this.fb.group({
      name: [null, [Validators.required]],
      description: [null, [Validators.required]],
      executor: [null, [Validators.required]],
      response: [null, [Validators.required]],
      time: [null, [Validators.required]],
      type: [null, [Validators.required]],
    });
    // this.recordService.getRecorders().subscribe((data) => {

    // })
  }

  invalidCount = 0;

  onInput(e: MouseEvent, value: string, id: number): void {
    this.options = value ? [
      {
        oid: 1,
        text: value
      },
      {
        oid: 2,
        text: value + value
      },
      {
        oid: 3,
        text: value + value + value
      }
    ] : [];
  }

  numberFormatValidator = (control: FormControl): { [s: string]: boolean } => {
    if (isNaN(control.value)) {
      return { money: true, error: true };
    }
    return {};
  };

  onSelect(e: any, opt: any, id: number
  ) {

    if (e.isUserInput) {
      const index = this.listOfData.findIndex(item => item.id === id);
      this.editCache[id].data = {
        ...this.editCache[id].data,
        name: `Edrward ${opt.text}`,
        number: `0000${opt.text}`,
        address: `London Park no. ${opt.text}`
      }
      Object.assign(this.listOfData[index], this.editCache[id].data);
      this.editCache[id].edit = false;
      this.editCache[id].new = false;
      this.options = [];
      this.addRow();
    }
  }
  submit() {
    for (const i in this.validateFirst.controls) {
      if (this.validateFirst.controls[i].status === 'INVALID') {
        this.invalidCount++;
      } else {
        this.invalidCount--;
      }
      this.validateFirst.controls[i].markAsDirty();
      this.validateFirst.controls[i].updateValueAndValidity();
    }
    for (const i in this.validateSecond.controls) {
      if (this.validateSecond.controls[i].status === 'INVALID') {
        this.invalidCount++;
      } else {
        this.invalidCount--;
      }
      this.validateSecond.controls[i].markAsDirty();
      this.validateSecond.controls[i].updateValueAndValidity();
    }

    if (this.validateFirst.status === 'INVALID') return;
    if (this.validateSecond.status === 'INVALID') return;
    this.subBtnLoading = true;
    setTimeout(() => {
      this.message.success('提交成功！');
      this.subBtnLoading = false;
    }, 1000);

  }

}
