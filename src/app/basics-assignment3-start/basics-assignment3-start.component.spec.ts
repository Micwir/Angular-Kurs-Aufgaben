import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicsAssignment3StartComponent } from './basics-assignment3-start.component';

describe('BasicsAssignment3StartComponent', () => {
  let component: BasicsAssignment3StartComponent;
  let fixture: ComponentFixture<BasicsAssignment3StartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicsAssignment3StartComponent]
    });
    fixture = TestBed.createComponent(BasicsAssignment3StartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
