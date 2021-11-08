import { TestBed } from '@angular/core/testing';

import { TestServiceService } from './test-service.service';
import {FirstDependencyService} from "./first-dependency.service";

describe('TestService', () => {
  let service: TestServiceService;

  const fakeFirstDependencyService = {
    get name(): string { return "";},
    set name(value: string) {}
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: FirstDependencyService, useValue: fakeFirstDependencyService},
        TestServiceService
      ]
    });
    service = TestBed.inject(TestServiceService);
  });

  it('создает экземпляр класса', () => {
    expect(service).toBeTruthy();
  });

  it('метод sayHi возвращает "Hi, Mike!", если в firstDependencyService name === "Mike"', () => {
    spyOnProperty(fakeFirstDependencyService, "name", "get").and.returnValue("Mike");
    const result = service.sayHi();
    expect(result).toBe('Hi, Mike!');
  })

  it('setName вызывает сеттер firstDependencyService name', () => {
    const setterSpy = spyOnProperty(fakeFirstDependencyService, "name", "set").and.callThrough();
    service.setName("Joe");
    expect(setterSpy).toHaveBeenCalledWith("Joe");
  })
});
