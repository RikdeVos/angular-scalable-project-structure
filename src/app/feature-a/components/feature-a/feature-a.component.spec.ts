import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureAComponent } from './feature-a.component';

describe('FeatureAComponent', () => {
  let component: FeatureAComponent;
  let fixture: ComponentFixture<FeatureAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
