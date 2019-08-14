import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { StudentPoetryComponent } from './pages/student-poetry/student-poetry.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { InfoComponent } from './pages/info/info.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterPageComponent } from './overhead/footer-page/footer-page.component';
import { HeaderPageComponent } from './overhead/header-page/header-page.component';
import { OpenSiteComponent } from './pages/home/components/open-site/open-site.component';
import { AmarelinhoComponent } from './pages/amarelinho/amarelinho.component';
import { GenericCardComponent } from './components/generic-card/generic-card.component';
import { InputFilterComponent } from './components/input-filter/input-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/cms/login/login.component';
import { ListContentComponent } from './pages/cms/list-content/list-content.component';
import { TableListComponent } from './components/table-list/table-list.component';
import { SaveContentComponent } from './pages/cms/save-content/save-content.component';
import { FormContentComponent } from './components/form-content/form-content.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxNotifierModule } from 'ngx-notifier';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatProgressSpinnerModule } from '@angular/material';
import { PageGenericComponent } from './components/page-generic/page-generic.component';
import { ModalFormImagesComponent } from './components/modal-form-images/modal-form-images.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgxGalleryModule } from 'ngx-gallery';
import { TagInputModule } from 'ngx-chips';

@NgModule({
   declarations: [
      ModalFormImagesComponent,
      AppComponent,
      FooterPageComponent,
      HeaderPageComponent,
      PageGenericComponent,
      HomeComponent,
      StudentPoetryComponent,
      GalleryComponent,
      InfoComponent,
      AmarelinhoComponent,
      OpenSiteComponent,
      InputFilterComponent,
      GenericCardComponent,
      LoginComponent,
      ListContentComponent,
      TableListComponent,
      SaveContentComponent,
      FormContentComponent,
      ContactComponent
   ],
   imports: [
      TagInputModule,
      NgbModule,
      NgxGalleryModule,
      MDBBootstrapModule.forRoot(),
      HttpClientModule,
      BrowserModule,
      BrowserAnimationsModule,
      MatProgressSpinnerModule,
      FormsModule,
      ReactiveFormsModule,
      AppRoutingModule,
      NgxNotifierModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
