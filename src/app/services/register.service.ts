import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class RegisterService {

  constructor(private http: HttpClient, 
    private router: Router) { }

    register(user: string, code: number) {
        var options = {user: user, code: code}
        return this.http.post(`http://localhost:3000/reg/register`, options)
        .map((res:Response) => 
            res);
    }

    getRoomAttendance(code: string) {
        var options = {params: {code: code}}
        return this.http.get(`http://localhost:3000/reg/attendance`, options)
        .map((res:Response) => 
            res);
    }
}
