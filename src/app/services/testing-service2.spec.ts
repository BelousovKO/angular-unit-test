import {TestingService} from "./testing.service";
import {TestBed} from "@angular/core/testing";
import {FirstDependencyService} from "./first-dependency.service";

describe("TestingService - 2", () => {
  let service: TestingService;
  let firstDependency: FirstDependencyService;

  let stringValue: any;

  const fakeFirstDependencyService = {
    returnValue: jasmine.createSpy("returnValue"),
    initValue: jasmine.createSpy("initValue"),
    initValue2: jasmine.createSpy("initValue2")
  };

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
});
