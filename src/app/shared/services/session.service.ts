import { Injectable } from '@angular/core'
import LoginDTO from '../dtos/LoginDTO'
import WebRequestsService from './web-requests.service'

@Injectable({
  providedIn: 'root'
})
export default class SessionService {

  constructor(private webRequestsService: WebRequestsService) { }

  createSession({ email, password }: LoginDTO) {
    return this.webRequestsService.createSession('login', { email, password })
  }
}
