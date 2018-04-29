import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService, AutentificationServiceService } from '../services/index';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  loading = false;

  constructor(
    private router: Router,
        private alertService: AlertService,
        private authenticationService: AutentificationServiceService) { }

  ngOnInit() {}

  register() {
    if(this.model.username && this.model.password) {
      this.authenticationService.register(this.model.username, this.model.password).subscribe(
        (res:Response)=> {
          this.router.navigate(['/app-login'])
        }, (error)=> {
          this.alertService.error("Wrong credentials");
        } 
      );
    } else {
      this.alertService.error("Wrong credentials");
    }

    this.loading = true;
    this.alertService.success('Registration successful', true);
 }

}
