import { OperationsService } from './operations.service';
import { CreateOperationDto } from './dto/create-operation.dto';

describe('OperationsService', () => {
  let service: OperationsService;

  beforeEach(() => {
    service = new OperationsService();
  });

  it('should sum numbers', () => {
    const dto: CreateOperationDto = { num1: 5, num2: 3 };
    expect(service.sum(dto)).toBe(8);
  });

  it('should subtract numbers', () => {
    const dto: CreateOperationDto = { num1: 10, num2: 4 };
    expect(service.res(dto)).toBe(6);
  });

  it('should multiply numbers', () => {
    const dto: CreateOperationDto = { num1: 6, num2: 7 };
    expect(service.mul(dto)).toBe(42);
  });

  it('should divide numbers', () => {
    const dto: CreateOperationDto = { num1: 20, num2: 5 };
    expect(service.div(dto)).toBe(4);
  });

  it('should return error when dividing by zero', () => {
    const dto: CreateOperationDto = { num1: 10, num2: 0 };
    expect(service.div(dto)).toBe('Error, division entre cero.');
  });
});
