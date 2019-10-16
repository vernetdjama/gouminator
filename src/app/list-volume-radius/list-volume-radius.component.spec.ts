import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVolumeRadiusComponent } from './list-volume-radius.component';

describe('ListVolumeRadiusComponent', () => {
  let component: ListVolumeRadiusComponent;
  let fixture: ComponentFixture<ListVolumeRadiusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVolumeRadiusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVolumeRadiusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
