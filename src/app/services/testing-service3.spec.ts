import {TestingService} from "./testing.service";
import {TestBed} from "@angular/core/testing";
import {FirstDependencyService} from "./first-dependency.service";

describe("TestingService - 3", () => {
  let service: TestingService;
  let firstDependency: FirstDependencyService;

  let stringValue: any;

  const fakeFirstDependencyService = jasmine.createSpyObj(["initValue", "returnValue", "initValue2"])

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestingService,
        { provide: FirstDependencyService, useValue: fakeFirstDependencyService}
      ]
    });

    stringValue = undefined;
    service = TestBed.inject(TestingService);
    firstDependency = TestBed.inject(FirstDependencyService);
    fakeFirstDependencyService.returnValue.and.returnValue("two");
    fakeFirstDependencyService.initValue2.calls.reset();
  });

  it("возвращает значение массива по указанному индексу", () => {
    stringValue = "two"
    const result = service.getValue(1);
    expect(result).toBe("two");
  });

  it("возвращает значение массива по указанному индексу", () => {
    fakeFirstDependencyService.returnValue.and.returnValue("one");
    const result = service.getValue(1);
    expect(result).toBe("one");
  });

  it("метод sayHi вызывает метод initValue2", () => {
    service.sayHi("?");
    expect(fakeFirstDependencyService.initValue2).toHaveBeenCalled();
    expect(fakeFirstDependencyService.initValue2).toHaveBeenCalledTimes(1);
    expect(fakeFirstDependencyService.initValue2).toHaveBeenCalledWith("?")
  });
});
