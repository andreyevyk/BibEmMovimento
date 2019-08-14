import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StudentPoetryComponent } from './pages/student-poetry/student-poetry.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { InfoComponent } from './pages/info/info.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AmarelinhoComponent } from './pages/amarelinho/amarelinho.component';
import { LoginComponent } from './pages/cms/login/login.component';
import { ListContentComponent } from './pages/cms/list-content/list-content.component';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthGuard } from './guards/auth.guard';
import { SaveContentComponent } from './pages/cms/save-content/save-content.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'studant-poetry',
    component: StudentPoetryComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'info',
    component: InfoComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'amarelinho',
    component: AmarelinhoComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cms/list',
    component: ListContentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'cms/save',
    component: SaveContentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'cms/save/:id',
    component: SaveContentComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
