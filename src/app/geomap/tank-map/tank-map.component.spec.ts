import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TankMapComponent } from './tank-map.component';

describe('TankMapComponent', () => {
  let component: TankMapComponent;
  let fixture: ComponentFixture<TankMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TankMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TankMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
