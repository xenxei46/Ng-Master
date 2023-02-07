import { outputAst } from '@angular/compiler';
import { Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-onchanges-child',
  templateUrl: './onchanges-child.component.html',
  styleUrls: ['./onchanges-child.component.scss']
})
export class OnchangesChildComponent implements OnInit , OnChanges {

  @Input() name!: string;
  @Input() hero!: string;
  @Input() power = '';
  @Input () herolist!:any;

  @Output() messageEvent = new EventEmitter<string>();
  @Output() event:string = '';
  changeLog: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(element: SimpleChanges){
    console.log('Input property changed: ', this.name);
    console.log('ngonchanges called'),
    console.log(element)
  }

  onNameChange(){
    this.messageEvent.emit(this.event)
  }

}
 
