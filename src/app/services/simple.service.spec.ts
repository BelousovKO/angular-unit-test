import {SimpleService} from './simple.service';
import {CheckValueService} from "./check-value.service";
import {TestBed} from "@angular/core/testing";

describe('SimpleService', () => {
  let service: SimpleService;
  const fakeCheckValueService = {check: () => true}

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SimpleService,
        {provide: CheckValueService, useValue: fakeCheckValueService}
      ]
    });

    service = TestBed.inject(SimpleService);
  });

  it('создает экземпляр класса', () => {
    expect(service).toBeTruthy();
  });

  it('метод sum суммирует два числа', () => {
    const sum = service.sum(2, 3)
    expect(sum).toBe(5);
  });

  it('метод sum возвращает undefined если второй аргумент не передан', () => {
    const sum = service.sum(2)
    expect(sum).toBeUndefined();
  })

  it('в методе check возвращает значение метода check из CheckValueService', () => {
    const value = service.check();
    expect(value).toBeTruthy();
  })
});
