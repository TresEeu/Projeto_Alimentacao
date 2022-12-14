import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Tema } from './tema/entities/tema.entity';
import { TemaPostagem } from './tema/tema.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'db_alimentacao',
    entities: [Tema],
    synchronize: true
  }),
  TemaPostagem

],
  controllers: [],
  providers: [],
})
export class AppModule {}

