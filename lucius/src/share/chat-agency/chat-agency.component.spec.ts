import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatAgencyComponent } from './chat-agency.component';

describe('ChatAgencyComponent', () => {
  let component: ChatAgencyComponent;
  let fixture: ComponentFixture<ChatAgencyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatAgencyComponent]
    });
    fixture = TestBed.createComponent(ChatAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
