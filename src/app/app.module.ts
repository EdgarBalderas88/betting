import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
// import { fakeBackendProvider } from './_helpers/index';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { JwtInterceptor } from './_helpers/index';
import { AlertService, UserService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { initializeApp } from 'firebase/app';

const config = {
    apiKey: 'AIzaSyBnsLmc7ENOsc3XKU2YNfQsdsIvlx3o4Vg',
    authDomain: 'betting-center-99b54.firebaseapp.com',
    databaseURL: 'https://betting-center-99b54.firebaseio.com',
    projectId: 'betting-center-99b54',
    storageBucket: 'betting-center-99b54.appspot.com',
    messagingSenderId: '578697249007'
  };

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        routing,
        AngularFireDatabaseModule,
        AngularFireModule.initializeApp(config)
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        UserService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },
        AngularFireAuth
        // provider used to create fake backend
        // fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
