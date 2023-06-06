import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeGuestComponent } from './welcome-guest.component';

describe('WelcomeGuestComponent', () => {
  let component: WelcomeGuestComponent;
  let fixture: ComponentFixture<WelcomeGuestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeGuestComponent]
    });
    fixture = TestBed.createComponent(WelcomeGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
