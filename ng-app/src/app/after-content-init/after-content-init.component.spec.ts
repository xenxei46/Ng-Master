import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterContentInitComponent } from './after-content-init.component';

describe('AfterContentInitComponent', () => {
  let component: AfterContentInitComponent;
  let fixture: ComponentFixture<AfterContentInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterContentInitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfterContentInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
