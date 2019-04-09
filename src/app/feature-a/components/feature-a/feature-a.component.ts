import { Component, OnInit } from '@angular/core';

import { LocalStorageService, AuthService } from '@core/services';
import { environment } from '@env';

@Component({
  selector: 'app-feature-a',
  templateUrl: './feature-a.component.html',
  styleUrls: ['./feature-a.component.sass']
})
export class FeatureAComponent implements OnInit {
  public foo: string;

  constructor(
    private localStorageService: LocalStorageService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.foo = environment.foo;
  }
}
