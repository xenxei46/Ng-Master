import { AfterContentInit, AfterContentChecked, Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-after-content-checked',
  templateUrl: './after-content-checked.component.html',
  styleUrls: ['./after-content-checked.component.scss']
})
export class AfterContentCheckedComponent implements OnInit, AfterContentInit, AfterContentChecked {

  total:number = 0;
  course = 'JavaScript';
 
   
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    console.log('content init')
 }

 ngAfterContentChecked(): void {
   console.log('content checked',this.total, this.course)
 }

 addCourse(){
  this.total++

 }



}
