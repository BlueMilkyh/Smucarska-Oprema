import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-register',
  standalone: false,

  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {

  userRegister!: User;
  

  constructor(private router: Router) {
    this.InitilizeAuthRequest();
    
  }

  InitilizeAuthRequest(){
    this.userRegister = { 
      id: 0,
      username: "",
      password: "",
      email: "",
      phone: ""
    }
  }
}
