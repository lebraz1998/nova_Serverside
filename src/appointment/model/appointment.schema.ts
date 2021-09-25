import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AppointmentDocument = Appointment & Document;

@Schema()
export class Appointment {
  @Prop({ type: String })
  status: 'wating' | 'accpeted' | 'rejacted';
  @Prop({ type: Number })
  createDate: number;
  @Prop({ type: Number })
  startAppointmentTime: number;
  @Prop({ type: Number })
  endAppointmentTime: number;
  @Prop({ type: String })
  admin: string;
  @Prop({ type: Number })
  price: number;
  @Prop({ type: String })
  title: string;
  @Prop({ type: String })
  id: string;
}

export const AppointmentSchema = SchemaFactory.createForClass(Appointment);
