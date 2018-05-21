import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService, AutentificationServiceService } from '../services/index';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  model: any = {};
  loading = false;
  added = false;

  constructor(
    private router: Router,
        private alertService: AlertService,
        private authenticationService: AutentificationServiceService) { }

  ngOnInit() {}

  add() {
    if(this.model.username && this.model.password) {
      this.authenticationService.addTeacher(this.model.username, this.model.password).subscribe(
        (res:Response)=> {
          this.added = true;
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
