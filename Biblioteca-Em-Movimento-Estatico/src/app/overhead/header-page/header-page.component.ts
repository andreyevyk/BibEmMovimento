import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.css']
})
export class HeaderPageComponent implements OnInit {

  constructor(
    private sessionService: SessionService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  isAuthenticated() {
    return this.sessionService.isAuthenticated();
  }

  logout() {
    this.sessionService.logout();
    this.router.navigate(["/login"]);
  }

}
