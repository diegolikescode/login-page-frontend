import { Component, OnInit } from '@angular/core'
import UserDataDTO from '../shared/dtos/UserDTO'

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {
  id = ''
  name = ''
  email = ''

  constructor() { }

  ngOnInit(): void {
    const userData = localStorage.getItem('userData')
    if (userData) {
      const userParsed = JSON.parse(userData)
      this.id = userParsed.showUser.id
      this.name = userParsed.showUser.name
      this.email = userParsed.showUser.email
    }
  }
}
