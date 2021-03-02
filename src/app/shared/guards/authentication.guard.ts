import { Injectable } from '@angular/core'
import { CanActivate, UrlTree } from '@angular/router'
import { Observable } from 'rxjs'
import { Router } from '@angular/router'
import WebRequestsService from '../services/web-requests.service'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private router: Router, private webRequest: WebRequestsService) { }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const userData = localStorage.getItem('userData')
    if (!userData) {
      return this.router.parseUrl('/login')
    }

    const verification = this.webRequest.verifyToken()
    console.log('verification', verification)

    if (verification) {
      return true
    }
    return this.router.parseUrl('/login')
  }
}
