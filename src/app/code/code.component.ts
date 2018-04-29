import { Component, OnInit } from '@angular/core';
import { RollCallService, AlertService } from '../services/index';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {
  dateObj = new Date();
  code: string;
  rooms: any;
  user: any;

  constructor(
    private rollCallService: RollCallService,
    private alertService: AlertService
  ) { }

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

  generate(event) {
    this.code = (Math.floor(Math.random() * Math.floor(1000))).toString();
    this.rollCallService.saveCode(this.code, event, this.dateObj)
      .subscribe(
        (res:Response)=> {
          res
        }, (error)=> {
          this.alertService.error("Wrong credentials");
        } 
      );
    // this code should be saved in the db
  }

}
