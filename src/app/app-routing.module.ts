import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { CreateAccountComponent } from './create-account/create-account.component'
import { FrontPageComponent } from './front-page/front-page.component'
import { LoginPageComponent } from './login-page/login-page.component'

const routes: Routes = [
  { path: '', component: FrontPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'create-account', component: CreateAccountComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
