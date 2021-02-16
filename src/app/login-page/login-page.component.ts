import { Component, OnInit } from '@angular/core'
import SessionService from '../shared/services/session.service'
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements OnInit {
  email = ''
  password = ''

  constructor(private userServices: SessionService) { }

  ngOnInit(): void {
  }

  authenticateUser(): void {
    const email = this.email
    const password = this.password
    this.userServices.createSession({ email, password }).subscribe(response => {
      console.log(response)
    })
  }
}
