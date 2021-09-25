import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookDocument = Book & Document;

@Schema()
export class Book {
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
  @Prop({ type: Boolean })
  taken: boolean;
}

export const BookSchema = SchemaFactory.createForClass(Book);
