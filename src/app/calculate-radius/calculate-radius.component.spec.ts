import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateRadiusComponent } from './calculate-radius.component';

describe('CalculateRadiusComponent', () => {
  let component: CalculateRadiusComponent;
  let fixture: ComponentFixture<CalculateRadiusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculateRadiusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateRadiusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
