import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import WebRequestService from '../shared/services/web-requests.service'
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements OnInit {
  email = ''
  password = ''

  constructor(private webRequests: WebRequestService, private router: Router) { }

  ngOnInit(): void {
  }

  authenticateUser(): void {
    const email = this.email
    const password = this.password
    this.webRequests.createSession('login', { email, password }).subscribe(response => {
      console.log(response)
      localStorage.setItem('userData', JSON.stringify(response))
      this.router.navigateByUrl('/welcome-page')
    })
  }
}
