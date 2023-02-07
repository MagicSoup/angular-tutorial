import {Injectable} from '@angular/core';
import {HttpHeaders} from "@angular/common/http";

import {of} from "rxjs";
import {Observable} from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  private apiContext = 'api/security';  // URL to web api

  constructor() {
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  getAllRoles(): Observable<string[]> {
    return of(['Admin', 'Manager', 'User']);
  }
}
