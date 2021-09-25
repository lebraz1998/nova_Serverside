import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Request, Response } from 'express';
import { InputUser } from './model/user.dto';

@Injectable()
export class UserService {
  loginAdmin = [
    { username: 'jawad', password: 'j' },
    { username: 'ahmad', password: 'j' },
    { username: 'mohmad', password: 'b' },
  ];
  login(req: Record<string, any>, body: InputUser, res: Response) {
    if (
      this.loginAdmin.filter(
        (res) =>
          res.username === body.username && res.password === body.password,
      ).length > 0
    ) {
      req.username = body.username;
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
      });
    }

    return res.status(HttpStatus.BAD_REQUEST).json({
      statusCode: HttpStatus.BAD_REQUEST,
    });
  }
}
