import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms/';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
//service
import { DataDbService } from '../app/services/data-db.service';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule
     
  ],
  providers: [
    DataDbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
