import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-register',
  standalone: false,

  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  userRegister!: User;

  constructor() {}

  ngOnInit(): void {
    console.log('ngOnInit is running!');
    this.InitilizeAuthRequest();
    // console.log(this.userRegister); // Check if this gets logged
  }
  register() {
    var errors = [];
    if (this.userRegister.password != this.userRegister.repeatpassword) {
      alert('Password does not match');
    }else {
      errors.push();
    }

    console.log(this.userRegister);
  }
  InitilizeAuthRequest() {
    this.userRegister = {
      id: 0,
      username: '',
      password: '',
      repeatpassword: '',
      email: '',
      phone: '',
    };
    console.log(this.userRegister);
  }
}
