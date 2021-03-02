import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient, HttpRequest } from '@angular/common/http'
import { Observable } from 'rxjs'
import UserDTO from '../../shared/dtos/UserDTO'

interface LogUser {
  email: string
  password: string
}

interface CreateUser {
  name: string
  email: string
  password: string
}

@Injectable({
  providedIn: 'root'
})
export default class WebRequestsService {
  readonly API_URL = 'http://localhost:3333'

  constructor(private http: HttpClient, private httpRequest: HttpRequest<any>, private router: Router) { }

  private getHeader(): any {
    const userData = localStorage.getItem('userData')

    if (!userData) {
      return this.router.parseUrl('/login')
    }

    const { token } = JSON.parse(userData)

    const headerRequest = this.httpRequest.clone({
      setHeaders: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Bearer ${token}`
      }
    })

    return headerRequest
  }

  createSession(uri: string, userInfo: LogUser): Observable<object> {
    return this.http.post(`${this.API_URL}/${uri}`, userInfo)
  }

  getUser(uri: string, id: string): Observable<object> {
    return this.http.get<UserDTO>(`${this.API_URL}/${uri}/${id}`)
  }

  createUser(uri: string, user: CreateUser): Observable<object> {
    return this.http.post(`${this.API_URL}/${uri}`, user)
  }

  updateUser(user: CreateUser): Observable<object> {
    return this.http.put(`${this.API_URL}/`, user)
  }

  verifyToken(): any {
    console.log(this.getHeader())
    return this.http.get(`${this.API_URL}/authenticate`, this.getHeader())
  }
}
