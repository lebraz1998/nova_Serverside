import {
  IsEmpty,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class InputAppointment {
  @IsNotEmpty()
  @IsMongoId()
  id: string;
  @IsEmpty()
  createDate: number;
  @IsEmpty()
  status: 'wating' | 'accpeted' | 'rejacted';
  @IsNotEmpty()
  @IsString()
  admin: string;
  @IsNotEmpty()
  @IsString()
  title: string;
  @IsNotEmpty()
  @IsNumber()
  price: number;
  @IsNotEmpty()
  @IsNumber()
  startAppointmentTime: number;
  @IsNotEmpty()
  @IsNumber()
  endAppointmentTime: number;
}

export class GetRejectAppointmentParam {
  @IsNotEmpty()
  @IsMongoId()
  id: string;
}

export class GetAppointmentParam {
  @IsNotEmpty()
  @IsMongoId()
  id: string;
  @IsNotEmpty()
  @IsMongoId()
  _id: string;
}
