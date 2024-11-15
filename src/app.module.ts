import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConsumoAguaModule } from './consumo_agua/consumo_agua.module';
import { MongooseModule } from '@nestjs/mongoose'; 



@Module({
  imports: [ConsumoAguaModule,
    MongooseModule.forRoot( 'mongodb+srv://giovana_aula8:dbMnvBzimsi8YMnq@consumoaguaproject.s7bag.mongodb.net/?retryWrites=true&w=majority&appName=consumoAguaProject')
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
