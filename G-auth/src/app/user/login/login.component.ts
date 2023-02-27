import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  credentials = {

    ActivePassword: '',
    password: '',
    // otp: ''
  }
  constructor( private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  login(){
   window.alert('OTP expired');
  //  this.toastr.success('Hello world!', 'Toastr fun!');
  }
}
