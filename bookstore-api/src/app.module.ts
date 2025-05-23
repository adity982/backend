import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { BooksModule } from './books/books.module';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';

@Module({
  imports: [AuthModule, BooksModule, UsersModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}