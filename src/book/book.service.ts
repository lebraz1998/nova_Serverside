import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GetBookParam, InputBook } from './model/book.dto';
import { Book, BookDocument } from './model/book.schema';

@Injectable()
export class BookService {
  constructor(@InjectModel(Book.name) private userModel: Model<BookDocument>) {}

  create(book: InputBook, session: any): Promise<Book> {
    book.createDate = Date.now();
    book.taken = false;
    book.admin = session.username;

    return new this.userModel(book).save();
  }
  findAll(admin: any): Promise<Book[]> {
    return this.userModel.find({ admin: admin, taken: false }).exec();
  }
  findAllUser(): Promise<Book[]> {
    return this.userModel.find({ taken: false }).exec();
  }
  findOne(id: string): Promise<Book> {
    return this.userModel.findOne({ _id: id }).exec();
  }
  update(id: string): Promise<Book> {
    return this.userModel
      .findOneAndUpdate({ _id: id }, { $set: { taken: true } })
      .exec();
  }

  delete(id: string): Promise<Book> {
    return this.userModel.findOneAndDelete({ _id: id }).exec();
  }
}
