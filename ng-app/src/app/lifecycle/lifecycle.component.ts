import { Component, OnInit, OnDestroy, Input, SimpleChanges } from '@angular/core';
import { LifecycleService } from './lifecycle.service';
@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit {

  // @Input() name!: string;

  message!:string;
  constructor(private service: LifecycleService,) { }

  ngOnInit(): void {
    // this.message! = this.service.message
    // console.log(this.message)
  }

  // ngOnChanges(){
  //   this.message = `Hello. ${this.name}!`
  // }



  // ngOnDestroy(): void {
  //   console.log('onInit');
  // }

}
