import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FrontPageComponent } from './front-page/front-page.component'
import { FooterComponent } from './shared/footer/footer.component'
import { ButtonComponent } from './shared/button/button.component'
import { LoginPageComponent } from './login-page/login-page.component'
import { FormsModule } from '@angular/forms';
import { CreateAccountComponent } from './create-account/create-account.component'

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    FooterComponent,
    ButtonComponent,
    LoginPageComponent,
    CreateAccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
