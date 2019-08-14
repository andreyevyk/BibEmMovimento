import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from '../services/session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(
    private sessionService: SessionService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkAuthentication(state.url);
  }
  
  checkAuthentication(url: string) {
    const isAuthenticated = this.sessionService.isAuthenticated();

    if (!isAuthenticated && this.router.url !== '/login') {
      this.router.navigateByUrl('/login');
    }

    return isAuthenticated;
  }
}
