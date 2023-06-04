import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BriefPreviousPostComponent } from './brief-previous-post.component';

describe('BriefPreviousPostComponent', () => {
  let component: BriefPreviousPostComponent;
  let fixture: ComponentFixture<BriefPreviousPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BriefPreviousPostComponent]
    });
    fixture = TestBed.createComponent(BriefPreviousPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
