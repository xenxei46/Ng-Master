import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterContentCheckedComponent } from './after-content-checked.component';

describe('AfterContentCheckedComponent', () => {
  let component: AfterContentCheckedComponent;
  let fixture: ComponentFixture<AfterContentCheckedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterContentCheckedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfterContentCheckedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
