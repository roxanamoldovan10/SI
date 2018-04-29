import { Component, OnInit } from '@angular/core';
import { AutentificationServiceService } from './services/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAuthentificated: boolean;

  constructor(
    private authenticationService: AutentificationServiceService
  ) {}


  ngOnInit() {} 
}
