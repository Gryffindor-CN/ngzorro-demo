import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, FormControl, ValidationErrors } from '@angular/forms';
import { stepForm } from '../../constants/grid';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  validateForm: FormGroup;
  passwordForm: FormGroup;
  grid = stepForm;
  current: number = 0;
  selectedValue: string = '1';
  phonenum = '1';
  column = {
    xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1
  }
  money = null;
  pwd = '123456';
  btnLoading = false;
  constructor(private fb: FormBuilder, ) {
  }
  content = [
    {
      name: '1',
      value: '将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。'
    },
    {
      name: '2',
      value: '分步表单的整体布局样式为页面居中，包括步骤条区域和表单区域，上下排列'
    },
    {
      name: '3',
      value: '步骤条位于页面顶部正中的位置，步骤条容器的最大宽度为750px,上下外边距为16px,左右外边距自适应'
    },
    {
      name: '4',
      value: '表单步骤条容器的最大宽度为500px,容器上外边距为40px,左右外边距自适应，下边距为0'
    },
    {
      name: '5',
      value: '表单的布局方式采用基础表单的布局规范，实现居中并自适应显示'
    },
    {
      name: '6',
      value: '表单元素失焦、点击保存、提价等功能按钮时，会对表单元素进行合法性进行或必填校验，不符合规则的表单元素出现红色的错误提示'
    }
  ];
  prev() {
    this.current = 0;
  }

  next() {
    if (this.current === 0) {
      for (const i in this.validateForm.controls) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
      if (this.validateForm.status === 'INVALID') return;
      this.current = 1;
    } else if (this.current === 1) {
      for (const i in this.passwordForm.controls) {
        this.passwordForm.controls[i].markAsDirty();
        this.passwordForm.controls[i].updateValueAndValidity();
      }
      if (this.passwordForm.status === 'INVALID') return;
      this.btnLoading = true;
      setTimeout(() => {
        this.current = 2;
      }, 1000)
    }
  }

  moneyFormatValidator = (control: FormControl): { [s: string]: boolean } => {
    if (isNaN(control.value)) {
      return { money: true, error: true };
    }
    return {};
  };

  reset(e: MouseEvent) {
    e.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
      this.validateForm.controls[key].updateValueAndValidity();
    }
    this.passwordForm.reset();
    for (const key in this.passwordForm.controls) {
      this.passwordForm.controls[key].markAsPristine();
      this.passwordForm.controls[key].updateValueAndValidity();
    }
    this.current = 0;
    this.btnLoading = false;
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      select: [null,],
      phonenum: [null],
      money: [this.money, [Validators.required, this.moneyFormatValidator]]
    })

    this.passwordForm = this.fb.group({
      password: [this.pwd, Validators.required]
    })
  }

}
