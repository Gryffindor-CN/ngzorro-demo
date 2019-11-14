import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  @Input() isCollapsed: boolean;
  @Output() triggle = new EventEmitter();

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
  }

  get isLoggedInState(): boolean {
    return this.loginService.isLoggedIn;
  }

  get username(): string {
    return this.loginService.username;
  }

  doClick() {
    console.log(9);
  }

  ngOnInit() {
  }

}
