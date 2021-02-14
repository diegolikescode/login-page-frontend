import { Injectable } from '@angular/core'
import { WebRequestsService } from './web-requests.service'

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private webRequestsService: WebRequestsService) { }

  createSession(email: string, password: string) {
    this.webRequestsService.createSession('/login', { email, password })
  }
}
