import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeatureAComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: FeatureAComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureARoutingModule {}
