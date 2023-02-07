import { Component } from '@angular/core';


@Component({
  selector: 'app-on-changes',
  templateUrl: './on-changes.component.html',
  styleUrls: ['./on-changes.component.scss']
})

export class OnChangesComponent {
  
   hero = 'Magneta';
   power:string = '';

   herolist = ['midorya']
     
   name = 'Name from onChange parent';
   constructor() { }

   changeMessage(){
    this.name = 'Name changed';
    console.log('clicked');
   }

   onNameChange($event: string){
        // this.herolist = [ 'deku' ];
        this.hero = 'Iron man';
   }
   addHero(name: string): void {
    name = name.trim();
    if (!name) { return; } {
    
        this.herolist.push(this.hero);
      }
  }

}
