import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // providers: [LoginService] //在组件的 @Component() 装饰器中配置注入器
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  listOfControl: Array<{ id: number; controlInstance: string }> = [];
  loading: boolean = false;

  addField(e?: MouseEvent): void {
    if (e) {
      e.preventDefault();
    }
    const id = this.listOfControl.length > 0 ? this.listOfControl[this.listOfControl.length - 1].id + 1 : 0;

    const control = {
      id,
      controlInstance: `passenger${id}`
    };
    const index = this.listOfControl.push(control);
    this.validateForm.addControl(
      this.listOfControl[index - 1].controlInstance,
      new FormControl(null, Validators.required)
    );
  }

  removeField(i: { id: number; controlInstance: string }, e: MouseEvent): void {
    e.preventDefault();
    if (this.listOfControl.length > 1) {
      const index = this.listOfControl.indexOf(i);
      this.listOfControl.splice(index, 1);
      console.log(this.listOfControl);
      this.validateForm.removeControl(i.controlInstance);
    }
  }

  getFormControl(name: string): AbstractControl {
    return this.validateForm.controls[name];
  }

  async submitForm() {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    if (this.validateForm.status === 'INVALID') return;

    this.loading = true;
    var response = await this.loginService._login(
      this.validateForm.value.userName.trim(),
      this.validateForm.value.password.trim()
    )
    const { access_token, timeout: expires, username: uname } = response
    if (this.loginService.isLoggedIn) {
      window.localStorage.setItem('session', access_token);
      window.localStorage.setItem('uname', uname);
      this.router.navigate([this.loginService.redirectUrl]);
    }

  }

  constructor(private fb: FormBuilder, private router: Router, public loginService: LoginService) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }
}
