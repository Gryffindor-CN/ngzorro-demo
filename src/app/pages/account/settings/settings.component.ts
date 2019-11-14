import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { LocationService } from '../../../services/location/location.service';
import { UsbFill } from '@ant-design/icons-angular/icons/public_api';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  selectedMenu: number;
  menus = [
    {
      key: 1,
      text: '基本设置',
      selected: true
    },
    {
      key: 2,
      text: '安全设置',
      selected: false
    },
    {
      key: 3,
      text: '账号绑定',
      selected: false
    },
    {
      key: 4,
      text: '新消息通知',
      selected: false
    }
  ];
  country = '1';
  address = '西湖区工专路 77 号';
  cityData: { [place: string]: string[] } = {
    Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
    Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang']
  };
  securityData = [
    {
      title: '账号密码',
      text: '当前密码强度：：强'
    },
    {
      title: '密保手机',
      text: '已绑定手机：：138****8293'
    },
    {
      title: '密保问题',
      text: '未设置密保问题，密保问题可有效保护账户安全'
    },
    {
      title: '备用邮箱',
      text: '已绑定邮箱：：ant***sign.com'
    },
    {
      title: 'MFA 设备',
      text: '未绑定 MFA 设备，绑定后，可以进行二次确认'
    }
  ];
  accountData = [
    {
      title: '绑定淘宝',
      text: '当前未绑定淘宝账号'
    },
    {
      title: '绑定支付宝',
      text: '当前未绑定淘宝账号'
    },
    {
      title: '绑定钉钉',
      text: '当前未绑定淘宝账号'
    }
  ];
  messageData = [
    {
      title: '账户密码',
      text: '其他用户的消息将以站内信的形式通知'
    },
    {
      title: '系统消息',
      text: '系统消息将以站内信的形式通知'
    },
    {
      title: '待办任务',
      text: '待办任务将以站内信的形式通知'
    }
  ];
  cardBodyStyle = {
    'padding': '16px 0'
  }
  valiateForm: FormGroup;
  description: string = '';
  districtList: any[];
  values: any[] = [];
  provinces: any[] = [];
  citys: any[] = [];
  area: any[] = [];
  provinceChange(value: string): void {
    // this.selectedCity = this.cityData[value][0];
  }
  constructor(private fb: FormBuilder, private message: NzMessageService,
    private locationService: LocationService) {
  }

  ngOnInit() {
    this.selectedMenu = 1;
    this.valiateForm = this.fb.group({
      description: [this.description, Validators.required],
      email: ['antdesign@alipay.com'],
      address: ['西湖区工专路 77 号'],
      nickname: ['Serati Ma'],
      country: ['1'],
      province: [[], [Validators.required]],
      code: ['0571'],
      phone: ['06888888'],
    });
  }

  handleMenuTab(key: number) {
    this.selectedMenu = key;
  }

  submit() {
    for (const i in this.valiateForm.controls) {
      this.valiateForm.controls[i].markAsDirty();
      this.valiateForm.controls[i].updateValueAndValidity();
    }
    if (this.valiateForm.status === 'INVALID') return;
    console.log(this.valiateForm.value);
    this.message.create('success', `更新基本信息成功！`);
  }
  onProvinceSelect(values: any): void {
  }

  changeOn(option: any, index: number) {
    return true;
  }


  loadData = (node: any, index: number): PromiseLike<any> => {
    const that = this;
    return new Promise(resolve => {
      if (index < 0) { // if index less than 0 it is root node
        that.locationService.getDistrictList().subscribe((data) => {
          if (data.status === 0) {
            data.result[0].forEach(value => {
              that.provinces.push({
                value: value.id.toString(),
                label: value.name
              })
            });
            node.children = that.provinces;
            resolve();
          }
        });

      } else if (index === 0) {
        that.locationService.getDistrictChildren(node.value).subscribe((data) => {
          if (data.status === 0) {
            that.citys = [];
            data.result[0].forEach(value => {
              that.citys.push({
                value: value.id,
                label: value.fullname,
              })
            });
            node.children = that.citys;
            resolve();
          }
        });
      } else {
        that.locationService.getDistrictChildren(node.value).subscribe((data) => {
          if (data.status === 0) {
            that.area = [];
            data.result[0].forEach(value => {
              that.area.push({
                value: value.id,
                label: value.fullname,
                isLeaf: true
              })
            });
            node.children = that.area;
            resolve();
          }
        });
      }
    })
  }

}
