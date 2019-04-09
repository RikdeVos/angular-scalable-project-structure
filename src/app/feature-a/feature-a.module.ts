import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureARoutingModule } from './feature-a-routing.module';
import { SharedModule } from '../shared/shared.module';

import * as fromComponents from './components';

@NgModule({
  declarations: [fromComponents.components],
  imports: [CommonModule, SharedModule, FeatureARoutingModule]
})
export class FeatureAModule {}
