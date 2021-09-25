import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { AppointmentController } from './appointment.controller';
import { Appointment, AppointmentSchema } from './model/Appointment.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerMiddleware } from 'src/appointment/logger.middleware';
import { Book, BookSchema } from 'src/book/model/book.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Appointment.name, schema: AppointmentSchema },
    ]),
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
  ],
  providers: [AppointmentService],
  controllers: [AppointmentController],
})
export class AppointmentModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'api/appointment', method: RequestMethod.PUT });
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'api/appointment', method: RequestMethod.GET });
  }
}
