import { Component, OnInit } from '@angular/core';
import { RollCallService, AlertService, RegisterService } from '../services/index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-present',
  templateUrl: './register-present.component.html',
  styleUrls: ['./register-present.component.css']
})
export class RegisterPresentComponent implements OnInit {
  code: number;
  network: boolean;
  registered: boolean;
  time: boolean;


  

  constructor(
    private rollCallService: RollCallService,
    public registerService: RegisterService,
    private router: Router,
    private alertService: AlertService
  ) { }

  ngOnInit() {
  }

  submit(code) {
    this.checkNetwork();
    this.rollCallService.getCode(code)
    .subscribe(
      (res:any)=> {
        if(res.result.length){
            // OK
          var user = localStorage.getItem('currentUser');
          var today = new Date();
          var date = new Date(res.result[res.result.length-1].date);
          // date when the code has been generated + 60 min
          var timer = today.getTime() <= (date.getTime() + 60*60000);

          if(timer){
            this.registerService.register(user, code)
            .subscribe(
              (res:Response)=> {
                this.registered = true;
                this.time = true;
              }, (error)=> {
                this.alertService.error("Wrong credentials");
                this.registered = false;
                this.time = true;
              } 
            );
          } else {
            this.time = false;
            this.registered = undefined;
          }
        } else {
          this.registered = false;
          this.time = true;
        }
       
      }, (error)=> {
        this.registered = false;
        this.alertService.error("Wrong credentials");
      } 
    );
  }

  checkNetwork() {
    
  }
}
