import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonBComponent } from './button-b.component';

describe('ButtonBComponent', () => {
  let component: ButtonBComponent;
  let fixture: ComponentFixture<ButtonBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
