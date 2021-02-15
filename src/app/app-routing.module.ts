import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { FrontPageComponent } from './front-page/front-page.component'
import { LoginPageComponent } from './login-page/login-page.component'

const routes: Routes = [
  { path: '', component: FrontPageComponent },
  { path: 'login', component: LoginPageComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
