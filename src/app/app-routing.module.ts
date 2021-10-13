import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { VideossComponent } from './videoss/videoss.component';
import { CategoryComponent } from './category/category.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { UniversityComponent } from './university/university.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", component: MainHomeComponent},
  {path: "navbar", component: NavbarComponent},
  {path: "home", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "university", component: UniversityComponent},
  {path: "blog", component: BlogComponent},
  {path: "contact", component: ContactComponent},
  {path: "category", component: CategoryComponent},
  {path: "videos", component: VideossComponent},
  {path: "profile", component: ProfileComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
