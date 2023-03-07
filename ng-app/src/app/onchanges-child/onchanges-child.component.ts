
import { Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, Output, DoCheck } from '@angular/core';

@Component({
  selector: 'app-onchanges-child',
  templateUrl: './onchanges-child.component.html',
  styleUrls: ['./onchanges-child.component.scss']
})
export class OnchangesChildComponent implements OnInit , OnChanges, DoCheck {

  @Input() number!:number;
  @Input() title!: string;
  @Input() course!: string;
 
  @Input () courselist!:any;

  @Output() messageEvent = new EventEmitter<string>();
  @Output() event:string = '';

  @Output() incrementEvent = new EventEmitter<number>();
  @Output() increment:number = 0;
  changeLog: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    console.log(this.number)
  }

  ngOnChanges(element: SimpleChanges){
    // console.log('Input property changed: ', this.title);
    // console.log('ngonchanges called'),
    // console.log(element)
  }

  onChangeCourse(){
    this.messageEvent.emit(this.event)
  }

  addNumber($event:MouseEvent){
    this.incrementEvent.emit(this.increment)
  }

}
 
