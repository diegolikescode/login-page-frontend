import { Component, OnInit } from '@angular/core'
import LoginDTO from '../shared/dtos/LoginDTO'
import SessionService from '../shared/services/session.service'
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements OnInit {
  constructor(private userServices: SessionService) { }

  ngOnInit(): void {
  }

  authenticateUser({ email, password }: LoginDTO): void {
    this.userServices.createSession({ email, password }).subscribe(response => {
      console.log(response)
    })
  }
}
