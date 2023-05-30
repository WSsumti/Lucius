import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarlogoComponent } from './navbarlogo.component';

describe('NavbarlogoComponent', () => {
  let component: NavbarlogoComponent;
  let fixture: ComponentFixture<NavbarlogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarlogoComponent]
    });
    fixture = TestBed.createComponent(NavbarlogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
