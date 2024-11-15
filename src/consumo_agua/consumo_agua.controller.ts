import { Controller, Body, Get, Post, Param } from '@nestjs/common';
import { ConsumoAguaService } from './consumo_agua.service';
import { Consumo } from './consumo_agua.model';

@Controller('consumo-agua')
export class ConsumoAguaController {
    constructor(private readonly consumoAguaService:ConsumoAguaService) {}

    @Get()
    getConsumption(): Promise<any> {
    return this.consumoAguaService.getConsumptionWater();
    }

    @Get(':id')
    getConsumptionId(@Param('id') id: string): Promise<any> {
    return this.consumoAguaService.getConsumptionWaterId(id);
    }

    @Post()
    async postConsumption(@Body() consumo: Consumo): Promise<any>{
        var response = await this.consumoAguaService.postConsumption(consumo);
        return { id: response }

    }

  }





