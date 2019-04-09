import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() {
    console.log('Hello from LocalStorageService');
  }
}
