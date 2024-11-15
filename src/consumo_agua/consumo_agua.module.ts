import { Module } from '@nestjs/common';
import { ConsumoAguaController } from './consumo_agua.controller';
import { ConsumoAguaService } from './consumo_agua.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConsumoSchema } from './consumo_agua.model'; 


@Module({
  controllers: [ConsumoAguaController],
  providers: [ConsumoAguaService],
  imports: [
    MongooseModule.forFeature([{name: 'Consumo', schema: ConsumoSchema}])
  ]
})

export class ConsumoAguaModule {}





