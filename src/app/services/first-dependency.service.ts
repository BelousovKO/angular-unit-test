import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstDependencyService {
  defaultValue: string | undefined;

  get defaultString(): string {

    return <string>this.defaultValue;
  }

  constructor() { }

  returnValue(index: number): string {
    const values = ["one", "two", "three"];

    return values[index];
  }

  initValue(): void {
    this.defaultValue = "one";
  }

  initValue2(text: string): void {
    this.defaultValue = "two" + text;
  }
}
