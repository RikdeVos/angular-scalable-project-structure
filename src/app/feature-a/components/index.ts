import { FeatureAComponent } from './feature-a/feature-a.component';
import { FeatureAComponentAComponent } from './feature-a-component-a/feature-a-component-a.component';
import { FeatureAComponentBComponent } from './feature-a-component-b/feature-a-component-b.component';

export const components: any[] = [
  FeatureAComponent,
  FeatureAComponentAComponent,
  FeatureAComponentBComponent
];

export * from './feature-a/feature-a.component';
export * from './feature-a-component-a/feature-a-component-a.component';
export * from './feature-a-component-b/feature-a-component-b.component';
