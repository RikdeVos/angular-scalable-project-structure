import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureAComponentBComponent } from './feature-a-component-b.component';

describe('FeatureAComponentBComponent', () => {
  let component: FeatureAComponentBComponent;
  let fixture: ComponentFixture<FeatureAComponentBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureAComponentBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureAComponentBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
