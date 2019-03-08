import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ContactComponent} from './contact/contact.component';
import {ResourcesComponent} from './resources/resources.component';
import {AwardsComponent} from './awards/awards.component';
import {ProgramsComponent} from './programs/programs.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {NewsComponent} from './news/news.component';


const routes: Routes = [
  {
    path: 'iletisim',
    component: ContactComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'kaynaklarimiz',
    component: ResourcesComponent
  },
  {
    path: 'odullerimiz',
    component: AwardsComponent
  },
  {
    path: 'programlar',
    component: ProgramsComponent
  },
  {
    path: 'hakkimizda',
    component: AboutComponent
  },
  {
    path: 'haber',
    component: NewsComponent
  },
  {
    path: '',
    component: HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
