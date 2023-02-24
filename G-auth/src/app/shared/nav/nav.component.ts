import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, HostListener } from '@angular/core';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  animations: [
    trigger('slideInOut', [
        state(
            'in',
            style({
                transform: 'translate3d(0,0,0)',
            })
        ),
        state(
            'out',
            style({
                transform: 'translate3d(100%, 0, 0)',
            })
        ),
        transition('in => out', animate('800ms ease-in-out')),
        transition('out => in', animate('800ms ease-in-out')),
        transition('out => in', animate('800ms fade-in-out')),
    ]),
    trigger('rotate', [
        transition(':enter', [
            animate(
                '1000ms',
                keyframes([
                    style({ transform: 'rotate(0deg)', offset: '0' }),
                    style({ transform: 'rotate(2turn)', offset: '1' }),
                ])
            ),
        ]),
    ]),
],
})
export class NavComponent implements OnInit {
  menuState: string = 'out';
  toggleMenu() {
      this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }

  constructor() {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}

  //hide navbar on mobile
  showMenu = false;
  //openMenu = false;

  //Click to open
  //toggleOpen(){
  //this.openMenu = !this.openMenu;
  //}
  //Scroll up
  header_variable = false;
  scroll_open = false;
//   @HostListener('document:scroll')
//   scrollfunction() {
//       if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
//           this.header_variable = true;
//           this.scroll_open = true;
//       } else {
//           this.header_variable = false;
//           this.scroll_open = false;
//       }
//   }

}
