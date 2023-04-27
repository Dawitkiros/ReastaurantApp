import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements DoCheck {
  display = true;
  currentPathName = '/';
  isLoggedIn = localStorage.getItem('userRole') ? true : false;
  
  constructor(private router : Router){}
  
  ngDoCheck(): void {
    console.log('inside DoCheck');
    console.log(this.currentPathName);
    
    if (this.currentPathName === '/Error') {
      this.display = false;
    } else {
      this.display = true;
    }
    this.isLoggedIn = localStorage.getItem('userRole') ? true : false;
    // this.ngOnInit();
  }
  ngOnInit() {
    this.currentPathName = window.location.pathname;
    if (window.location.pathname === '/Error') {
      this.display = false;
    }
  }
  handleLogin() {
    if (localStorage.getItem('userRole')) {
      localStorage.removeItem('userRole');
      this.router.navigate(['/Login']);
    }
  }
}
