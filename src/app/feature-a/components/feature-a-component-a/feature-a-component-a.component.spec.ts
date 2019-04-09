import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureAComponentAComponent } from './feature-a-component-a.component';

describe('FeatureAComponentAComponent', () => {
  let component: FeatureAComponentAComponent;
  let fixture: ComponentFixture<FeatureAComponentAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureAComponentAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureAComponentAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
