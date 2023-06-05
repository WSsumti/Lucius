import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentComponent } from './maincontent.component';

describe('MaincontentComponent', () => {
  let component: MainContentComponent;
  let fixture: ComponentFixture<MainContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainContentComponent],
    });
    fixture = TestBed.createComponent(MainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
