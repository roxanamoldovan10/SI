import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService, AutentificationServiceService } from '../services/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;
  isAuthenticated:boolean;

  constructor(
    private router: Router,
    private authenticationService: AutentificationServiceService,
    private alertService: AlertService
  ) {
    this.isAuthenticated = false;
   }

  ngOnInit() {
    this.authenticationService.logout();
  }

  login() {
    if(this.model.username && this.model.password) {
      this.authenticationService.login(this.model.username, this.model.password).subscribe(
        (res:Response)=> {
          this.router.navigate(['/app-dashboard'])
        }, (error)=> {
          this.alertService.error("Wrong credentials");
        } 
      );
    } else {
      this.alertService.error("Wrong credentials");
    }
  }

}
