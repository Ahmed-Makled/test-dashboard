import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './component/home/home.component';
import { UsersComponent } from './component/users/users.component';
import { ErrorComponent } from './component/error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { ServicesService } from './component/services/apiserve/services.service';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { UserDetailsComponent } from './component/user-details/user-details.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
// import { AngularFirestoreModule } from '@angular/fire/firestore';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthService } from './component/services/authoServices/auth.service';
import {RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavAsideComponent } from './component/nav-aside/nav-aside.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AllPostsComponent } from './component/posts/all-posts/all-posts.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchComponent } from './component/search/search.component';
import { ProfileComponent } from './component/profile/profile.component';
import { UserInfoComponent } from './component/user-info/user-info.component';
import { FilterComponent } from './component/filter/filter.component';
import { TransDataPipe } from './component/pipe/trans-data.pipe';
import { DashboardComponent } from './component/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavAsideComponent,
    NavbarComponent,
    HomeComponent,
    UsersComponent,
    ErrorComponent,
    UserDetailsComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    AllPostsComponent,
    SearchComponent,
    ProfileComponent,
    UserInfoComponent,
    FilterComponent,
    TransDataPipe,
    DashboardComponent,
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule,
    // HttpClientModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgxPaginationModule
    

    ],
  providers: [
    AngularFireModule,//add
    AuthService,
    ServicesService

  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
