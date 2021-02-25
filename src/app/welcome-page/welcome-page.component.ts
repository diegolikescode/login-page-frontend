import { Component, OnInit } from '@angular/core'
import UserDataDTO from '../shared/dtos/UserDTO'

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {
  id = ''
  userName = ''
  email = ''

  constructor() { }

  ngOnInit(): void {
    const userData = localStorage.getItem('userData')

    if (userData) {
      const userParsed: UserDataDTO = JSON.parse(userData)
      this.id = userParsed.id
      this.userName = userParsed.name
      this.email = userParsed.email
    }
  }

}
