import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocheckComponent } from './docheck.component';

describe('DocheckComponent', () => {
  let component: DocheckComponent;
  let fixture: ComponentFixture<DocheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
