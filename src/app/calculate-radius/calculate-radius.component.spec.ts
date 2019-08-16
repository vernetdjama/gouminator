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

  it(`should have as volume 'gouminator'`, () => {
    const radius = 10;
    const volume = (4 / 3) * Math.PI * (radius ** 3);
    expect(volume).toEqual(33510321.638291124);
  });
});
