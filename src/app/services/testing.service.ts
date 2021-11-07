import { Injectable } from '@angular/core';
import {FirstDependencyService} from "./first-dependency.service";

@Injectable({
  providedIn: 'root'
})
export class TestingService {
  private firstDependencyService: FirstDependencyService;

  constructor(firstDependencyService: FirstDependencyService) {
    this.firstDependencyService = firstDependencyService;
    this.firstDependencyService.initValue();
  }

  getValue(index: number): string {

    return this.firstDependencyService.returnValue(index);
  }

  getIndex(): number {

    return 2;
  }
}
