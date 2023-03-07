import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { InputComponent } from './shared/input/input.component';
import { NavComponent } from './shared/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { UserdetailsComponent } from './user/userdetails/userdetails.component';
// import { formsmodul}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InputComponent,
    NavComponent,
    UserdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ToastrModule.forRoot(),
    
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
