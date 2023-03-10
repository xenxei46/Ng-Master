import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-after-content-init',
  templateUrl: './after-content-init.component.html',
  styleUrls: ['./after-content-init.component.scss']
})
export class AfterContentInitComponent implements OnInit {
  total:number = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

  
}
