import { Injectable } from '@nestjs/common';
import { Consumo } from './consumo_agua.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ConsumoAguaService {

    constructor( @InjectModel('Consumo') private readonly consumoModel: Model<Consumo>) {}

    async postConsumption(consumption: Consumo){
        const consumptionModel = new this.consumoModel(
            {
                id: consumption.id,
                qtade_consumo: consumption.qtade_consumo,
                data_consumo: consumption.data_consumo

            }
        );
        const result = await consumptionModel.save();
        return result.id as string;
    }

    async getConsumptionWater(){
        const consumption = await this.consumoModel.find().exec();
        return consumption;
    }

    async getConsumptionWaterId(id: string){
        const consumption = await this.consumoModel.findOne({id: id}).exec();
        return consumption;
    }

}
