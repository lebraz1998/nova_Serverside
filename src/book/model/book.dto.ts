import {
  IsBoolean,
  IsEmpty,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class InputBook {
  @IsEmpty()
  createDate: number;
  @IsEmpty()
  admin: string;
  @IsNotEmpty()
  @IsNumber()
  price: number;
  @IsNotEmpty()
  @IsNumber()
  startAppointmentTime: number;
  @IsNotEmpty()
  @IsString()
  title: string;
  @IsNotEmpty()
  @IsNumber()
  endAppointmentTime: number;
  @IsEmpty()
  taken: boolean;
}
export class UpdateBookParam {
  @IsMongoId()
  id: boolean;
}

export class GetBookParam {
  @IsNotEmpty()
  @IsMongoId()
  id: string;
}
