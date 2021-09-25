import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book, BookDocument } from 'src/book/model/book.schema';
import { GetAppointmentParam, InputAppointment } from './model/Appointment.dto';
import { Appointment, AppointmentDocument } from './model/Appointment.schema';

@Injectable()
export class AppointmentService {
  constructor(
    @InjectModel(Appointment.name)
    private appointmentModel: Model<AppointmentDocument>,
    @InjectModel(Book.name)
    private bookModel: Model<BookDocument>,
  ) {}

  create(appointment: InputAppointment): Promise<Appointment> {
    appointment.createDate = Date.now();
    appointment.status = 'wating';
    return new this.appointmentModel(appointment).save();
  }
  findAll(args: any): Promise<Appointment[]> {
    return this.appointmentModel.find({ admin: args }).exec();
  }

  findOne(id: string): Promise<Appointment> {
    return this.appointmentModel.findOne({ _id: id }).exec();
  }

  async accpet(id: GetAppointmentParam): Promise<Appointment> {
    await this.bookModel.findOneAndUpdate(
      { _id: id._id },
      { $set: { taken: true } },
    );

    return this.appointmentModel
      .findOneAndUpdate({ _id: id.id }, { $set: { status: 'accpeted' } })
      .exec();
  }
  reject(id: string): Promise<Appointment> {
    return this.appointmentModel
      .findOneAndUpdate({ _id: id }, { $set: { status: 'rejacted' } })
      .exec();
  }

  delete(id: string): Promise<Appointment> {
    return this.appointmentModel.findOneAndDelete({ _id: id }).exec();
  }
}
