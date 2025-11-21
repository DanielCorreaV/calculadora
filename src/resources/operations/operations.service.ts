import { Injectable } from '@nestjs/common';
import { CreateOperationDto } from './dto/create-operation.dto';

@Injectable()
export class OperationsService {
  sum(opt: CreateOperationDto) {
    return opt.num1 + opt.num2;
  }

  res(opt: CreateOperationDto) {
    return opt.num1 - opt.num2;
  }

  mul(opt: CreateOperationDto) {
    return opt.num1 * opt.num2;
  }

  div(opt: CreateOperationDto): number | string {
    if (opt.num2 === 0) {
      return 'Error, division entre cero.';
    }
    return opt.num1 / opt.num2;
  }
}
