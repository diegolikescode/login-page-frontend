import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FrontPageComponent } from './front-page/front-page.component'
import { FooterComponent } from './shared/footer/footer.component'
import { ButtonComponent } from './shared/button/button.component'
import { LoginPageComponent } from './login-page/login-page.component'
import { InputButtonComponent } from './shared/input-button/input-button.component'

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    FooterComponent,
    ButtonComponent,
    LoginPageComponent,
    InputButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
