import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { OnChangesComponent } from './on-changes/on-changes.component';
import { OnchangesChildComponent } from './onchanges-child/onchanges-child.component';

import { FormsModule } from '@angular/forms';
import { DocheckComponent } from './docheck/docheck.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LifecycleComponent,
    OnChangesComponent,
    OnchangesChildComponent,
    DocheckComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
