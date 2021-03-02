import { Component, OnInit } from '@angular/core'

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
      const { showUser } = JSON.parse(userData)
      this.id = showUser.id
      this.name = showUser.name
      this.email = showUser.email
    }
  }
}
