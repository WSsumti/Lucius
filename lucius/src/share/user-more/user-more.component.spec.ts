import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMoreComponent } from './user-more.component';

describe('UserMoreComponent', () => {
  let component: UserMoreComponent;
  let fixture: ComponentFixture<UserMoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserMoreComponent]
    });
    fixture = TestBed.createComponent(UserMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
