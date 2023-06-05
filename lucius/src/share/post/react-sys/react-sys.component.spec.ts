import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactSysComponent } from './react-sys.component';

describe('ReactSysComponent', () => {
  let component: ReactSysComponent;
  let fixture: ComponentFixture<ReactSysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactSysComponent]
    });
    fixture = TestBed.createComponent(ReactSysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
