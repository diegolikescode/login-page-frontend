import { HttpClientModule } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  readonly API_URL = 'http://localhost:3333'

  constructor(private http: HttpClientModule) { }

  ngOnInit(): void {
  }

}
