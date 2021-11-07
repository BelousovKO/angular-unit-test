import { Injectable } from '@angular/core';
import {CheckValueService} from "./check-value.service";

@Injectable()
export class SimpleService {

  constructor(private CheckValueService: CheckValueService) {
  }

  sum(arg1: number, arg2?: number): number | undefined {
    if (!arg2) {

      return undefined;
    }

    return arg1 + arg2;
  }

  check(): boolean {

    return this.CheckValueService.check();
  }
}
