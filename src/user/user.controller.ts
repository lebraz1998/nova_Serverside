import { Body, Controller, Post, Req, Res, Session } from '@nestjs/common';
import { Request, Response } from 'express';
import { InputUser } from './model/user.dto';
import { UserService } from './user.service';

@Controller('api/user')
export class UserController {
  constructor(private userServer: UserService) {}

  @Post('/')
  login(
    @Res() res: Response,
    @Session() session: Record<string, any>,
    @Body() body: InputUser,
  ) {
    return this.userServer.login(session, body, res);
  }
}
