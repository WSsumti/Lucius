import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarcontentComponent } from './navbarcontent.component';

describe('NavbarcontentComponent', () => {
  let component: NavbarcontentComponent;
  let fixture: ComponentFixture<NavbarcontentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarcontentComponent]
    });
    fixture = TestBed.createComponent(NavbarcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
