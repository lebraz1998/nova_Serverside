import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  Session,
} from '@nestjs/common';
import { Request } from 'express';
import { ReturnRes } from 'src/res/res';
import { BookService } from './book.service';
import { GetBookParam, InputBook } from './model/book.dto';

@Controller('api/book')
export class BookController {
  constructor(private bookServices: BookService) {}
  @Get('/')
  get(@Session() req: any) {
    return ReturnRes(this.bookServices.findAll(req.username));
  }
  @Get('/user')
  getUser() {
    return ReturnRes(this.bookServices.findAllUser());
  }
  @Get('/:id')
  getOne(@Param() param: GetBookParam) {
    return ReturnRes(this.bookServices.findOne(param.id));
  }

  @Post('')
  create(@Session() session, @Body() body: InputBook) {
    return ReturnRes(this.bookServices.create(body, session));
  }

  @Put(':id')
  update(@Param() id: GetBookParam) {
    return ReturnRes(this.bookServices.update(id.id));
  }
  @Delete(':id')
  delete(@Param() id: GetBookParam) {
    return ReturnRes(this.bookServices.delete(id.id));
  }
}
