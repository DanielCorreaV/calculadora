import { Controller, Post, Body } from '@nestjs/common';
import { OperationsService } from './operations.service';
import { CreateOperationDto } from './dto/create-operation.dto';

@Controller('operations')
export class OperationsController {
  constructor(private readonly operationsService: OperationsService) {}

  @Post('suma')
  suma(@Body() createOperationDto: CreateOperationDto) {
    return this.operationsService.sum(createOperationDto);
  }

  @Post('suma')
  resta(@Body() createOperationDto: CreateOperationDto) {
    return this.operationsService.res(createOperationDto);
  }

  @Post('suma')
  division(@Body() createOperationDto: CreateOperationDto) {
    return this.operationsService.div(createOperationDto);
  }

  @Post('suma')
  multiplicacion(@Body() createOperationDto: CreateOperationDto) {
    return this.operationsService.mul(createOperationDto);
  }
}
