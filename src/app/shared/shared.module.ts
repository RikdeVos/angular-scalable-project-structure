import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonAComponent } from './button-a/button-a.component';
import { ButtonBComponent } from './button-b/button-b.component';

@NgModule({
  declarations: [ButtonAComponent, ButtonBComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
