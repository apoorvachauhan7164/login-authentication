// Import Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { AngularFireModule } from '@angular/fire'; // Firebase Module
import { AngularFireAuth } from '@angular/fire/auth'; // Firebase Authorization Module
import { FlashMessagesModule } from 'angular2-flash-messages'; // Flash Message Module

// Import Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { SignComponent } from './component/sign/sign.component';
import { ProfileComponent } from './component/profile/profile.component';
import { environment } from '../environments/environment';

// Import Services
import { MyserviceService } from './my-service.service';
import { AuthGuard } from './auth.guard';
import { SecuredGuard} from './secured.guard';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent, canActivate: [SecuredGuard]},
  {path: 'register', component: SignComponent, canActivate: [SecuredGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]}
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    SignComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    FlashMessagesModule.forRoot()
  ],
  providers: [AuthGuard, MyserviceService, AngularFireAuth, SecuredGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
