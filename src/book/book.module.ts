import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { LoggerMiddleware } from './logger.middleware';
import { Book, BookSchema } from './model/book.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
  ],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'api/book', method: RequestMethod.GET });
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'api/book', method: RequestMethod.POST });
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'api/book', method: RequestMethod.PUT });
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'api/book', method: RequestMethod.DELETE });
  }
}
