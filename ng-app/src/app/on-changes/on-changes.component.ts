import { Component, } from '@angular/core';
@Component({
  selector: 'app-on-changes',
  templateUrl: './on-changes.component.html',
  styleUrls: ['./on-changes.component.scss']
})

export class OnChangesComponent {
  
   course = 'JavaScript';

   courselist = ['Java']
     
   title = 'Onchange test string';

   number:number = 0
   constructor() { }

   changeMessage(){
    this.title = 'Title Changed';
    console.log('clicked');
   }

   onNameChange($event: string){
        // this.herolist = [ 'deku' ];
        this.course = 'Python';
   }
   addCourse(course: string): void {
    course = course.trim();
    if (!course) { return; } {
        this.courselist.push(this.course);
      }
  }

  addNumber($event:any){
    this.number++
  }

}
