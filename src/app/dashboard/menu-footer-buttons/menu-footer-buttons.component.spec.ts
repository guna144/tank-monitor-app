import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFooterButtonsComponent } from './menu-footer-buttons.component';

describe('MenuFooterButtonsComponent', () => {
  let component: MenuFooterButtonsComponent;
  let fixture: ComponentFixture<MenuFooterButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuFooterButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuFooterButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
