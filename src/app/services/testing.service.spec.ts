import {TestingService} from "./testing.service";
import {TestBed} from "@angular/core/testing";
import {FirstDependencyService} from "./first-dependency.service";

describe("TestingService", () => {
  let service: TestingService;
  let firstDependency: FirstDependencyService;
  let firstDependencyReturnValueSpy: jasmine.Spy<(index: number) => string>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestingService]
    });

    service = TestBed.inject(TestingService);
    firstDependency = TestBed.inject(FirstDependencyService);
    firstDependencyReturnValueSpy = spyOn(firstDependency, "returnValue").and.returnValue("two");
  });

  it('создает экземпляр класса', () => {
    expect(service).toBeTruthy();
  });

  it('возвращает значение массива по указанному индексу - оригинальный метод', () => {
    const value = service.getValue(1);
    expect(value).toBe("two");
  });

  it('возвращает значение массива по указанному индексу - spyOn and callThogh', () => {
    firstDependencyReturnValueSpy.and.callThrough();
    const value = service.getValue(0);
    expect(value).toBe("one");
  });

  it('возвращает значение массива по указанному индексу - spyOn and returnValue', () => {
    const value = service.getValue(1);
    expect(value).toBe("two");
  });

  it('возвращает значение массива по указанному индексу - spyOn and callFake', () => {
    firstDependencyReturnValueSpy.and.callFake(() => "three")
    const value = service.getValue(2);
    expect(value).toBe("three");
  });

  it('возвращает значение массива по индексу получаемому из getIndex', () => {
    firstDependencyReturnValueSpy.and.returnValue("three");
    const value = service.getValue(service.getIndex());
    expect(value).toBe("three");
  });
});
