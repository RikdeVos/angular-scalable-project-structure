import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import * as fromComponents from './components';

import { FeatureARoutingModule } from './feature-a-routing.module';

@NgModule({
  declarations: [fromComponents.components],
  imports: [CommonModule, SharedModule, FeatureARoutingModule]
})
export class FeatureAModule {}
