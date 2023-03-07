import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-docheck',
  templateUrl: './docheck.component.html',
  styleUrls: ['./docheck.component.scss']
})
export class DocheckComponent implements OnInit, DoCheck {

  number = 0;

  constructor() { }

  ngOnInit(): void {
    
  }
  ngDoCheck(): void {
    console.log(this.number)
  }
  addNumber(){
    this.number++
  }

}
