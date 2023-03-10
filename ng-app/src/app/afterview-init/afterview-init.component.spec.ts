import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterviewInitComponent } from './afterview-init.component';

describe('AfterviewInitComponent', () => {
  let component: AfterviewInitComponent;
  let fixture: ComponentFixture<AfterviewInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterviewInitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfterviewInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
