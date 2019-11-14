import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { basicForm } from '../../constants/grid';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  grid = basicForm;
  calendarPickerStyle = {
    width: '100%'
  }
  inputNumber: number = 1;
  selectedValue: string;
  listOfOption: Array<{ label: string; value: string }> = [];
  multipleValue = [];
  time: Date | null = null;
  defaultOpenValue = new Date(0, 0, 0, 0, 0, 0);
  radioValue = 'A';
  expandKeys = ['100', '1001'];
  value: string;
  nodes = [
    {
      title: 'parent 1',
      key: '100',
      children: [
        {
          title: 'parent 1-0',
          key: '1001',
          children: [
            { title: 'leaf 1-0-0', key: '10010', isLeaf: true },
            { title: 'leaf 1-0-1', key: '10011', isLeaf: true }
          ]
        },
        {
          title: 'parent 1-1',
          key: '1002',
          children: [{ title: 'leaf 1-1-0', key: '10020', isLeaf: true }]
        }
      ]
    }
  ];
  inputValue: string = '@afc163';
  suggestions = ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご'];
  phonenum = '+86';
  content = [
    {
      name: '1',
      value: '基础表单页用于向用户收集或验证信息，基础表单常见于数据项较少的业务场景。'
    },
    {
      name: '2',
      value: '基础表单布局使用栅栏系统实现响应式布局，表单居中于页面，表单中标签和表单控件排列方式为水平排列'
    },
    {
      name: '3',
      value: '在实现布局时，标签项和控件项各自所占横向空间的比例数可以参考constants/grid.ts文件'
    },
    {
      name: '4',
      value: '填写类的表单控件长度应该保持一致，按钮类的控件长度则不需要过长'
    },
    {
      name: '5',
      value: '没有标签项的控件（包括表单底部按钮）应该向右偏移，使之与其他控件项左对齐'
    },
    {
      name: '6',
      value: '表单项默认情况下是必填状态，若当前项为非必填项，则要在标签文字后面加上选填来区分，选填文字样式统一为下面demo中的颜色'
    },
    {
      name: '7',
      value: '表单元素失焦、点击保存、提价等功能按钮时，会对表单元素进行合法性进行或必填校验，不符合规则的表单元素出现红色的错误提示'
    }
  ]
  constructor(private fb: FormBuilder) { }
  validateForm: FormGroup;
  onChange($event: string): void {
    console.log($event);
  }

  onSelect(suggestion: string): void {
    console.log(`onSelect ${suggestion}`);
  }

  search(value: string): void {
    if (value === '') {
      this.listOfOption = [];
      return;
    }
    this.listOfOption = [
      {
        label: value,
        value: value
      },
      {
        label: `${value}${value}`,
        value: `${value}${value}`
      },
      {
        label: `${value}${value}${value}`,
        value: `${value}${value}${value}`
      },
      {
        label: `${value}${value}${value}${value}`,
        value: `${value}${value}${value}${value}`
      },
    ]
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      target: [null, [Validators.required]],
      time: [null, [Validators.required]],
      description: [null, [Validators.required]],
      ordernumber: [null, [Validators.required]],
      phonenum: ['+86',],
      phoneNumber: [null, [Validators.required]],
      select: [null, [Validators.required]],
      multiselect: [null, [Validators.required]],
      timepicker: [null, [Validators.required]],
      tree: [null, [Validators.required]],
      mention: [null, [Validators.required]],
      radioValue: ['A', [Validators.required]],
      agreement: [null, [Validators.required]],
    });
  }

  submit() {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

}
