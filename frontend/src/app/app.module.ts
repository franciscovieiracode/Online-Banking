import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/landing-page/header/header.component';
import { FooterComponent } from './components/landing-page/footer/footer.component';
import { ShowProfileComponent } from './components/profile/show-profile/show-profile.component';
import { EditProfileComponent } from './components/profile/edit-profile/edit-profile.component';
import { HomePageComponent } from './components/landing-page/home-page/home-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './components/info/about/about.component';
import { FaqComponent } from './components/info/faq/faq.component';
import { GetStartedComponent } from './components/info/get-started/get-started.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginStatusComponent } from './components/auth/login-status/login-status.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorInterceptor } from './interceptors/auth-interceptor.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ShowProfileComponent,
    EditProfileComponent,
    HomePageComponent,
    AboutComponent,
    FaqComponent,
    GetStartedComponent,
    RegisterComponent,
    LoginStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoginStatusComponent,{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
