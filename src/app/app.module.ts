import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { WelcomeComponent } from './welcome/welcome.component';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { AnimalsComponent } from './animals/animals.component';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AdminComponent } from './admin/admin.component';
// export const firebaseConfig = {
//     apiKey: "AIzaSyDagauKsgzFwCwSkeARbO9fEWQ48LYA5Zo",
//     authDomain: "chatapp-872df.firebaseapp.com",
//     databaseURL: "https://chatapp-872df.firebaseio.com",
//     projectId: "chatapp-872df",
//     storageBucket: "",
//     messagingSenderId: "201357493249"
//   };
export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AnimalsComponent,
    AnimalDetailComponent,
    AdminComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
