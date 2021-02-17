import { Component, OnInit } from '@angular/core'
import WebRequestService from '../shared/services/web-requests.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {
  name = ''
  email = ''
  password = ''

  constructor(private webRequests: WebRequestService, private router: Router) { }

  ngOnInit(): void {
  }

  createUserAccount(): void {
    const name = this.name
    const email = this.email
    const password = this.password
    this.webRequests.createUser('user', { name, email, password })
      .subscribe(() => this.router.navigateByUrl('/login'), err => {
        console.log('FUDEU') // TODO: fix this mess
      })
  }
}
