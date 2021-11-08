import { Injectable } from '@angular/core';
import {FirstDependencyService} from "./first-dependency.service";

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  constructor(private firstDependencyService: FirstDependencyService) { }

  sayHi(): string {
    const name = this.firstDependencyService.name;

    if (name === "Mike") {

      return "Hi, Mike!";
    } else {

      return "Hi, stranger!";
    }
  }

  setName(value: string): void {
    this.firstDependencyService.name = value;
  }

  returnAge(): number {

    return this.firstDependencyService.age;
  }
}
