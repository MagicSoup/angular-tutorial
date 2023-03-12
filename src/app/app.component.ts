import {Component, OnInit} from '@angular/core';

import {SecurityService} from './security/security.service';

import {Observable} from "rxjs/internal/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-tutorial';
  public roles$!: Observable<string[]>;

  constructor(private securityService: SecurityService) {}

  ngOnInit(): void {
    this.roles$ = this.securityService.getAllRoles();
  }
}
