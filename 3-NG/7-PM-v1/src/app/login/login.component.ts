import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  status = ''
  constructor() { }

  ngOnInit() {
  }

  handleLogin() {
    //..
    sessionStorage.setItem('access-token', "ada4s54sd675sd587o56sda58d4")
    this.status = "Logged in..";
  }
}
