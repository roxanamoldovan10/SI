import { AutentificationServiceService } from './../services/authentification-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/index';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  type: any
  loggedin: boolean;
  role: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private AutentificationService: AutentificationServiceService,
    private UserService: UserService) {
      this.loggedin = JSON.parse(localStorage.getItem('currentUser')) ? true:false;
     }

  ngOnInit() {
    this.role = localStorage.getItem('userDetails');
    this.type = this.UserService.getType();
  }

  logout() {
    this.loggedin = this.AutentificationService.logout();
    this.router.navigate(['/app-login']);
  }

  studentsOverview() {
    location.replace("http://localhost/monolith/index.php");
  }

}
