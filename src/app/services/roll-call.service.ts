import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class RollCallService {
  code: string;

  constructor(private http: HttpClient, 
    private router: Router) { }

  saveCode(code: string, classroom: string, date: Date){
    var options = {code: code, room: classroom, date: date}
    return this.http.post(`http://localhost:3000/cod/code`, options)
    .map((res:Response) => res);
  }

  getRooms(user){
    var options = {params: {email: user}}
        return this.http.get(`http://localhost:3000/cod/getRooms`, options)
            .map((res:Response) => 
            res);

  }

  getCode(code: string){
    var options = {params: {code: code}}
        return this.http.get(`http://localhost:3000/cod/getCode`, options)
            .map((res:Response) => 
            res);

  }

  getAttendance(room: string) {
    var options = {params: {room: room}}
    return this.http.get(`http://localhost:3000/cod/getAttendance`, options)
        .map((res:Response) => 
        res);
  }

  // PHP API
  getTeachers() {
    return this.http.get(`http://localhost:3000/cod/getTeachers`)
        .map((res:Response) => 
        res);
  }
}
