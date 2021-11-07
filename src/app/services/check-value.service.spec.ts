import {CheckValueService} from "./check-value.service";

describe('CheckValueService', () => {
  let service: CheckValueService;

  beforeEach(() => {
    service = new CheckValueService();
  });

  it('создает экземпляр сервиса', () => {
    expect(service).toBeTruthy();
  });

  it('метод check возвращает true', () => {
    const check = service.check();
    expect(check).toBeTruthy();
  })
})

