import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Session,
} from '@nestjs/common';
import { GetBookParam } from 'src/book/model/book.dto';
import { ReturnRes } from 'src/res/res';
import { AppointmentService } from './appointment.service';
import {
  GetAppointmentParam,
  GetRejectAppointmentParam,
  InputAppointment,
} from './model/Appointment.dto';

@Controller('api/appointment')
export class AppointmentController {
  constructor(private AppointmentServices: AppointmentService) {}
  @Get('/')
  get(@Session() req: any) {
    return ReturnRes(this.AppointmentServices.findAll(req.username));
  }
  @Get('/:id')
  getOne(@Param() param: GetAppointmentParam) {
    return ReturnRes(this.AppointmentServices.findOne(param.id));
  }

  @Post('')
  create(@Body() body: InputAppointment) {
    return ReturnRes(this.AppointmentServices.create(body));
  }

  @Put('accpet/:id/:_id')
  accpet(@Param() id: GetAppointmentParam) {
    return ReturnRes(this.AppointmentServices.accpet(id));
  }
  @Put('reject/:id')
  reject(@Param() id: GetRejectAppointmentParam) {
    return ReturnRes(this.AppointmentServices.reject(id.id));
  }
  @Delete(':id')
  delete(@Param() id: GetBookParam) {
    return ReturnRes(this.AppointmentServices.delete(id.id));
  }
}
