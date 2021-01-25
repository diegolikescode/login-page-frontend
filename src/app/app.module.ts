import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FrontPageComponent } from './front-page/front-page.component'
import { FooterComponent } from './shared/footer/footer.component'
import { ButtonComponent } from './shared/button/button.component'

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    FooterComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
