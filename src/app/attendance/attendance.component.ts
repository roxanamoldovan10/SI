import { AlertService } from './../services/alert-service.service';
import { AutentificationServiceService } from './../services/authentification-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService, RollCallService, RegisterService } from '../services/index';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  rooms: any;
  user: any;
  code: string;
  students: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private rollCallService: RollCallService,
    private alertService: AlertService,
    public registerService: RegisterService,) {}

  ngOnInit() {
    this.getClasses();
  }

  getClasses() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    this.rollCallService.getRooms(this.user)
    .subscribe(
      (res:any)=> {
        this.rooms = res.result;
      }, (error)=> {
        this.alertService.error("Wrong credentials");
      } 
    );

  }

  getStudents(room){
    this.rollCallService.getAttendance(room)
    .subscribe(
      (res:any)=> {
        this.code = res.result[res.result.length-1].code;
        this.registerService.getRoomAttendance(this.code)
        .subscribe(
          (res:any)=> {
              this.students = res.result;
          }, (error)=> {
            this.alertService.error("Wrong credentials");
          } 
        );

      }, (error)=> {
        this.alertService.error("Wrong credentials");
      } 
    );
  }

  

}
