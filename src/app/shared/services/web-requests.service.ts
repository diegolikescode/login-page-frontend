import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

interface ShowUser {
  id: string
  name: string
  email: string
}

interface CreateUser {
  id: string
  name: string
  email: string
  password: string
}

export class WebRequestsService {
  readonly API_URL = 'http://localhost:3333'

  constructor(private http: HttpClient) { }

  getUser(uri: string, id: string) {
    return this.http.get(`${this.API_URL}/${uri}/${id}`)
  }

  createUser(user: CreateUser) {
    return this.http.post(`${this.API_URL}/`, user)
  }

  updateUser(user: CreateUser) {
    return this.http.post(`${this.API_URL}/`, user)
  }
}
