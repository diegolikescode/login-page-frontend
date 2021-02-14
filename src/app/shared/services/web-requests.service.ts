import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

interface LogUser {
  email: string
  password: string
}

interface ShowUser {
  id: string
  name: string
  email: string
}

interface CreateUser {
  id: string
  name: string
  email: string
  old_password?: string
  new_password?: string
}

@Injectable({
  providedIn: 'root'
})
export class WebRequestsService {
  readonly API_URL = 'http://localhost:3333'

  constructor(private http: HttpClient) { }

  createSession(uri: string, userInfo: LogUser) {
    return this.http.post(`${this.API_URL}/${uri}`, userInfo)
  }

  getUser(uri: string, id: string) {
    return this.http.get(`${this.API_URL}/${uri}/${id}`)
  }

  createUser(user: CreateUser) {
    return this.http.post(`${this.API_URL}/`, user)
  }

  updateUser(user: CreateUser) {
    return this.http.put(`${this.API_URL}/`, user)
  }
}
