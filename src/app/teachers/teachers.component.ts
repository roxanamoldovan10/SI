import { Component, OnInit } from '@angular/core';
import { RollCallService, AlertService, RegisterService } from '../services/index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  constructor(
    private rollCallService: RollCallService,
    private router: Router
  ) { }

  ngOnInit() {}

  submit() {
    this.rollCallService.getTeachers()
    .subscribe(
      (res:any)=> {
        res
      }, (error)=> {
        error;
      } 
    );
  }
}
