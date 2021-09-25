import { IsNotEmpty, IsString } from 'class-validator';

export class InputUser {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
