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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ShowProfileComponent,
    EditProfileComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
