import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user: User = {
    username: '',
    password: '',
    role: 'unknown',
  };
  public getRole(): string {
    return this.user.role;
  }
  constructor(private loginService: LoginService, private router: Router) {}

ngOnInit(): void {
  if (localStorage.getItem('userRole') && localStorage.getItem('userRole') !== 'unknown') {
    this.router.navigate(['/Home']);
  }
}

  login() {
    console.log('login for : user :', this.user);

    this.loginService.login(this.user).subscribe((user) => {
      this.user = user;
      localStorage.setItem('userRole', this.user.role);
      if (localStorage.getItem('userRole') !== 'unknown') {
        this.router.navigate(['/Home']);
      }
    });
  }
}
