import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstDependencyService {
  defaultValue: string | undefined;
  private  nameValue: string;
  age: number;

  get name(): string {

    return this.nameValue;
  }

  set name(value: string) {
    this.nameValue = value;
  }

  constructor() {
    this.age = 5;
    this.nameValue = "Mike";
  }

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

  doSomething(): void {
    console.log("something");
  }
}
